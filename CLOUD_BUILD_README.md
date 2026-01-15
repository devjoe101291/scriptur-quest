# Scriptur Quest Pro - Android APK Builder

This repository contains the configuration to build your Android APK using GitHub Actions.

## 🚀 Quick Start

1. **Push your code to GitHub**
   - Create a new repository on GitHub
   - Push your local code to that repository

2. **Trigger the build**
   - Push to the `main` branch
   - Or manually trigger from the GitHub Actions tab

3. **Download your APK**
   - Go to the Actions tab in your repository
   - Click on the latest workflow run
   - Download the APK from the "Artifacts" section

## 📱 APK Information

- **Output**: `app-debug.apk`
- **Location**: `android/app/build/outputs/apk/debug/app-debug.apk`
- **Android Version**: Compatible with Android 6.0+ (API level 23+)

## ⚙️ Technical Details

The cloud build uses:
- **Ubuntu latest** environment
- **Node.js 18**
- **Java 17** (Temurin distribution)
- **Android SDK** with latest build tools
- **Capacitor 8** for cross-platform compatibility

## 🔧 Customization

You can modify the `.github/workflows/build-apk.yml` file to:
- Change the trigger branches
- Adjust Java/Node versions
- Add signing for release builds
- Modify build variants (debug/release)

## 📦 Release Management

When you push to the `main` branch:
- Automatically creates a GitHub release
- Tags the release with version number
- Attaches the APK to the release
- Keeps releases for easy access

## 🆘 Troubleshooting

If the build fails:
1. Check the Actions tab for detailed logs
2. Verify all dependencies are committed
3. Ensure `package.json` is properly configured
4. Check that the Android configuration is correct

## 💾 Storage

- Artifacts are kept for 30 days
- Releases are stored permanently
- APK size is typically 5-10 MB

The APK will be fully functional and can be installed on any Android device running Android 6.0 or higher.