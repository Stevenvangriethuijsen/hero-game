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
  document.getElementById("name").innerHTML = "Name: Keeblar";
  document.getElementById("health").innerHTML = "Health is 10 out of 10";
  document.getElementById("weaponType").innerHTML =
    "Weapon type: Grooble Blaster";
  document.getElementById("weaponDamage").innerHTML = "Weapon Damgage: 4";
  return;
}

displayStats();
