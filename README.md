# Book Search Engine

## Table of Contents

- [Description](#description)
- [Technology](#technology)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Description

This application is designed so that users can use Google's Book API in order to search for books. Users have the ability to login to their accounts in order to make a list of books that they are interested in, as well as remove the books from the list if they want to.

## Technology

This application was built with:

- Express.js
- React.js
- Node.js
- GraphQL
- Apollo Server
- Javascript
- MongoDB

## Installation

In terminal, run the command:

```
npm install
```

## Usage

After installing all the npm packages, run the command:

```
npm run develop
```

#### Heroku Deployment

- Create a Heroku app: 

```
heroku create
```

- Create a MongoDB Atlas database:

``` 
Cluster -> Collections -> Create Database
```

- Change Heroku settings:

```
Config Vars -> Key: MONGODB_URI -> Value: (from Cluster connect, change database name and password)
```

- Git push:

```
git push heroku main
heroku open
```

#### Screenshots

*Screenshots go here*

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <br>
This project is licensed under MIT, for more information please visit [this website](https://opensource.org/licenses/MIT)

## Questions

Contact me if you want to ask anything about this application:

- [Email](mailto:danieltlyeung@gmail.com)
- [Github Profile](https://github.com/dtlyeung)
