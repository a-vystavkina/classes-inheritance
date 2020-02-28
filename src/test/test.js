import Bowman from '../js/Bowerman';
import Swordsman from '../js/Swordsman';
import Magician from '../js/Magician';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';
import Deamon from '../js/Daemon';

test('Проверка Bowerman', () => {
  const received = new Bowman('Лучник', 'Bowman');
  const expected = {
    name: 'Лучник',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(received).toEqual(expected);
});

test('Проверка Swordsman', () => {
  const received = new Swordsman('Мечник', 'Swordsman');
  const expected = {
    name: 'Мечник',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(received).toEqual(expected);
});

test('Проверка Magician', () => {
  const received = new Magician('Маг', 'Magician');
  const expected = {
    name: 'Маг',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(received).toEqual(expected);
});

test('Проверка Undead', () => {
  const received = new Undead('Нежить', 'Undead');
  const expected = {
    name: 'Нежить',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(received).toEqual(expected);
});

test('Проверка Zombie', () => {
  const received = new Zombie('Зомби', 'Zombie');
  const expected = {
    name: 'Зомби',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(received).toEqual(expected);
});

test('Проверка Deamon', () => {
  const received = new Deamon('Демон', 'Deamon');
  const expected = {
    name: 'Демон',
    type: 'Deamon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(received).toEqual(expected);
});
