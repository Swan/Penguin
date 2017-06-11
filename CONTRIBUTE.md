# Contributing 
This file will be filled out more in depth at a later date, however there are a few rules I'd like to try and follow in this codebase. Exceptions may be made whenever I see fit.

**Rules**
* Don't use `var` only use `let` or `const`
* `require` is fine for now, as I do not plan to use ES6 Modules
* Variables are `snakeCased`
* Functions are `snakeCased`
* Files with general functions grouped together must be prefixed with a _. `Example _commands.js`
* When adding new commands or handlers, make sure you add it to the [addGuild](https://github.com/Swan/Penguin/blob/master/handlers/_guild.js#L10) function following the same convention in the [Guild Model](https://github.com/Swan/Penguin/blob/master/models/guild.js#L3).
