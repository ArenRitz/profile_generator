const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("Hello!")


rl.question('What\'s your name? Nicknames are also acceptable :)\n', (answer1) => {
  console.log(`Cool name!`);
  rl.question('What\'s an activity you like doing?\n', (answer2) => {
    console.log('That seems fun!');
    rl.question('What\'s your favourite song?\n', (answer3) => {
      console.log('Going to add that to my playlist!');
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)\n', (answer4) => {
        console.log('Makes me hungry');
        rl.question('What\'s your favourite thing to eat for that meal?\n', (answer5) => {
          console.log("I've gotta try that!");
          rl.question('Which sport is your absolute favourite?\n', (answer6) => {
            console.log('You must be great at it! ');
            rl.question('What is your superpower?\n', (answer7) => {
              console.log('WOAH\n');
              setTimeout(() => {
                console.log("Generating custom profile, please wait.\n")
              }, 200)
              const frames = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', ""]; //included spinner2 for fun.
              let interval = 201;
              for (let i = 2; i < 12; i++) {
                setTimeout(() => {
                  process.stdout.write(`\r${frames[i - 2]}  `);
                }, i * interval);
              }
              setTimeout(() => {
                console.log(`\nHi! My name is ${answer1}, for fun I enjoy ${answer2}.\nMy favourite song is ${answer3}.\nEveryday, the meal I look forward the most to is ${answer4}, and my preferred food is ${answer5}.\nI Love watching ${answer6}, it is my favourite sport.\nMy superpower is ${answer7}.`)
              }, 2300)
              rl.close();
            });
          });
        });
      });
    });
  });
});







// What\'s your name? Nicknames are also acceptable :) - Cool name! 
// What\'s an activity you like doing? - That seems fun!
// What\'s your favourite song? - Going to add that to my playlist! 
// Which meal is your favourite (eg: dinner, brunch, etc.) - Makes me hungry. 
// What\'s your favourite thing to eat for that meal? - I've gotta try that!
// Which sport is your absolute favourite? - You must be great at it! 
// What is your superpower? In a few words, tell us what you are amazing at! - WOAH