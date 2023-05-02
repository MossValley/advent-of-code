const elvesCalorieInventory = require('../puzzle_input/day1-calories');

function getCalorieSum(calories) {
  return calories.split(/\n/)
    .reduce((sum, c) => sum + Number(c), 0);
}

function getElvesAndCalories(inventory) {
  return inventory.split(/\n\n/)
    .map((caloriesPerElf) => getCalorieSum(caloriesPerElf));
}

function getTotalCaloriesForTopElves(inventory, numTopElves) {
  return getElvesAndCalories(inventory)
    .sort((a, b) => b - a)
    .slice(0, numTopElves)
    .reduce((sum, c) => sum + Number(c), 0);
}

function main(inventory, numTopElves = 1) {
  const totalCalories = getTotalCaloriesForTopElves(inventory, numTopElves)
  console.log(`The top ${numTopElves > 1 ? numTopElves + ' elves are' : numTopElves + ' elf is'} carrying a total of ${totalCalories} calories`)
}

main(elvesCalorieInventory, 3);
