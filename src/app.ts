import { fight } from "./components/combat";
import { processInput, closeInput } from "./components/processInput";
import { ENEMIES, HEROES } from "./data/enemies";


async function mainLoop(){
    const hero = HEROES.Human;
    console.log(`You are playing as ${hero.name} (HP: ${hero.health}, DMG: ${hero.damage})`);

    for (const[key, enemy] of Object.entries(ENEMIES)){
        console.log(`\nNext enemy: ${enemy.name} (HP: ${enemy.health}, DMG: ${enemy.damage})`);
        const input = await processInput("Press ENTER to attack...");
        const result = fight(hero, enemy);
        console.log(result);
    }

    closeInput();
}

mainLoop();