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
        rollForCritical(diceRolled, attack);
        return "CRITICAL HIT";
    } else if(diceRolled === 0){
        return "CRITICAL MISS";
    }
    return rollForDamage(diceRolled, attack);
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
    const attackNumber = rollToHit(attack);
    return attackNumber;
}  
