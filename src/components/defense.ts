
export function rollToDefense(attack: number, defense: number): number {
    const diceRoll = Math.floor(Math.random() * 20) + 1;
    const defenseRoll = diceRoll + defense;
    return Math.max(0, attack - defenseRoll);
}