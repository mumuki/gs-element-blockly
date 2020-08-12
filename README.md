# \<gs-element-blockly\>

Element providing Blockly interface for Gobstones Web

## Install Development Environment

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and Bower installed. 

```Bash
$ npm install -g bower polymer-cli
```

Then, run both `npm install` and `bower install`.

This will install [Husky](https://github.com/typicode/husky) and a Git hook that will lint your code before each commit. It's recommended to install an [ESlint](http://eslint.org/) extension on your code editor, to see linting errors when you code.

## Viewing Your Application

```
$ polymer serve
```

After running it, go to http://localhost:8080/components/gs-element-blockly/demo to see the component in action.

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester).

## Deploy Demo to Program-AR.github.io/gs-element-blockly

Just create a folder and run `gp.sh` with parameters:

```bash
mkdir temp
cd temp
../gp.sh Program-AR gs-element-blockly dev
cd ..
rm -rf temp
```

or simply execute `./deploy-gh-pages.sh`.

## Building

This command will build a minified .html file with all included:

```bash
./build.sh
```

## Gem wrapper

This module can also be deployed a ruby gem. `gobstones-blockly` works with Ruby 2.3.1

```bash
./build-gem
```

## Tagging and releasing

Run the `./tag.sh` script with the version you want. For instance, to tag version `1.0.0` you should execute: 

```bash
./tag.sh 1.0.0
```
