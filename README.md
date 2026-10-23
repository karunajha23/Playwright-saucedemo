# Playwright-saucedemo
Playwright UI test automation using JavaScript
End-to-end test automation for the Swag Demo, built with Playwright and JavaScript. 

Project Structure
├── data/ # Test data
├── fixtures/ # Custom Playwright fixtures
├── pages/ # Page Object classes
├── tests/ # Test specs
├── playwright.config.js


## Test Coverage
- Login: valid user, locked-out user, wrong password, empty username, empty password

## Getting Started
```bash
git clone https://github.com/karunajha23/Playwright-saucedemo.git
cd Playwright-saucedemo
npm install
npx playwright install
npx playwright test
```

## View the Report
```bash
npx playwright show-report
