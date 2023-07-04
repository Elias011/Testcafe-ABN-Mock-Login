# ABN mock login test automation assignment using Testcafe/Typescript

### Overview
This README provides instructions and guidelines for Testcafe/Typescript framework to test ABN mock login page assignment. The assignment aims to assess my skills in designing and implementing automated FE tests for a specific application or system.

### Features
- **Modular Design:** The framework follows page object model design pattern, allowing easy organization and maintenance of test cases 
- **Cross-Browser Compatibility:** The framework supports testing login pages across multiple browsers(Chrome, Edge and Firefox)
- **Test Data Management:** All test data, including different user credentials and authentications are collected into **./data/data.json**.
- **Assertions and Validations:** The framework uses Testcafe assertions and validations to verify login success, failure, error messages, and other expected behaviors.
- **Reporting and Logging:** Detailed reports and logs are generated as html report after each test run. Test report you can find by **./Reports/** in cluding screenshots for the failures 

### Test cases
Three test cases: 
- Login with valid credentials
   - Sign in with valid username and password
   - Verify whether a login was successful or not
   - Sign out
   - Verify whether a logout was successful or not
   - Expected successful login and logout
- Login with invalid credentials
   - Sign in with invalid username and password 
   - Verify whether a login was successful or not
   - Expected no successful login
- Login with empty fields
  - Leave both the username and password fields empty 
  - Verify if it can be logged in or not 
  - Verify whether a login was successful or not
  - Expected no successful login

### Installation
After cloning the project or downloading it:

- Run ```npm install``` to install the required packages 
- To Configure the Testcaf settings, such as browser preferences, test environment details, and any other required parameters from **./.testcafe.json**
- To Configure Typescript from **tsconfig.json**
- Test file is created at **./Tests/Session**

### Running Tests
To execute the test, follow these steps:
- Open a terminal or command prompt and navigate to the root directory of your test project.
- Run ```npm run test```The test will be executed parallel on Chrome, Edge, and Firefox
- Would you like to specify run in a specific browser, then run ```npm run test-<browser name>```
- When you run the test, it automatically will create an HTTP server and run an ABN mock login page, where the test will be executed 

### Reporting and Analysis
The Login Page Test Automation Framework generates detailed test reports in html format. These reports provide insights into test coverage, execution results, browsers, and specific login-related issues including screenshots for failed scenarios. 