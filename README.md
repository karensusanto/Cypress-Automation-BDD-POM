# BDD + POM Cypress Automation

## Directories
- ./cypress/e2e/features/ -> directory for feature files (Gherkin)
- ./cypress/fixtures/ -> directory to store fixtures, static data used in testing for example, valid user credentials
- ./cypress/pages -> directory for POM (Project Object Model) files
- ./cypress/support/step_definitions -> directory for step definitions (Behavior Driven Development / BDD)
- ./cypress.config.js -> cypress configuration with BDD setup
- ./mochawesome-report/.jsons -> directory for generated report by mochawesome

Test scenarios in Gherkin format are written in feature files (./cypress/e2e/features/) **->** step definitions defines the action to take to do the scenarios (./cypress/support/step_definitions) **->** Using methods defined in POM, whose methods are how to interact with the page's components (./cypress/pages)

## Test Environment
[Dashboard](https://opensource-demo.orangehrmlive.com)

## Steps to run test
1. Clone git repository
2. Open terminal
3. cd to directory
4. Run the following command to install cypress and the dependencies
```bash
npm install
```
5. Run this command to run test in GUI
```bash
npx cypress open
```
6. Run this command to run test headless
```bash
npx cypress run
```

## Result (Headless)
1. Test: Add new user admin
![Add Admin Test Screenshot](./images/admin-feature.png)

2. Test: Login with valid credential
![Login Test Screenshot](./images/login-feature.png)

3. Test: Login with valid and invalid credentials (negative case)
![Login Test With Negative Screenshot](./images/login-feature-with-negative.png)

## What I've learned
- Since the select user dropdown in add admin form gives dynamic result based on the typed in string, when the dropdown has no result, the test will fail (because in the script we are choosing the first user that appears in the dropdown)
- The add admin test can not be run multiple times since the added username must be unique. So if the test is being rerun, it will fail unless the successfully added admin from the previous run is deleted manually on the website.
- Elements need time to load, so it is safer to add a few seconds wait between actions to ensure the page elements are loaded completely.
