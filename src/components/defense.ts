
export function rollToDefense(attack: number, defense: number) {
    const defenseRoll = attack -= defense;
    return defenseRoll;
}