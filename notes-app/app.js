const chalk = require('chalk')
const getNotes = require('./notes')

const msg = getNotes()
console.log(msg)




// CHALLENGE USE THE CHALK LIBRARY IN YOUR PROJECT
// 1. INSTALL VERSION 2.4.2 OF CHALK done

// 2. LOAD CHALK INTO APP.JS done

// 3. USE IT TO PRINT THE STRING "SUCCESS!" TO THE CONSOLE IN GREEN done
console.log(chalk.green('success!'))
console.log(chalk.green.bold('success!'))
console.log(chalk.green.bold.inverse('success!'))
// 4. TEST YOUT WORK done

// BONUS: USE DOCS TO MESS AROUND WITH OTHER STYLES. MAKE TEXT BOLD AND INVERSES


