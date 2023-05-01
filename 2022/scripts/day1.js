const elvesCalorieInventory = require('../puzzle_input/day1-calories');

function getCalorieSum(calories) {
  return calories.split(/\n/)
    .reduce((sum, c) => sum + Number(c), 0);
}

function getElvesAndCalories(inventory) {
  return inventory.split(/\n\n/)
    .map((caloriesPerElf) => getCalorieSum(caloriesPerElf));
}

function getElfWithMostCalories(inventory) {
  let elf = 0;
  let mostCalories = 0;

  getElvesAndCalories(inventory)
    .forEach((totalCal, i) => {
      if (totalCal > mostCalories) {
        elf = i+1;
        mostCalories = totalCal;
      }
    })
  return {
    elf,
    mostCalories,
  }
}

function main(inventory) {
  const { elf, mostCalories} = getElfWithMostCalories(inventory);
  console.log(`\nElf number ${elf} has the most calories: ${mostCalories}`)
}

main(elvesCalorieInventory);
