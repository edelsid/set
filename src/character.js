export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя персонажа слишком короткое/длинное');
    } else {
      this.name = name;
    }
    if (!types.includes(type)) {
      throw new Error('Такого класса не существует');
    } else {
      this.type = type;
    }
    this.level = 1;
    this.health = 100;
  }
}
