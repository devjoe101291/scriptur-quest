@echo off
echo === Preparing Repository for GitHub ===

REM Initialize git repository if it doesn't exist
if not exist ".git" (
    echo Initializing git repository...
    git init
    git add .
    git commit -m "Initial commit: Scriptur Quest Pro React App"
)

echo.
echo === Repository Setup Complete ===
echo.
echo Next steps:
echo 1. Create a new repository on GitHub (https://github.com/new)
echo 2. Copy the repository URL
echo 3. Run: git remote add origin YOUR_REPOSITORY_URL
echo 4. Run: git push -u origin main
echo.
echo Or use GitHub CLI:
echo gh repo create scriptur-quest-pro --public --push
echo.
pause