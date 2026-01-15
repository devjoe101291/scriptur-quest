@echo off
echo === Building Android APK with Java 17 ===

REM Find Java 17 installation
set JAVA17_PATH=
for /d %%i in ("D:\java17\jdk*") do (
    set JAVA17_PATH=%%i
    goto :found
)

:found
if "%JAVA17_PATH%"=="" (
    echo Error: Java 17 not found in D:\java17
    echo Please install Java 17 first using MANUAL-JAVA17-INSTRUCTIONS.txt
    pause
    exit /b 1
)

echo Found Java 17 at: %JAVA17_PATH%

REM Set environment variables
set JAVA_HOME=%JAVA17_PATH%
set GRADLE_USER_HOME=D:\gradle_cache
set JAVA_OPTS=-Djava.io.tmpdir=D:\android_tmp

REM Clean previous builds
echo Cleaning previous build artifacts...
if exist "android\app\build" rmdir /s /q "android\app\build"

REM Rebuild web assets
echo Building web assets...
call npm run build

REM Sync to Android
echo Syncing assets to Android...
call npx cap sync android

REM Build APK
echo Building Android APK...
echo This may take 10-15 minutes...
cd android
call gradlew.bat assembleDebug --gradle-user-home "D:\gradle_cache" --no-daemon

if %ERRORLEVEL% EQU 0 (
    echo.
    echo === SUCCESS! ===
    echo APK generated at: android\app\build\outputs\apk\debug\app-debug.apk
    echo You can now install this APK on your Android device!
) else (
    echo.
    echo === BUILD FAILED ===
    echo Check the error messages above for details.
)

cd ..
pause