# speakers-list

[![Travis (.com)](https://img.shields.io/travis/com/CyberScouter/speakers-list?logo=travis)](https://travis-ci.com/CyberScouter/speakers-list)
[![Codecov](https://img.shields.io/codecov/c/gh/CyberScouter/speakers-list?logo=codecov)](https://codecov.io/gh/CyberScouter/speakers-list)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/CyberScouter/speakers-list?logo=code-climate)](https://codeclimate.com/github/CyberScouter/speakers-list)
[![GitHub license](https://img.shields.io/github/license/CyberScouter/speakers-list)](https://github.com/CyberScouter/speakers-list/blob/master/LICENSE)
[![Vue.js](https://img.shields.io/badge/dynamic/json?color=brightgreen&url=https://raw.githubusercontent.com/CyberScouter/speakers-list/master/ui/package.json&query=$.dependencies.vue&label=vue&logo=vue.js)](https://vuejs.org/)
[![Webpack](https://img.shields.io/badge/dynamic/json?color=brightgreen&url=https://raw.githubusercontent.com/CyberScouter/speakers-list/master/ui/package-lock.json&query=$.dependencies.webpack.version&label=webpack&logo=webpack)](https://webpack.js.org/)
[![Axios](https://img.shields.io/badge/dynamic/json?color=brightgreen&url=https://raw.githubusercontent.com/CyberScouter/speakers-list/master/ui/package.json&query=$.dependencies.axios&label=axios)](https://github.com/axios/axios)
[![Jest](https://img.shields.io/badge/dynamic/json?color=brightgreen&url=https://raw.githubusercontent.com/CyberScouter/speakers-list/master/ui/package-lock.json&query=$.dependencies.jest.version&label=jest&logo=jest)](https://jestjs.io/)
[![Cypress](https://img.shields.io/badge/dynamic/json?color=brightgreen&url=https://raw.githubusercontent.com/CyberScouter/speakers-list/master/ui/package-lock.json&query=$.dependencies.cypress.version&label=cypress)](https://www.cypress.io/)
[![Deployed on Heroku](https://img.shields.io/badge/heroku-deployed-blueviolet?logo=heroku)](https://speakers-list.herokuapp.com/)

Web app for maintaining lists of speakers in meetings.

## Getting started

To get started with the app, clone the repository and then install the required packages:

```
$ git clone https://github.com/CyberScouter/speakers-list.git
$ cd speakers-list/ui
$ npm install
```

From the root directory, compile the project:

```
$ sbt compile stage
```

Finally, run the tests to verify that everything is working correctly:

```
$ sbt test
```

If all tests pass, you'll be ready to deploy or run the app in a local server:

```
$ sbt run
```

## License

All source code is available under the AGPLv3. See [LICENSE.md](https://github.com/CyberScouter/speakers-list/blob/master/LICENSE) for details.
