# Project setup homework

## Requirements  
Clone this repository to your workstation.  


## Step 1: project structure verification
Check if you have all the files from list below:

- package.json file with dependencies
- babel.config.cjs file
- js folder with file
- tests folder with test file
- .gitignore file

## Step 2: installation
Navigate to the projects root and execute command below.

`yarn install` to install all dependencies.

## Step 3: file integrity confirmation
Check if `package.json` contains lines:

```json
"scripts": {
    "test": "jest"
  }
```

## Step 4: running tests
Run `yarn jest` command to execute tests

jest should output lines as below:

```text
yarn run v1.22.19
  console.log
    The perimeter of a rectangle is 18 and the area is 20

      at log (js/rectangle.js:12:20)

  console.log
    The perimeter of a rectangle is 18 and the area is 20

      at Object.log (tests/rectangle.test.js:15:37)

 PASS  tests/rectangle.test.js
  √ calculates rectangle perimeter (3 ms)
  √ calculates rectangle area
  √ displays rectangle info (33 ms)
  √ value is positive
  √ is a value (3 ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        1.477 s, estimated 2 s
Ran all test suites.
```

### If terminal output says that all tests passed then it means we finished the task correctly