
export function rollDice(): number {
    const minNum = 0;
    const maxNum = 20;
    const diceRoll = Math.floor(Math.random() * (maxNum - minNum + 1));
    return diceRoll
}