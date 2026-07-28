import { processInput, closeInput } from "./components/processInput";
import { ENEMIES } from "./data/enemies";


async function mainLoop(){
    const iterations = 3; // Change this number for different iterations

    for (let index = 0; index < iterations; index++) {
        const attack = await processInput("Attack?");
        console.log("You", attack);
        for (const[key, enemy] of Object.entries(ENEMIES)){
            console.log(key, enemy.name, enemy.damage)        
        } 
    }
    closeInput();
}

mainLoop();