import { Enemy } from "../types/enemies";
import { Hero } from "../types/hero";

export function fight(hero: Hero, enemy: Enemy): string {
    let heroHp = hero.health;
    let enemyHp = enemy.health;

    while(heroHp > 0 && enemyHp > 0) {
        enemyHp -= hero.damage;
        if(enemyHp <= 0)break;
        heroHp -= enemy.damage;
    }

    return heroHp > 0
        ? `${hero.name} defeated ${enemy.name}!`
        : `${enemy.name} defeated ${hero.name}!`;
}