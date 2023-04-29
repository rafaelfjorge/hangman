import * as io from './io.js';
import Word from './word.js';
import { maxAttempts } from './config.js';
import { isEqualArrays } from './util.js';


function play (){
    io.print("Bem vindo!");
    const word = new Word();
    let leftAttempts = maxAttempts;
    const guess = [];

    while (!word.revealed() && leftAttempts > 0) {
        io.newLine();
        io.print(word.maskWord);

        const letter = io.read("Guess");

        if (!letter || guess.includes(letter) || letter.length > 1){
            io.print("Ops, tente novamente... ");
            continue;
        }

        guess.push(letter);

        if(word.guess(letter)){
            io.print("Acertou!!");
        }else {
            io.print("Errou!!");
            leftAttempts--;

            if(leftAttempts > 0){
                io.print(`Você possui ${leftAttempts} chance(s)`);
            }
        }
    }

    if (leftAttempts === 0){
        io.print(`Você perdeu... A Palavra era '${word.word}'`);
    }else{
        io.newLine();
        io.print(`Você ganhou :D '${word.word}'`);
    }
}

play();