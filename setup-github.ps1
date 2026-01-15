# Scriptur Quest Pro - GitHub Setup Script

Write-Host "=== Preparing Repository for GitHub ===" -ForegroundColor Green

# Check if git repository exists
if (-not (Test-Path ".git")) {
    Write-Host "Initializing git repository..." -ForegroundColor Yellow
    git init
    git add .
    git commit -m "Initial commit: Scriptur Quest Pro React App"
    Write-Host "Git repository initialized!" -ForegroundColor Green
} else {
    Write-Host "Git repository already exists." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=== Repository Setup Complete ===" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Create a new repository on GitHub (https://github.com/new)" -ForegroundColor White
Write-Host "2. Copy the repository URL" -ForegroundColor White
Write-Host "3. Run: git remote add origin YOUR_REPOSITORY_URL" -ForegroundColor White
Write-Host "4. Run: git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "Or use GitHub CLI:" -ForegroundColor Cyan
Write-Host "gh repo create scriptur-quest-pro --public --push" -ForegroundColor White
Write-Host ""
Write-Host "After pushing, the GitHub Action will automatically build your APK!" -ForegroundColor Green
Write-Host "You can download it from the Actions tab in your repository." -ForegroundColor Green