Feature: OrangeHRM Login

Scenario Outline: User logs in with valid credentials
    Given user is on the login page
    When user logs in using username "<username>" and password "<password>"
    And clicks the login button
    Then user should see the login "<outcome>"
 
    Examples:
      | username | password  |  outcome |
      | Admin    | admin123  | success  |
      | Admin    | admin124  | failure  |
