# Weather App

## [You can access the here DEMO](https://weather-app-one-jet.vercel.app/)

## `Please read this section before starting to development.`

<br>

First of all you have to install these plugins to your editor (**vscode**), but if you are using another code editor or IDE install them for your dev environment

<!--- [Tailwind CSS IntelliSense for VS Code](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) -->

- [ESLint Plugin for VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- [Prettier - Code formatter for VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

If you don't use one of these Code Editor/IDE [please check if your EDITOR/IDE exists or not](https://editorconfig.org/#download) please install the Editor Config plugin for your Code Editor/IDE.

# Linter / Commit Messages

While developing this project, you should take attention to linter rules, all of your codes and commit messages, because you can't do any development without checking by rules.

<span style="color:red;">**Notice:**</span> Before commit to changes, [HuskyJs](https://github.com/typicode/husky) checking these commit messages / linter rules

If you get a lint's error when you committing a message, you can check for [eslint](https://eslint.org/docs/user-guide/getting-started) linter rules or if you get an error because of your commit message you can check below commit message types and examples or you can check from [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

## **Commit-lint Types and Messages**

**Examples:**

```bash
git commit -m "feat: add navbar component"
```

```bash
git commit -m "docs(readme): add server link"
```

- **`build:`** Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **`ci:`** Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
- **`chore:`** Updating packages,build project etc. (no production code change)
- **`docs:`** Documentation only changes
- **`feat:`** A new feature
- **`fix:`** A bug fix
- **`perf:`** A code change that improves performance
- **`refactor:`** A code change that neither fixes a bug nor adds a feature, when refactoring a production code, eg. renaming a variable.
- **`revert:`** A commit revert message
- **`style:`** Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **`test:`** Adding missing tests or correcting existing tests

#

## Start Development

Use below script for clone repository and install dependencies.

```bash
git clone https://github.com/emresandikci/weather-app.git && cd weather-app && yarn install
```

## ENVIRONMENT VARIABLES

Please create the **`.env`** file and add below environment key and a variable which shared with you as an API URL

```
REACT_APP_API_BASE_URL=https://api.weatherapi.com/v1
REACT_APP_WEATHER_API_KEY=<weather-api-client-key>
```

after add the above environment key and variable that shared with you, run below script to start development and server.

# Available Scripts to run development server

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

<!--
# Automted Tests (e2e)

Automated test coded with Cypress. Please follow the below instructions to run tests.

For the headless tests run below script

### `yarn test`

If you want to see tests visually then run below script and choose a test from running browser to start test senario

### `yarn test:open`
-->
