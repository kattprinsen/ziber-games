import { Enemy } from "../types/enemies.js";
import { Hero } from "../types/hero.js";

export const ENEMIES: Record<string, Enemy> = {
    Human: { 
        name: "Beatrix", 
        attack: 3, 
        defense: 4,
        health: 20 
    },
    Animal: { 
        name: "Muta Lion", 
        attack: 5, 
        defense: 2,
        health: 25
    },
}

export const HEROES: Record<string, Hero> = {
    Human: { 
        name: "Ziber", 
        attack: 4, 
        defense: 4, 
        health: 30 
    },
}