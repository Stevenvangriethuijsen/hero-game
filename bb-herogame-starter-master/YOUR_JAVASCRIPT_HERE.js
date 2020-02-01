// Write your JS here
const myHero = {};
// hero information
const hero = {
  name: "Zorblar",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: { type: "Whimsical", damage: 2 }
};
// health restoration
function rest(person) {
  if (person.health === 10) {
    alert("You are at full health.");
  } else {
    person.health = 10;
  }
  return person;
}

function pickUpItem(person, weapon) {
  person.inventory.push(weapon);
}

function equipWeapon(person) {
  if (person.inventory.length === 0) {
    return;
  } else {
    person.weapon = person.inventory[0];
  }
}

function displayStats() {
  document.getElementById("name").innerHTML = `Name : ${hero.name}`;
  document.getElementById(
    "health"
  ).innerHTML = `Health : ${hero.health} out of 10`;
  document.getElementById(
    "weaponType"
  ).innerHTML = `Weapon type : ${hero.weapon.type}`;
  document.getElementById(
    "weaponDamage"
  ).innerHTML = `Weapon Damage : ${hero.weapon.damage}`;
  return;
}

function newName() {
  const name = document.getElementById("myName").value;
  document.getElementById("welcomeName").innerHTML = `Welcome : ${name}`;
  if (hero.name !== name) {
    hero.name = name;
    displayStats();
  }
}

displayStats();
console.log(hero.name);
