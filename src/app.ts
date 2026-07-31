import { fight } from "./components/combat";
import { processInput, closeInput } from "./components/processInput";
import { ENEMIES, HEROES } from "./data/enemies";


async function mainLoop(){
    let playAgain = true;

    while(playAgain){
        const hero = { ...HEROES.Human };
        //const playerName = await processInput("Please select a Hero name!");
        console.log(`\nYou are playing as ${hero.name} (HP: ${hero.health}, DMG: ${hero.damage})`);

        for (const [key, enemy] of Object.entries(ENEMIES)){
            const freshEnemy = { ...enemy };
            console.log(`\nNext enemy: ${freshEnemy.name} (HP: ${freshEnemy.health}, DMG: ${freshEnemy.damage})`);
            await processInput("Press ENTER to attack...");
            const result = fight(hero, freshEnemy);
            console.log(result);
        }

        await processInput("\nPress ENTER to play again!");
    }

    console.log("Thanks for playing!");
    closeInput();
}

mainLoop();