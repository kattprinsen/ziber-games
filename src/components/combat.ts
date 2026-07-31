import { Enemy } from "../types/enemies";
import { Hero } from "../types/hero";

/**
 * COMBAT ROUNDS
 * Hero attacks and (if) enemy saves, difference is wounds made
 */

export function fight(hero: Hero, enemy: Enemy): string {
    let heroHp = hero.health;
    let enemyHp = enemy.health;

    while(heroHp > 0 && enemyHp > 0) {
        enemyHp -= hero.attack;
        if(enemyHp <= 0)break;
        heroHp -= enemy.attack;
    }

    return heroHp > 0
        ? `${hero.name} defeated ${enemy.name}!`
        : `${enemy.name} defeated ${hero.name}!`;
}