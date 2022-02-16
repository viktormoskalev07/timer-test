# Rakuten Rewards Web Coding Exercise Challenges

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**Spend no more than 3 hours on the entire challenge, and complete as many steps and unit tests as possible. Step 1 has been completed for you in `App.tsx` so please start at Step 2 in `EXERCISE.md`.**

## Quick Start

```bash
# Install dependencies - you can use npm if you don't want to use yarn
yarn install

# Start in development mode to start developing your implementations
yarn start

# Run all unit tests for verification, and ensure all tests pass
yarn test
```

## The Exercise

Look at [EXERCISE.md](EXERCISE.md) to start.

## Requirements for all exercises

- Code your component styles yourself - please don't use out-of-the-box solutions like Material-UI or anything similar.
- Code as if you're creating a reusable uikit library. Refactor, reuse, and abstract your code as you get through the steps - you should be able to keep things DRY.
- The baseline tests parallel what the implementation requirements are, and can provide hints on implementing them.
- Most of the time, all tests should pass when moving on to the next step. However, you may need to refactor all tests at a certain point.
- You should aim to complete as many steps and as many unit tests as possible, starting with the first step and moving forward sequentially.
- You should be able to add more unit tests where necessary to test against missing cases from the baseline tests, and edge cases.
- CI must pass when pushing code:
  - there should be no lint errors
  - tests should pass

## IDE Setup

You can use any text editor + CLI commands to complete these exercises. However, we recommend using VS Code for ease of use.

If using VS Code, you can optionally install these extensions for assist with your development:
- ESLint
- stylelint
- vscode-styled-components

## Styling

DO NOT USE LIBRARIES like MUI

We'd like you to create required styles yourself.

Some exercises will require you to style your components properly, in order to match a requirement/design. While we encourage usage of styled components, you may also use global or css module styling, which CRA supports out of the box.

## Code linting

As you code when running `yarn start`, CRA will take care of reporting javscript lint errors to you. It may not report `stylelint` errors. There are two additional scripts you can run to manually check lint errors via CLI:

```bash
# runs both eslint/js + stylelint checks
yarn lint

# runs just eslint/js linting
yarn lint:js

# run just stylelint
yarn lint:styles
```

## Tests

We use `jest` as the test runner, and encourage usage of `@testing-library/react`, as this is the officially supported testing library by React. However, you are free to use another testing library that you are familiar with, such as `Enzyme`. If you do use another, you may need to work ensure that it runs, which may involve ejecting CRA and updating configuration files.

The test files specify required tests to write and pass as Jest `todo` tests. You must update each to implement the testing requirement to the best of your ability and understanding.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
