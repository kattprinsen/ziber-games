import { fight } from "./components/combat.js";
import { processInput, closeInput } from "./components/processInput.js";
import { ENEMIES, HEROES } from "./data/enemies.js";
import { animateFight } from "./components/animations/fightAnimation.js";
import { startAnimation } from "./components/animations/startAnimation.js";


async function mainLoop(){
    let playAgain = true;

    while(playAgain){
        const hero = { ...HEROES.Human };
        await startAnimation();
        console.log(`\nYou are playing as ${hero.name} (HP: ${hero.health}, DMG: ${hero.attack})`);
        
        for (const [key, enemy] of Object.entries(ENEMIES)){
            const freshEnemy = { ...enemy };
            console.log(`\nNext enemy: ${freshEnemy.name} (HP: ${freshEnemy.health}, DMG: ${freshEnemy.attack}, DEF: ${freshEnemy.defense})`);
            await processInput("Press ENTER to attack...");
            await animateFight();
            const result = await fight(hero, freshEnemy);
            console.log(result);
        }
        await processInput("\nPress ENTER to play again!");
    }

    console.log("Thanks for playing!");
    closeInput();
}

mainLoop();