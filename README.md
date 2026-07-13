# BDD + POM Cypress Automation

## Test Environment
[Dashboard](https://opensource-demo.orangehrmlive.com)

## Steps to run test
```bash
npx cypress run
```

## Result (Headless)
![Add Admin Test Screenshot](./images/admin-feature.png)

![Login Test Screenshot](./images/login-feature.png)

![Login Test With Negative Screenshot](./images/login-feature-with-negative.png)

## What I've learned
- Since the select user dropdown in add admin form gives dynamic result based on the typed in string, when the dropdown has no result, the test will fail (because in the script we are choosing the first user that appears in the dropdown)
- The add admin test can not be run multiple times since the added username must be unique. So if the test is being rerun, it will fail unless the successfully added admin from the previous run is deleted manually on the website.
- Elements need time to load, so it is safer to add a few seconds wait between actions to ensure the page elements are loaded completely.
