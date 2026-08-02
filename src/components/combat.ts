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
    const attackNumber = attackDiceRoll(hero.attack, enemy.defense);

    while(heroHp > 0 && enemyHp > 0) {
        enemyHp -= attackNumber;
        if(enemyHp <= 0)break;
        heroHp -= enemy.attack;
    }

    return heroHp > 0
        ? `${hero.name} defeated ${enemy.name}!`
        : `${enemy.name} defeated ${hero.name}!`;
}