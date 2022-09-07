export class DnDCharacter {
  public hitpoints: number
  public strength: number
  public dexterity: number
  public constitution: number
  public intelligence: number
  public wisdom: number
  public charisma: number

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore()
    this.dexterity = DnDCharacter.generateAbilityScore()
    this.constitution = DnDCharacter.generateAbilityScore()
    this.intelligence = DnDCharacter.generateAbilityScore()
    this.wisdom = DnDCharacter.generateAbilityScore()
    this.charisma = DnDCharacter.generateAbilityScore()

    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }

  static d6(): number {
    return 1 + Math.floor(Math.random() * 6);
  }

  public static generateAbilityScore(): number {

    return [
      DnDCharacter.d6(),
      DnDCharacter.d6(),
      DnDCharacter.d6(),
      DnDCharacter.d6()
    ]
      .sort()
      .slice(1)
      .reduce((a, b) => { return a + b })

  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }
}


