import { Enemy } from "../types/enemies";
import { Hero } from "../types/hero";

export const ENEMIES: Record<string, Enemy> = {
    Human: { 
        name: "Beatrix", 
        attack: 3, 
        defense: 4,
        health: 20 
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