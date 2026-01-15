@echo off
echo === Attempting Final Build Solution ===

REM Set environment for Java 17
set JAVA_HOME=D:\java17\jdk-17.0.17+10
set GRADLE_USER_HOME=D:\gradle_cache
set JAVA_OPTS=-Djava.io.tmpdir=D:\android_tmp

REM Clean previous attempts
echo Cleaning build directory...
if exist "android\app\build" rmdir /s /q "android\app\build"

REM Try the simplest possible build
echo Attempting minimal build...
cd android

REM Use Gradle wrapper with minimal configuration
.\gradlew.bat assembleDebug ^
  --gradle-user-home "D:\gradle_cache" ^
  --no-daemon ^
  --warning-mode all ^
  --stacktrace

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ***************************************************
    echo *** SUCCESS! APK Generated Successfully! ***
    echo ***************************************************
    echo APK location: android\app\build\outputs\apk\debug\app-debug.apk
    echo.
) else (
    echo.
    echo ***************************************************
    echo *** BUILD FAILED ***
    echo ***************************************************
    echo Please check error messages above.
    echo Consider freeing up C: drive space or using cloud build services.
    echo.
)

cd ..
pause