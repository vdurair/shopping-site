#Login Validation
Feature: Login feature
  Verify if user is able to login in to the site

  
  Scenario: Login as a authenticated user
    Given user is  on homepage
    When user navigates to Login Page
    And user enters username and Password
    Then success message is displayed

 