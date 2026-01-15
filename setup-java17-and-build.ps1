# Script to download, install Java 17 on D: drive and build Android APK
# Run this script from the project root directory

Write-Host "=== Setting up Java 17 for Android APK build ===" -ForegroundColor Green

# Create directory for Java 17 on D: drive
$javaDir = "D:\java17"
if (!(Test-Path $javaDir)) {
    New-Item -ItemType Directory -Path $javaDir -Force
    Write-Host "Created directory: $javaDir" -ForegroundColor Yellow
}

# Navigate to Java directory
Set-Location $javaDir

# Download Java 17 (Eclipse Temurin 17 LTS)
Write-Host "Downloading Java 17..." -ForegroundColor Yellow
$downloadUrl = "https://github.com/adoptium/temurin17-binaries/releases/download/jdk-17.8+7/OpenJDK17U-jdk_x64_windows_hotspot_17.8+7.zip"
$zipFile = "$javaDir\jdk17.zip"

try {
    Invoke-WebRequest -Uri $downloadUrl -OutFile $zipFile -UseBasicParsing
    Write-Host "Download completed!" -ForegroundColor Green
} catch {
    Write-Host "Failed to download Java 17. Please download manually from:" -ForegroundColor Red
    Write-Host "https://adoptium.net/temurin/releases/?version=17" -ForegroundColor Cyan
    exit 1
}

# Extract Java 17
Write-Host "Extracting Java 17..." -ForegroundColor Yellow
Expand-Archive -Path $zipFile -DestinationPath $javaDir -Force
Remove-Item $zipFile -Force

# Find the extracted JDK directory
$jdkDir = Get-ChildItem -Path $javaDir -Directory | Where-Object { $_.Name -like "jdk*" } | Select-Object -First 1

if ($jdkDir) {
    $javaHome = $jdkDir.FullName
    Write-Host "Java 17 installed at: $javaHome" -ForegroundColor Green
    
    # Go back to project directory
    Set-Location "D:\Joey Ventulan\Personal Apps\scriptur-quest-pro-main\scriptur-quest-pro-main"
    
    # Update gradle.properties to use Java 17
    $gradleProps = "android\gradle.properties"
    $javaHomeEscaped = $javaHome -replace '\\', '\\'
    
    $gradleContent = @"
org.gradle.java.home=$javaHomeEscaped
org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m
android.useAndroidX=true
android.enableJetifier=true
"@
    
    Set-Content -Path $gradleProps -Value $gradleContent -Force
    Write-Host "Updated gradle.properties to use Java 17" -ForegroundColor Green
    
    # Clean previous build artifacts
    Write-Host "Cleaning previous build artifacts..." -ForegroundColor Yellow
    if (Test-Path "android\app\build") {
        Remove-Item -Recurse -Force "android\app\build" -ErrorAction SilentlyContinue
    }
    
    # Rebuild web assets
    Write-Host "Building web assets..." -ForegroundColor Yellow
    npm run build
    
    # Sync to Android
    Write-Host "Syncing assets to Android..." -ForegroundColor Yellow
    npx cap sync android
    
    # Build APK using Java 17 from D: drive
    Write-Host "Building Android APK..." -ForegroundColor Yellow
    Write-Host "This may take 10-15 minutes..." -ForegroundColor Cyan
    
    Set-Location android
    $env:JAVA_HOME = $javaHome
    $env:GRADLE_USER_HOME = "D:\gradle_cache"
    $env:JAVA_OPTS = "-Djava.io.tmpdir=D:\android_tmp"
    
    & ".\gradlew.bat" assembleDebug --gradle-user-home "D:\gradle_cache" --no-daemon
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "`n=== SUCCESS! ===" -ForegroundColor Green
        Write-Host "APK generated at: android\app\build\outputs\apk\debug\app-debug.apk" -ForegroundColor Green
        Write-Host "You can now install this APK on your Android device!" -ForegroundColor Green
    } else {
        Write-Host "`n=== BUILD FAILED ===" -ForegroundColor Red
        Write-Host "Check the error messages above for details." -ForegroundColor Yellow
    }
} else {
    Write-Host "Could not find JDK directory after extraction" -ForegroundColor Red
}

Write-Host "`n=== Process completed ===" -ForegroundColor Green