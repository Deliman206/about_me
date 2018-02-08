

var questions =['Am I a human?','Do I have a cat?', 'Was I born in California?','Do I even code, brah?!','Can I drive a car?'];
var answers = ['yes','no','no','yes','yes'];
var responses = [];
var correctCount = 0;
var userName = prompt('Welcome to my website About Me, Sean Miller of course! What is your name?');

function game1() {

  alert('Great ' + userName + '! Let us play a game, can you get these next 5 questions about me correct? Press OK to find out!');
  alert('Just a reminder, use only "yes" and "no" for your answers. I wont let you out if you break these rules...');
  for ( var i=0; i <= questions.length; i++){
    if ( i === questions.length){
      alert('You got '+ correctCount + ' of 5 questions correct... so far.');
      break;
    }
    var guess = prompt(questions[i]).toLowerCase().trim();
    responses.push(guess);

    if ( guess !== 'yes' && guess !== 'no'){
      alert('You broke the rules! Try again.');
      responses.pop(responses[i]);
      i--;
      continue;
    }
    if( guess === answers[i]){
      correctCount++;
    }

  }
}

function game2() {
  alert('Ok '+ userName + '. Now You will have to guess my favorite number.');
  var nums = [Math.floor(Math.random()*100)];
  var myNum = nums[0];

  for(var i = 1; i < 5; i++){
    console.log(nums);
    console.log(nums[i]);
    if (nums.length === 5){
      alert('You Lose!! My favorite number is ' + myNum + '.');
      break;
    }
    var guessNum = parseInt(prompt('What is my favorite number?'));
    nums.push(guessNum);

    if (guessNum !== parseInt(guessNum)){
      alert('You did not select a number. Try again.');
      nums.pop(nums[i]);
      console.log(nums);
      console.log(i);
      continue;
    }
    if (guessNum === myNum){
      alert('You Win!!');
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
  alert('Hey ' + userName + ' You have gotten through some questions! By the way, last question was a trick! Oops it was random, this time it was '+ myNum + '. Awesome, one more guessing game to go.');
}

function game3() {
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
}

game1();
game2();
game3();

alert('OK ' + userName + ' the game is over. You got ' + correctCount + ' questions correct! Enjoy my page now.');
