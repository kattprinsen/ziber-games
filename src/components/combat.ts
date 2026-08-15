import { Enemy } from "../types/enemies.js";
import { Hero } from "../types/hero.js";
import { spinnerAnimation } from "./animations/spinner.js";
import { victoryAnimation } from "./animations/victoryAnimation.js";
import { attackDiceRoll, AttackResult } from "./diceRoll.js";

/**
 * COMBAT ROUNDS
 * Hero attacks and (if) enemy saves, difference is wounds made
 */

function fightMessage(attackType: AttackResult["type"], name: string) {
    if(attackType === "critical") return console.log(`${name} lands a CRITICAL HIT!`);
    if(attackType === "miss") return console.log(`${name} CRITICAL MISS :(`);
}

export async function fight(hero: Hero, enemy: Enemy): Promise<string> {
    let heroHp = hero.health;
    let enemyHp = enemy.health;

    while(heroHp > 0 && enemyHp > 0) {
        const heroAttack = attackDiceRoll(hero.attack, enemy.defense);
        fightMessage(heroAttack.type, hero.name);
        enemyHp -= heroAttack.damage;
        console.log(`${hero.name} deals ${heroAttack.damage} damage. ${enemy.name} HP: ${Math.max(0, enemyHp)}`);
        if(enemyHp <= 0) break;

        const enemyAttack = attackDiceRoll(enemy.attack, hero.defense);
        fightMessage(enemyAttack.type, enemy.name);
        heroHp -= enemyAttack.damage;
        console.log(`${enemy.name} deals ${enemyAttack.damage} damage. ${hero.name} HP: ${Math.max(0, heroHp)}`);

        if(heroHp > 0 && enemyHp > 0) {
            await spinnerAnimation();
        }
    }

    if (heroHp > 0) {
        await victoryAnimation(hero.name);
        return `${hero.name} defeated ${enemy.name}!`;
    }
    return `${enemy.name} defeated ${hero.name}!`;
}