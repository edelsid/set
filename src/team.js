export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (this.members.has(char)) {
      throw new Error('Этот персонаж уже есть в команде');
    } else {
      this.members.add(char);
    }
  }

  addAll(...chars) {
    for (let i = 0; i < chars.length; i += 1) {
      this.members.add(chars[i]);
    }
  }

  toArray() {
    const partyArr = Array.from(this.members);
    return partyArr;
  }
}
