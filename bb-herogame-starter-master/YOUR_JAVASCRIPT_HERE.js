// Write your JS here
const myHero = {};

const hero = {
  name: "Zorblar",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: { type: "Whimsical", damage: 2 }
};

function rest(person) {
  if (person.health < 10) {
    person.health = 10;
  }
  return person;
}

function pickUpItem() {}

function equipWeapon() {}

rest(hero.health);
