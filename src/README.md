# Basic of Typescript

https://www.udemy.com/course/microservices-with-node-js-and-react/learn/lecture/19225946

## App description

App generates random location for User and for Company and shows them as markers on Google map

## Installation

install typescript compiler

```
> npm install -g typescript ts-node
```

check that ts compiler installed successfully

```
> tsc --help
```

compile .ts file and create .js from it

```
> tsc index.ts
```

run .js file

```
> node index.js
```

compile + run

```
> ts-node index.ts
```

## Parcel bundler

Tool to help us run Typescript in the browser

```
> npm install -g parcel bundler
```

to run the app

```
> parcel index.html
```

## Libraries

here we're looking for libraries www.npmjs.com

search for "faker" to find "faker" library

search for "@types/faker" to find typescript file definition for "faker" library and find a command to install it

```
> npm i @types/faker
```

## Type definition files

Type definition files - it's like an adapter between typescript and js code, it's usually index.d.ts

some libraries includes this file automatically, for some we have to install it manually

## Axios

npm module, which is used to work with network requests

## Polyfill

A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

## Type annotation

Developers tell typescript the type. ex: let speed: string = 'fast';

## Type inference

Typescript guesses the type

we use type inference always

and we use type annotation in cases:

- when the function returns the any type and we have to clarify the value

- when we declare the variable on one line and initialize it later

- when we want a variable to have a type that can't be inferred

## Tuple

Array-like structure whereeach elements represent some property of a record
methods in classes,

## Modifiers

public - default modifier

pirvate - this method can be called only by other methods in the same class

protected - this method can be called by other methods in the same class and in child classes

## Constructor shortcut

```
color: string = 'red';
```

```
constructor(public color: string) {}
```

```
constructor(color: string) {
this.color = color;
}
```
