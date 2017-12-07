'use strict';

var user = prompt('Hi, what is your name?');
console.log('username:', user);

alert('Welcome ' + user + ', I am going to ask you some questions about Alex.  Please answer with either yes/no or y/n.');

var offspring = prompt(user +', does Alex have kids?');
console.log('offspring guess:', offspring);

if (offspring.toLowerCase() === 'y' || offspring.toLowerCase() === 'yes') {
  alert('Correct ' + user +'! Alex has one daughter named Jillean');
  offspring = true;
} else {
  alert('Actually ' + user + ', Alex has a daughter named Jillean');
  offspring = false;
}

var military = prompt(user +', has Alex served in the Military?');
console.log('military guess:', military);

if (military.toLowerCase() === 'y' || military.toLowerCase() === 'yes') {
  alert('Correct ' + user +'! Alex spent 5 years in the Army as a Chinese Mandarin Linguist');
  military = true;
} else {
  alert('Actually ' + user + ', Alex spent 5 years in the Army as a Chinese Mandarin Linguist');
  military = false;
}

if (offspring === true && military === true) {
  alert('Wow! You are on a roll! Two Correct!');
}

var travel = prompt(user +', has Alex been to other countries aside from Canada?');
console.log('travel guess:', travel);

if (travel.toLowerCase() === 'y' || travel.toLowerCase() === 'yes') {
  alert('Correct ' + user +'! Alex spent two months traveling around Asia and spent ten months deployed to Afghanistan while in the Military');
  travel = true;
} else {
  alert('Actually ' + user + ', Alex spent two months traveling around Asia and spent ten months deployed to Afghanistan while in the Military');
  travel = false;
}

if (offspring === true && military === true && travel === true) {
  alert('Still rolling!! Three Correct!')
}

var college = prompt(user +', did Alex go to Harvard?');
console.log('college guess:', college);

if (college.toLowerCase() === 'n' || college.toLowerCase() === 'no') {
  alert('Correct ' + user +'! Alex did NOT go to Harvard, he graduated with his BA in Public Health from UW Seattle');
  college = true;
} else {
  alert('Actually ' + user + ', Alex graduated with his BA in Public Health from UW Seattle');
  college = false;
}

if (offspring === true && military === true && travel === true && college === true) {
  alert('Dang! Thought I would trip you up there. Harvard might have been a bit of a leap.  You are doing great!! Four Correct!');
}

var girlfriend = prompt(user +', does Alex have a girlfriend named Caitlan?');
console.log('girlfriend guess:', girlfriend);

if (girlfriend.toLowerCase() === 'y' || girlfriend.toLowerCase() === 'yes') {
  alert('Correct ' + user +'! And that is the correct spelling');
  girlfriend = true;
} else {
  alert('Actually ' + user + ', he does');
  girlfriend = false;
}

if (offspring === true && military === true && travel === true && college === true && girlfriend === true) {
  alert('Wow!!! Are you Alex or a good guesser? 100% Great Job!!!');
}
