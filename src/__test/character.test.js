import Character from '../character';

const dataList = [
  ['Y', 'Daemon', 'Имя персонажа слишком короткое/длинное'],
  ['Yddramorral', 'Daemon', 'Имя персонажа слишком короткое/длинное'],
  ['Fafnir', 1, 'Такого класса не существует'],
];

const handler = test.each(dataList);

handler('testing char names', (name, type, expected) => {
  expect(() => new Character(name, type)).toThrow(expected);
});

test('character creation', () => {
  const char1 = new Character('Lisette', 'Bowman');
  expect(char1).toEqual({
    name: 'Lisette',
    type: 'Bowman',
    level: 1,
    health: 100,
  });
});
