'use strict';

var user = prompt('Hi, what is your name?');
console.log('username:', user);

var correct = 0;

alert('Welcome ' + user + ', I am going to ask you some questions about Alex.  Please answer with either yes/no or y/n.');

function question() {
  var questionNum = [q1(), q2(), q3(), q4(), q5(), q6(), q7()]
  function q1() {
    var offspring = prompt(user +', does Alex have kids?');
    console.log('offspring guess:', offspring);

    if (offspring.toLowerCase() === 'y' || offspring.toLowerCase() === 'yes') {
      alert('Correct ' + user +'! Alex has one daughter named Jillean');
      offspring = true;
      correct++;
    } else {
      alert('Actually ' + user + ', Alex has a daughter named Jillean');
      offspring = false;
    }
  }
  questionNum[0];

  function q2() {
    var military = prompt(user +', has Alex served in the Military?');
    console.log('military guess:', military);

    if (military.toLowerCase() === 'y' || military.toLowerCase() === 'yes') {
      alert('Correct ' + user +'! Alex spent 5 years in the Army as a Chinese Mandarin Linguist');
      military = true;
      correct++;
    } else {
      alert('Actually ' + user + ', Alex spent 5 years in the Army as a Chinese Mandarin Linguist');
      military = false;
    }
  }
  // if (offspring === true && military === true) {
  //   alert('Wow! You are on a roll! Two Correct!');
  // }

  questionNum[1];

  function q3() {
    var travel = prompt(user +', has Alex been to other countries aside from Canada?');
    console.log('travel guess:', travel);

    if (travel.toLowerCase() === 'y' || travel.toLowerCase() === 'yes') {
      alert('Correct ' + user +'! Alex spent two months traveling around Asia and spent ten months deployed to Afghanistan while in the Military');
      travel = true;
      correct++;
    } else {
      alert('Actually ' + user + ', Alex spent two months traveling around Asia and spent ten months deployed to Afghanistan while in the Military');
      travel = false;
    }
  }
  // if (offspring === true && military === true && travel === true) {
  //   alert('Still rolling!! Three Correct!')
  // }

  questionNum[2];

  function q4() {
    var college = prompt(user +', did Alex go to Harvard?');
    console.log('college guess:', college);

    if (college.toLowerCase() === 'n' || college.toLowerCase() === 'no') {
      alert('Correct ' + user +'! Alex did NOT go to Harvard, he graduated with his BA in Public Health from UW Seattle');
      college = true;
      correct++;
    } else {
      alert('Actually ' + user + ', Alex graduated with his BA in Public Health from UW Seattle');
      college = false;
    }
  }
  // if (offspring === true && military === true && travel === true && college === true) {
  //   alert('Dang! Thought I would trip you up there. Harvard might have been a bit of a leap.  You are doing great!! Four Correct!');
  // }

  questionNum[3];

  function q5() {
    var girlfriend = prompt(user +', does Alex have a girlfriend named Caitlan?');
    console.log('girlfriend guess:', girlfriend);

    if (girlfriend.toLowerCase() === 'y' || girlfriend.toLowerCase() === 'yes') {
      alert('Correct ' + user +'! And that is the correct spelling');
      girlfriend = true;
      correct++;
    } else {
      alert('Actually ' + user + ', he does');
      girlfriend = false;
    }

  }
  // if (offspring === true && military === true && travel === true && college === true && girlfriend === true) {
  //   alert('Wow!!! Are you Alex or a good guesser? 100% so far! Great Job!!!');
  // }

  questionNum[4];


  function q6() {
    var numberRand = [Math.floor(Math.random() * 100) + 1]
    var counterForSix=0;
    var number;

    while (number !== numberRand[0]) {
      number = parseInt(prompt(user +' , what is Alex\'s favorite number?'));

      if (number === numberRand[0]) {
        alert('Correct!');
        counterForSix++;
        correct++;
        break;
      } else if (number >= numberRand[0]) {
        alert('Too high!');
        counterForSix++;
      } else if (number <= numberRand[0]) {
        alert('Too Low!');
        counterForSix++;
      } else if (isNaN(number) || number === null) {
        alert('Please enter a number');
        counterForSix++;
      }
      console.log('number guess:', number);
      console.log('random number generated:', numberRand[0]);

      if (counterForSix >= 4) {
        break;
      }
    }

    console.log('tries of question 6:', counterForSix);
  }
  questionNum[5];
  // q6();
  function q7() {
    var favFood = ['pizza', 'burgers','fries','tacos'];
    var answer = prompt('What is one of Alex\'s favorite foods?');
    var flag;

    for (var i = 0; i < 5; i++) {
      console.log('guess at each iteration', answer);

      if ((answer === favFood[0]) || (answer === favFood[1]) || (answer === favFood[2]) || (answer === favFood[3])) {
        alert('Correct! Alex\'s favorite foods are: ' + favFood);
        flag = true;
        correct++;
        break;
      } else {
        alert('Incorrect. Keep trying!');
        answer = prompt('What is one of Alex\'s favorite foods?');
      }
    }
    if (!flag) {
      alert('Incorrect, Alex\'s favorite foods are: ' + favFood);
    }
  }
  questionNum[6];
}
question();
console.log('num questions correct:', correct);

alert('Thank you ' + user + ' for answering those questions. I hope you learned something new about Alex. You got ' + correct + ' /7 questions correct!')
