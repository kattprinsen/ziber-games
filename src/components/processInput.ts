import * as readline from 'readline';

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


rl.on('error', (err: Error) => {
    console.error('An error occurred: ', err);
    rl.close();
});

export function closeInput(){
    rl.close();
}

export function processInput(question: string): Promise<string>{
    return new Promise((resolve) =>{
        rl.question(question, (answer: string) => {
            const ans = answer.toLowerCase();
            if(ans === "y"){
                //console.log(ans);
                resolve(ans);
            }
            resolve("skip")
        });
    });
}