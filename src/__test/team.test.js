import Character from '../character';
import Team from '../team';

test('team creation', () => {
  const team1 = new Team();
  expect(team1.members).toEqual(new Set());
});

test('adding 1 char', () => {
  const team1 = new Team();
  const char1 = new Character('Lisette', 'Bowman');
  team1.add(char1);
  expect(team1.members.has(char1)).toBe(true);
});

test('adding all chars', () => {
  const team1 = new Team();
  const char1 = new Character('Lisette', 'Bowman');
  const char2 = new Character('Fafnir', 'Daemon');
  team1.addAll(char1, char2);
  expect(team1.members.has(char1) && team1.members.has(char2)).toBe(true);
});

test('adding error', () => {
  const team1 = new Team();
  const char1 = new Character('Lisette', 'Bowman');
  team1.add(char1);
  expect(() => { team1.add(char1); }).toThrow('Этот персонаж уже есть в команде');
});

test('array creation', () => {
  const team1 = new Team();
  const char1 = new Character('Lisette', 'Bowman');
  const char2 = new Character('Fafnir', 'Daemon');
  team1.addAll(char1, char2);
  const result = team1.toArray();
  expect(result).toEqual([
    {
      name: 'Lisette', type: 'Bowman', level: 1, health: 100,
    },
    {
      name: 'Fafnir', type: 'Daemon', level: 1, health: 100,
    },
  ]);
});
