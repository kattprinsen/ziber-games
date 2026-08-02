import { rollToDefense } from "./defense";

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
export function rollDice(): number {
    const minNum = 1;
    const maxNum = 20;
    const diceRoll = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    return diceRoll
}

function rollToHit(attack: number) {
    let diceRolled = rollDice();
    if(diceRolled === 20){
        // CRITICAL HIT
        return rollForCritical(diceRolled, attack);
    } else if(diceRolled === 0){
        // CRITICAL MISS
        return rollForCriticalMiss();
    }
    return rollForDamage(diceRolled, attack);
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

export function attackDiceRoll(attack: number, defense: number) {
    let attackNumber = rollToHit(attack);
    let  defenseNumber = rollToDefense(attackNumber, defense);
    const attackDicerolled = attackNumber -= defenseNumber;
    return attackDicerolled;
}  
