import { ENEMIES } from "./data/enemies";

function mainLoop(){
    const iterations = 20; // Change this number for different iterations

    for (let index = 0; index < iterations; index++) {
        for (const[key, enemy] of Object.entries(ENEMIES)){
            console.log(key, enemy.name, enemy.damage)        
        } 
    }
}

mainLoop();