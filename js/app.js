"use strict";

var userName = prompt('Hi, Glad you are here! What is your name?');
alert('Hi, '+userName+'. Welcome to the program. Lets play a game! I am going to ask you a series of questions, please answer with either YES/NO or Y/N.');

var humanAns = prompt(userName+'! Am I human?').toUpperCase().trim();
    if (humanAns === 'YES'|| humanAns === 'Y'){
        alert('Of course! Someone had to write this.');
    }else if (humanAns === 'NO'|| humanAns === 'N'){
        alert(userName+', I am not a robot... not yet at least.')
    }else{alert('Invalid Response. Moving on to Next Question.');}
console.log('Asked if I was human and '+userName+' answered with '+humanAns+'.');

var petsAns = prompt('Do I like pets?').toUpperCase().trim();
    if (petsAns === 'YES'|| petsAns === 'Y'){
        alert('Correct! I co-live with my English Bulldog, Kona.');
    }else if (petsAns === 'NO'|| petsAns === 'N'){
        alert(userName+', that\'s WRONG. I love animals');
    }else{alert('Invalid Response. Moving on to Next Question.');}
    console.log('Asked if I like pets and '+userName+' answered with '+petsAns+'.');

    var driveCarAns = prompt ('Can I drive a car?').toUpperCase().trim();
    if (driveCarAns === 'YES'|| driveCarAns === 'Y'){
        alert('Correct! '+userName+' I drive a 5 speed Mitsubishi')
    }else if (driveCarAns === 'NO'|| driveCarAns === 'N'){
        alert('Wrong! '+userName+' I drive a 5 speed Mitsubishi')
    }else{alert('Invalid Response. Moving on to Next Question.');}
    console.log('Asked if I drive a car and '+userName+' answered with '+driveCarAns+'.');

var learnCodeAns = prompt('Do I even learn code brah?').toUpperCase().trim();
    if (learnCodeAns === 'YES' || learnCodeAns === 'Y'){
        alert('Correct! I am a student at Code Fellows. '+userName+' ,it\'s in Seattle.')
    }else if (learnCodeAns === 'NO'|| learnCodeAns === 'N'){
        alert('Wrong! '+userName+' I am learning JavaScript at Code Fellows! You should try it some time.')
    }else{alert('Invalid Response. Moving on to Next Question.');}
    console.log('Asked if I am learning code and '+userName+' answered with '+learnCodeAns+'.');

var fromSFAns = prompt('Was I born in San Fransisco?').toUpperCase().trim();
    if(fromSFAns === 'YES'|| fromSFAns ==='Y'){
        alert('Wrong! I was born in Seattle. Fun fact '+userName+'I have never been to San Fransisco!');
    }else if(fromSFAns === 'NO'||fromSFAns === 'N'){
        alert('Correct! '+userName+'I am born and raised in Seattle');
    }else{alert('Invalid Response. Moving on to Next Question.');}
    console.log('Asked if I was born in San Fransisco and '+userName+' answered with '+fromSFAns+'.');