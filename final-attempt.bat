@echo off
echo === FINAL ATTEMPT: Building Android APK ===

REM Ensure we have Java 17 available
if not exist "D:\java17\jdk-17.0.17+10" (
    echo Error: Java 17 not found at D:\java17\jdk-17.0.17+10
    echo Please verify Java 17 is installed in this location
    pause
    exit /b 1
)

REM Set environment variables
set JAVA_HOME=D:\java17\jdk-17.0.17+10
set GRADLE_USER_HOME=D:\gradle_cache
set JAVA_OPTS=-Djava.io.tmpdir=D:\android_tmp

echo Java Home: %JAVA_HOME%
echo Gradle User Home: %GRADLE_USER_HOME%

REM Clean any previous build attempts
echo Cleaning previous build artifacts...
if exist "app\build" rmdir /s /q "app\build" 2>nul

REM Check if we have enough disk space (try to create a test file)
echo Testing disk space availability...
echo Test > test_space.tmp
if exist test_space.tmp (
    del test_space.tmp
    echo Disk space check passed
) else (
    echo Warning: Possible disk space issue detected
)

REM Execute the build with specific Java 17 parameters
echo Starting build process...
cd app

echo Attempting to patch capacitor.build.gradle to use Java 17...
cd ..
powershell -Command "(Get-Content app\capacitor.build.gradle) -replace 'JavaVersion.VERSION_21', 'JavaVersion.VERSION_17' | Set-Content app\capacitor.build.gradle"

echo Updated capacitor.build.gradle:
type app\capacitor.build.gradle

echo.
echo Running Gradle build...
cd ..
call android\gradlew.bat assembleDebug ^
    -Pandroid.compileSdkVersion=33 ^
    -Pandroid.targetSdkVersion=33 ^
    --gradle-user-home "D:\gradle_cache" ^
    --no-daemon ^
    --info

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ***************************************************
    echo *** SUCCESS! APK Generated Successfully! ***
    echo ***************************************************
    echo APK location: android\app\build\outputs\apk\debug\app-debug.apk
    echo.
    dir android\app\build\outputs\apk\debug\*.apk
) else (
    echo.
    echo ***************************************************
    echo *** BUILD FAILED ***
    echo ***************************************************
    echo The build did not complete successfully.
    echo Check the error messages above for details.
    echo.
)

pause