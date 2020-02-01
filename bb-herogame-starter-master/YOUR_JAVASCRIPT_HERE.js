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
    displayStats();
  }
  return person;
}

function pickUpItem(person, weapon) {
  person.inventory.push(weapon);
  displayInventory();
}

function equipWeapon(person) {
  if (person.inventory.length === 0) {
    return;
  } else {
    const tempWeapon = person.weapon;
    person.weapon = person.inventory[0];
    person.inventory.shift();
    person.inventory.push(tempWeapon);
    displayInventory();
    displayStats();
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

function displayInventory() {
  if (hero.inventory.length === 0) {
    document.getElementById("itemInInventory").innerHTML = `Your bag is empty.`;
  } else {
    for (let i = 0; i < hero.inventory.length; i++) {
      document.getElementById(
        "itemInInventory"
      ).innerHTML = `${hero.inventory[i].type}`;
      console.log(hero.inventory[i]);
    }
  }
}
// test heroes and weapons
const testHero = {
  name: "Kreeble Darktongue",
  health: 8,
  weapon: { type: "Grooble Blaster", damage: 6 }
};
const testWeapon = { weapon: { type: "Kublee Cutter", damage: 72 } };
const testWeapon2 = { weapon: { type: "Grooble Blaster", damage: 6 } };
//
const audio = new Audio("Epic-battle-music-grzegorz-majcherczyk-heroica.mp3");

displayStats();
displayInventory();
audio.play();
