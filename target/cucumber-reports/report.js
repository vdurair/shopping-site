$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "Verify if user is able to login in to the site",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Login as a authenticated user",
  "description": "",
  "id": "login-feature;login-as-a-authenticated-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is  on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user navigates to Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters username and Password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "success message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_on_homepage()"
});
formatter.result({
  "duration": 6602396100,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_navigates_to_Login_Page()"
});
formatter.result({
  "duration": 3866623800,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enters_username_and_Password()"
});
formatter.result({
  "duration": 3363771500,
  "status": "passed"
});
formatter.match({
  "location": "Login.success_message_is_displayed()"
});
formatter.result({
  "duration": 1351304900,
  "status": "passed"
});
});