Feature: OrangeHRM Login

Scenario Outline: User logs in with valid credentials
    Given user is on the login page
    When user logs in using username "<username>" and password "<password>"
    And clicks the login button
    Then user should see the dashboard page
 
    Examples:
      | username | password  |
      | Admin    | admin123  |
