import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.greenBright('          **********<<<QUIZ GAME>>>*********'));
console.log(chalk.greenBright('         "You Need Atleast "5" Points To Win"'));
let point = 0;
let Q1 = await inquirer.prompt([
    {
        type: 'list',
        name: 'first',
        message: 'What is the Capital of Pakistan?',
        choices: ['Karachi', 'Islamabad', 'Lahore', 'Peshawar']
    }
]);
if (Q1.first == 'Islamabad') {
    console.log(chalk.greenBright('               Your Answer Is Correct'));
    point++;
}
else
    (console.log(chalk.redBright('               Your Answer Is Wrong')));
let Q2 = await inquirer.prompt([
    {
        type: 'list',
        name: 'second',
        message: 'Who Is The First Prime Minister Of Pakistan',
        choices: ['Quaid e Azam', "Liaquat Ali Khan", 'Allama Iqbal']
    }
]);
if (Q2.second == 'Liaquat Ali Khan') {
    console.log(chalk.greenBright('               Your Answer Is Correct'));
    point++;
}
else
    (console.log(chalk.redBright('               Your Answer is Wrong')));
let Q3 = await inquirer.prompt([
    {
        type: 'list',
        name: 'third',
        message: 'Which Is The National Animal Of Pakistan ',
        choices: ['Lion', 'Markhor', 'Wolf', 'Deer']
    }
]);
if (Q3.third == 'Markhor') {
    console.log(chalk.greenBright('               Your Answer Is Correct'));
    point++;
}
else
    (console.log(chalk.redBright('                Your Answer Is Wrong   ')));
let Q4 = await inquirer.prompt([
    {
        type: 'list',
        name: 'fourth',
        message: 'Which Is The National Sport Of Pakistan',
        choices: ['Cricket', 'Football', 'Hockey', 'Badminton']
    }
]);
if (Q4.fourth == 'Hockey') {
    console.log(chalk.greenBright('               Your Answer Is Correct'));
    point++;
}
else
    (console.log(chalk.redBright('                Your Answer Is Wrong')));
let Q5 = await inquirer.prompt([
    {
        type: 'list',
        name: 'fifth',
        message: 'Which Is The National Bird Of Pakistan',
        choices: ['Pigeon', 'Eagle', 'Sparrow', 'Crow']
    }
]);
if (Q5.fifth == 'Pigeon') {
    console.log(chalk.greenBright('               Your Answer Is Correct'));
    point++;
}
else
    (console.log(chalk.redBright('                Your Answer Is Wrong')));
let Q6 = await inquirer.prompt([
    {
        type: 'list',
        name: 'sixth',
        message: 'Which Is The National Flower Of Pakistan',
        choices: ['Rose', 'Jasmine', 'Lily', 'Sunflower']
    }
]);
if (Q6.sixth == 'Jasmine') {
    console.log(chalk.greenBright('               Your Answer Is Correct'));
    point++;
}
else
    (console.log(chalk.redBright('                Your Answer Is Wrong')));
let Q7 = await inquirer.prompt([
    {
        type: 'list',
        name: 'seventh',
        message: 'Which Is The National Fruit Of Pakistan',
        choices: ['Apple', 'Orange', 'Banana', 'Mango']
    }
]);
if (Q7.seventh == 'Mango') {
    console.log(chalk.greenBright('               Your Answer Is Correct'));
    point++;
}
else
    (console.log(chalk.redBright('                Your Answer Is Wrong')));
if (point >= 5) {
    console.log(chalk.blueBright(` *****Your Points Are "${point}" Congratulation You Won The Game*****`));
}
else
    (console.log(chalk.redBright(`  *****Your Points Are "${point}" Sorry You Lost The Game*****`)));
