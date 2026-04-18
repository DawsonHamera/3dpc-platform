#!/usr/bin/env pwsh
# Phase 1 Frontend Validation Script
# Run this after PowerShell 6+ is installed

Write-Host "=== Phase 1 Frontend Validation ===" -ForegroundColor Cyan
Write-Host ""

$clientPath = "C:\Users\dawso\Desktop\3dpc-platform\client"

# Change to client directory
Set-Location $clientPath

Write-Host "1. Running ESLint..." -ForegroundColor Yellow
$lintResult = npm run lint
if ($LASTEXITCODE -eq 0) {
    Write-Host "   ✅ Lint passed" -ForegroundColor Green
} else {
    Write-Host "   ❌ Lint failed" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "2. Running TypeScript build..." -ForegroundColor Yellow
$buildResult = npm run build
if ($LASTEXITCODE -eq 0) {
    Write-Host "   ✅ Build passed" -ForegroundColor Green
} else {
    Write-Host "   ❌ Build failed" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=== All validation checks passed! ===" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Start the dev server: npm run dev"
Write-Host "2. Navigate to /shop/manage/sections"
Write-Host "3. Test drag-and-drop reordering"
Write-Host "4. Save and verify persistence"
Write-Host ""
