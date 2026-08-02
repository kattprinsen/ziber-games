import { Enemy } from "../types/enemies";
import { Hero } from "../types/hero";
import { attackDiceRoll } from "./diceRoll";

/**
 * COMBAT ROUNDS
 * Hero attacks and (if) enemy saves, difference is wounds made
 */

export function fight(hero: Hero, enemy: Enemy): string {
    let heroHp = hero.health;
    let enemyHp = enemy.health;

    while(heroHp > 0 && enemyHp > 0) {
        const heroAttack = attackDiceRoll(hero.attack, enemy.defense);
        if(heroAttack.type === "critical") console.log(`${hero.name} lands a CRITICAL HIT!`);
        if(heroAttack.type === "miss") console.log(`${hero.name} CRITICAL MISS :(`);
        enemyHp -= heroAttack.damage;
        console.log(`${hero.name} deals ${heroAttack.damage} damage. ${enemy.name} HP: ${Math.max(0, enemyHp)}`);
        if(enemyHp <= 0) break;

        const enemyAttack = attackDiceRoll(enemy.attack, hero.defense);
        if(enemyAttack.type === "critical") console.log(`${enemy.name} lands a CRITICAL HIT!`);
        if(heroAttack.type === "miss") console.log(`${hero.name} CRITICAL MISS :(`);
        heroHp -= enemyAttack.damage;
        console.log(`${enemy.name} deals ${enemyAttack.damage} damage. ${hero.name} HP: ${Math.max(0, heroHp)}`);
    }

    return heroHp > 0
        ? `${hero.name} defeated ${enemy.name}!`
        : `${enemy.name} defeated ${hero.name}!`;
}