# 💻 NodeJS CLI

[![Web](https://img.shields.io/badge/web-blue?logo=w3c)](https://github.com/topics/web)
[![JavaScript](https://img.shields.io/badge/javascript-blue?logo=javascript)](https://github.com/topics/javascript)
[![NodeJS](https://img.shields.io/badge/node-blue?logo=node.js)](https://github.com/topics/node)

Command line interface (CLI) application example in NodeJS.

![Screenshot](./screenshot.gif?raw=true)

## 🏁 Try it!

1. Clone the repository.

2. Stay in the parent folder of the project.

3. Execute the application:
```bash
node nodejs-cli
```
this will automatically execute the `index.js` file inside the `nodejs-cli` folder.
> **Output:** No options provided.


4. Execute with some flags:

- _Help_ flag: `--help`
```bash
node nodejs-cli --help
```
> **Output:** This is an example cli app with nodeJS..

- _Help_ flag alias: `-h`
```bash
node nodejs-cli -h
```
> **Output:** This is an example cli app with nodeJS..

- _Name_ flag with parameter: `--name` or `-n`
```bash
node nodejs-cli --name Ambratolm
```
> **Output:** Hello, Ambratolm! Welcome! :D

## 🚀 Features
- Execute command options through flags (arguments prefixed with "--") with aliases (arguments shorthands prefixed with "-").
- If flags are duplicate or merged with their aliases it executes the associated command one time only.
- Prompts unknown flags.
- To add a new option flag, just add a method in the `actions/@methods.js` file.
- To add an alias for a flag, just add an entry in `actions/@aliases.js` file with the name of the targeted method as the key and an array of aliases as the value.

## 📃 License
Licensed under [MIT](./LICENSE).