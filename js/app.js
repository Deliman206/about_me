"use strict";
//Variable to call at end with how many Questions the user got right
// var correctCount = 0;

// var userName = prompt('Hi, Glad you are here! What is your name?');
// alert('Hi, '+userName+'. Welcome to the program. Lets play a game! I am going to ask you a series of questions, please answer with either YES/NO or Y/N.');

var humanAns = prompt(userName+'! Am I human?').toUpperCase().trim();
console.log('Asked if I was human and '+userName+' answered with '+humanAns+'.');

    if (humanAns === 'YES'|| humanAns === 'Y'){
        alert('Of course! Someone had to write this.');
        correctCount++;
    }else if (humanAns === 'NO'|| humanAns === 'N'){
        alert(userName+', I am not a robot... not yet at least.')
    }else{alert('Invalid Response. Moving on to Next Question.');}

var petsAns = prompt('Do I like pets?').toUpperCase().trim();
console.log('Asked if I like pets and '+userName+' answered with '+petsAns+'.');
    if (petsAns === 'YES'|| petsAns === 'Y'){
        alert('Correct! I co-live with my English Bulldog, Kona.');
        correctCount++;
    }else if (petsAns === 'NO'|| petsAns === 'N'){
        alert(userName+', that\'s WRONG. I love animals');
    }else{alert('Invalid Response. Moving on to Next Question.');}
    

var driveCarAns = prompt ('Can I drive a car?').toUpperCase().trim();
console.log('Asked if I drive a car and '+userName+' answered with '+driveCarAns+'.');
    if (driveCarAns === 'YES'|| driveCarAns === 'Y'){
        alert('Correct! '+userName+' I drive a 5 speed Mitsubishi')
        correctCount++;
    }else if (driveCarAns === 'NO'|| driveCarAns === 'N'){
        alert('Wrong! '+userName+' I drive a 5 speed Mitsubishi')
    }else{alert('Invalid Response. Moving on to Next Question.');}
    

var learnCodeAns = prompt('Do I even learn code brah?').toUpperCase().trim();
console.log('Asked if I am learning code and '+userName+' answered with '+learnCodeAns+'.');
    if (learnCodeAns === 'YES' || learnCodeAns === 'Y'){
        alert('Correct! I am a student at Code Fellows. '+userName+' ,it\'s in Seattle.');
        correctCount++;
    }else if (learnCodeAns === 'NO'|| learnCodeAns === 'N'){
        alert('Wrong! '+userName+' I am learning JavaScript at Code Fellows! You should try it some time.')
    }else{alert('Invalid Response. Moving on to Next Question.');}

var fromSFAns = prompt('Was I born in San Fransisco?').toUpperCase().trim();
console.log('Asked if I was born in San Fransisco and '+userName+' answered with '+fromSFAns+'.');
    if(fromSFAns === 'YES'|| fromSFAns ==='Y'){
        alert('Wrong! I was born in Seattle. Fun fact '+userName+' I have never been to San Fransisco!');
    }else if(fromSFAns === 'NO'||fromSFAns === 'N'){
        alert('Correct! '+userName+' I am born and raised in Seattle');
        correctCount++;
    }else{alert('Invalid Response. Moving on to Next Question.');}



alert('Ok '+ userName + '. Now You will have to guess my favorite number.');
var nums = [Math.floor(Math.random()*100)];
var myNum = nums[0];

for( var i = 1; i < 5; i++){
    console.log(nums);
    console.log(nums[i]);
    if (nums.length === 5){
        alert('You Lose!! My favorite number is ' + myNum + '.');
        break;
    }
    var guessNum = parseInt(prompt('What is my favorite number?'));
    nums.push(guessNum);

    if (guessNum != parseInt(guessNum)){
        alert('You did not select a number. Try again.');
        nums.pop(nums[i]);
        console.log(nums);
        console.log(i);
        continue;
    }
    if (guessNum === myNum){
        alert('You Win!!')
        correctCount++;
        break;
    }
    if (guessNum > myNum){
        alert('Your guess was too high.');
    }
    if (guessNum < myNum){
        alert('Your guess was too low');
    }
}

alert('Hey ' + userName + ' You have gotten through some questions! Awesome, one more guessing game to go.');

var favBeer = ['rainier','aslan','georgetown'];
var count = 0; 
while(count < 7){
    var guessBeer = prompt('What are my favorite beer companies?').toLowerCase().trim();
    if( guessBeer === favBeer[0] || guessBeer === favBeer[1] || guessBeer === favBeer[2] ){
        alert('You guessed right! My favorite companies are '+ favBeer[0]+ ', '+favBeer[1]+ ',and '+favBeer[2]+'.');
        correctCount++;
        break;
    }
    if ( count === 6){
        alert('You Lose! My favorite companies are '+ favBeer[0]+ ', '+favBeer[1]+ ',and '+favBeer[2]+'.');
        break;
    }
    count++;
}

alert('OK ' + userName + ' the game is over. You got ' + correctCount + ' questions correct! Enjoy my page now.');