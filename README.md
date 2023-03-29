<p align="center"><img src="./static/Tykok_Many_soccer_players_on_a_field_looking_at_a_club_manageme_60994a40-013f-439e-8317-e4051f539416.png" width="80%"/></p>

<h2 align="center">Football club manager</h2>

**Little description here to your [Football club manager][projectLink]**

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Running from command line](#running-from-command-line)
  - [Run with docker (**advised**)](#run-with-docker-advised)
  - [Run with `npm`](#run-with-npm)
- [Basic Configuration](#basic-configuration)
  - [Configuration for `npm`](#configuration-for-npm)
- [Credits](#credits)


## Running from command line

### Run with docker (**advised**)

You can run the project with `docker-compose`, to run it just type this command into your Terminal at the project root path : 

```bash
docker-compose up --build
```

> Next time, you can only type : `docker-compose up`.


### Run with `npm`

To run the project with `npm` you need this prerequisites :

- **Node >= 16**
- **PostgreSQL**
- See the [basic configufation](#basic-configuration)

When all it's update. Start you're PostgreSQL database and create your database and next you can start the NodeJS Backend with this command (*in the **back** folder*):

```bash
bash start.sh
```

Next, go at the root of the `front` folder and run :

```bash
# With npm
npm start

# With yarn
yarn start
```

## Basic Configuration

### Configuration for `npm`

Create a `.env` in the `back` folder and give the value of each environment variable :

```bash
DB_NAME=""
DB_PASSWORD=""
DB_USER=""
DB_HOST=""
DB_PORT=""
NODE_ENV=""
```

Next, report the values in this files : `back/database.config.json`, `back/.sequelizerc`.

## Credits

This project was developed by [fscript98](https://github.com/fscript98) and [Tykok](https://github.com/Tykok).

[projectLink]: Title
[licenseLink]: https://opensource.org/licenses/MIT
[contributingLink]: ./CONTRIBUTING.md
[codeOfCondutLink]: ./CODE_OF_CONDUCT.md
[DocAPILink]: .
[DocConfiguringLink]: .
[DocGuideLink]: .
[DocStartedLink]: .