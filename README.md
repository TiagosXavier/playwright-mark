# Playwright Test Automation for Task Management

## 📌 Overview
This project contains automated tests using [Playwright](https://playwright.dev/) to validate the functionalities of a task management system. The tests cover scenarios of task creation, updating, and deletion.

## 🚀 Technologies Used
- [Playwright](https://playwright.dev/) - End-to-end testing framework
- [TypeScript](https://www.typescriptlang.org/) - Static typing for JavaScript
- [Node.js](https://nodejs.org/) - JavaScript runtime environment

## 📂 Project Structure
```
📂 project
│--📂 fixtures        # Models and test data
│--📂 support
│   │--📂 helpers     # Helper functions for data manipulation
│   │--📂 pages       # Page Objects for UI interactions
│-- tests.spec.ts     # Automated test definitions
│-- playwright.config.ts  # Playwright configuration
```

## 🔧 Setup and Installation
### Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/) version 16 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation Steps
1. Clone this repository:
   ```sh
   git clone https://github.com/your-user/your-repository.git
   cd your-repository
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Install browsers supported by Playwright:
   ```sh
   npx playwright install
   ```

## 🧪 Running Tests
To run all tests, use:
```sh
npx playwright test
```

To run specific tests, use:
```sh
npx playwright test tests.spec.ts
```

To view tests in UI mode:
```sh
npx playwright test --ui
```

## 📜 Test Cases
The tests cover the following scenarios:

### 📌 Task Registration
✅ Successfully create a new task
✅ Prevent duplicate task creation
✅ Validate required field

### 📌 Task Update
✅ Mark a task as completed

### 📌 Task Deletion
✅ Delete a task

## 📋 Contribution
Feel free to contribute with improvements and new tests!

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the repository (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License. Feel free to use and improve it!

---
🔹 _Developed with Playwright to ensure quality in task management._

