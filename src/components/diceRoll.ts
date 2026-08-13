import { rollToDefense } from "./defense.js";

/**
 * Making some notes of the combat system 1.0
 * 1. Rolldice to see if you hit (crit / miss aswell)
 * 2. Rolldice to see how much damage
 * 3. Rolldice to see if target saves
 * 
 * Crit always hits and does damage 2.5x
 * If CRITICAL MISS hero takes damage
 * 
 */

export type AttackResult = {
    damage: number;
    type: "hit" | "critical" | "miss";
};

export function rollDice(): number {
    const minNum = 1;
    const maxNum = 20;
    const diceRoll = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    return diceRoll
}

function rollToHit(attack: number): AttackResult {
    let diceRolled = rollDice();
    if(diceRolled === 20){
        return { damage: rollForCritical(diceRolled, attack), type: "critical" };
    } else if(diceRolled === 0){
        return { damage: rollForCriticalMiss(), type: "miss" };
    }
    return { damage: rollForDamage(diceRolled, attack), type: "hit" };
}

function rollForCriticalMiss() {
    return 0;
}

function rollForCritical(diceResult: number, attack: number) {
    const criticalRoll = (2.5 * (diceResult + attack));
    return criticalRoll;
}

function rollForDamage(diceResult: number, attack: number) {
    const damageRoll = diceResult + attack;
    return damageRoll;
}  

export function attackDiceRoll(attack: number, defense: number): AttackResult {
    const result = rollToHit(attack);
    const attackDicerolled = rollToDefense(result.damage, defense);
    return { damage: attackDicerolled, type: result.type };
}  
