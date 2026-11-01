@echo off
SETLOCAL Enabledelayedexpansion

echo ==============================================
echo   ANGULAR STEP-BY-STEP MIGRATION PIPELINE
echo               v16 ---^> v22
echo ==============================================
echo.

:: Check for uncommitted changes
git status --porcelain > temp_status.txt
set /p STATUS=<temp_status.txt
del temp_status.txt
if not "%STATUS%"=="" (
    echo [ERROR] You have uncommitted changes in your repository.
    echo Please commit or stash them before running this migration script.
    exit /b 1
)

echo [1/6] Migrating from v16 to v17...
call npx ng update @angular/cli@17 @angular/core@17 --force
if %ERRORLEVEL% NEQ 0 goto :error
git add .
git commit -m "chore: upgrade to v17"

echo [2/6] Migrating from v17 to v18...
call npx ng update @angular/cli@18 @angular/core@18 --force
if %ERRORLEVEL% NEQ 0 goto :error
git add .
git commit -m "chore: upgrade to v18"

echo [3/6] Migrating from v18 to v19...
call npx ng update @angular/cli@19 @angular/core@19 --force
if %ERRORLEVEL% NEQ 0 goto :error
git add .
git commit -m "chore: upgrade to v19"

echo [4/6] Migrating from v19 to v20...
call npx ng update @angular/cli@20 @angular/core@20 --force
if %ERRORLEVEL% NEQ 0 goto :error
git add .
git commit -m "chore: upgrade to v20"

echo [5/6] Migrating from v20 to v21...
call npx ng update @angular/cli@21 @angular/core@21 --force
if %ERRORLEVEL% NEQ 0 goto :error
git add .
git commit -m "chore: upgrade to v21"

echo [6/6] Migrating from v21 to v22...
call npx ng update @angular/cli@22 @angular/core@22 --force
if %ERRORLEVEL% NEQ 0 goto :error
git add .
git commit -m "chore: upgrade to v22"

echo.
echo ==============================================
echo [SUCCESS] Migration complete! You are on v22.
echo ==============================================
goto :end

:error
echo.
echo [ERROR] The migration halted due to a failure in the previous step.
echo Resolve the dependency conflict, commit your changes, and run the next step manually.
exit /b %ERRORLEVEL%

:end
ENDLOCAL
