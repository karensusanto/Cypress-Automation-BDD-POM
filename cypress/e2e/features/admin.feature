Feature: OrangeHRM Add Admin

Scenario Outline: Add user as admin after login
    Given user logged in as standard_user
    When user navigates to Admin page
    And clicks the Add button
    And user fill in add user form using role "<role>", status "<status>", employee name "<employee_name>", username "<username>", and password "<password>"
    And clicks Save button
    And search user by username "<username>"
    And click Search button
    Then user should see user with username "<username>" in table

    Examples:
      | role  | status   | employee_name | username  | password |
      | Admin | Enabled  | John          | User123   | 1234567a |
