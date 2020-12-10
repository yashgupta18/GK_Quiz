var quiz=[
  {
    question: "First high-level programming language created?",
    answer: "fortran",
    options:['c', 'fortran', 'Autocode', 'Lisp']
  },
  {
  question: "Which country had first female prime minister in the world?  ",
  answer: "sri lanka",
  options:['scotland','hungary','sri lanka','singapore']
  }, 
  {
    question: "First trillionaire in the world?",
    answer: "jeff bezos",
    options:['jeff bezos','bill gates', 'John D. Rockefeller', 'Xu Jiayin']
  },
  {
    question: "Oldest country in the world?",
    answer: "ethiopia",
    options:['kenya','antarctica','russia','ethiopia']
  },
  {
    question: "Oldest Chemical Element is?",
    answer: "Phosphorous",
    options:['oxygen', 'phosphorous','helium','nitrogen']
  },
  {
    question: "Oldest language in the world?",
    answer: "tamil",
    options:['french', 'english','tamil','Arabic']
  },
  {
    question: "Only planet not named after a god?",
    answer: "earth",
    options:['earth','mercury','mars','jupiter']
  },
  {
    question: "Which company created the first laptop?",
    answer: "Osborne Computers",
    options:['IBM','NEC','Toshiba','Osborne Computers']
  },
  {
    question: "Name of first ever video game?",
    answer: "Tennis for Two",
    options:['Tennis for Two','Pong','Gun Fight','Pinball']
  },
  {
    question: "Oldest university in the world?",
    answer: "University of Bologna",
    options:['University of Oxford','University of Paris','University of Padua','University of Bologna']
  },
]

var scores=[
  {
    name:'Yash',
    score:9
  },
  {
    name:'rahul',
    score:5
  },
  {
    name:'shrey',
    score:4
  }
]

//main quiz function
function play(question, answer, hints){
  console.log(chalk.bgYellow('Ques:'+question+'\n'))

  index= readlineSync.keyInSelect(hints);
  //compare option with correct answer
  if(hints[index].toUpperCase()===answer.toUpperCase()){
    console.log(chalk.bgGreen('Correct Answer'))
    score=score+1;
  }
  else{
    console.log(chalk.bgRed('Wrong Answer'))
    console.log(chalk.bgMagenta('Correct Ans- ' + answer.toUpperCase()))
  }
  console.log(chalk.inverse('Score: ' + score));
  console.log('----------------------------------')
}

var readlineSync = require('readline-sync');
const chalk = require('chalk');

//Rules and intro
var userName = readlineSync.question("Hi, Whats your name: \n");
console.log('Hii '+userName + ". Let's play a general knowledge quiz.\n")
console.log(chalk.bgCyan('RULES\n'))
console.log(chalk.bgCyan('1. 1 point for correct answer\n'))
console.log(chalk.bgCyan('2. No Negative Marking\n'))
console.log(chalk.bgCyan('3. Type the option number you want to choose\n'))
console.log(chalk.inverse("Let's Start \n"))
console.log('----------------------------------')

//call function play
var score=0;
for(var i=0; i<quiz.length; i++){
  var quizarr=quiz[i]
  play(quizarr.question, quizarr.answer,quizarr.options)
}

//display score
console.log('Congrats, '+ userName + ' You Scored '+ score);

//display high score
console.log('List of High Scorers');
function highScores(scores){
  for(var i=0; i<scores.length; i++){
    console.log(scores[i].name + "   " + scores[i].score)
  }
}
highScores(scores);
console.log('Send a screenshot if your score is in top 3');
