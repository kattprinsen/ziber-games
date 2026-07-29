import { Enemy } from "../types/enemies";
import { Hero } from "../types/hero";

export const ENEMIES: Record<string, Enemy> = {
    Human: { name: "Beatrix", damage: 3, health: 20 },
    Animal: { name: "Lion King", damage: 5, health: 18 },
    Alien: { name: "Spacer", damage: 4, health: 22 },
}

export const HEROES: Record<string, Hero> = {
    Human: { name: "Ziber", damage: 4, health: 30 }
}