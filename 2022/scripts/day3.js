const rucksackList = require('../puzzle_input/day3-rucksacks');

// const test = `vJrwpWtwJgWrhcsFMMfFFhFp
// jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
// PmmdzqPrVvPwwTWBwg
// wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
// ttgJtRGJQctTZtZT
// CrZsJsPPZsGzwwsLwLmpwMDw`;

const itemTypes = {
  a: 1,
  z: 26,
  A: 27,
  Z: 52,
}

function itemValues({start, end, charCodeDiff}) {
  let result = {};
    for(let i = start; i <= end; i++) {
      const item = String.fromCharCode(i + charCodeDiff)
      result[item] = i;
    }
  return result;
}

const lowercaseItemPriorities = itemValues({ start: itemTypes.a, end: itemTypes.z, charCodeDiff: 96 });
const uppercaseItemPriorities = itemValues({ start: itemTypes.A, end: itemTypes.Z, charCodeDiff: 38 });


function getRucksackCompartments(rucksack) {
  return {
    c1: rucksack.slice(0, rucksack.length/2),
    c2: rucksack.slice(rucksack.length/2, rucksack.length)
  }
}

function getSharedItemType(rucksack) {
  const { c1, c2 } = getRucksackCompartments(rucksack.split(''));

  return c1.filter((item) => c2.includes(item))
    .filter((item, i, arr) => i === 0 || !arr.slice(i-1).includes(item));
}

function getRucksacksAsArray(rucksacks) {
  return rucksacks.split('\n');
}

function getItemValue(item) {
  if (lowercaseItemPriorities.hasOwnProperty(item)) {
    return lowercaseItemPriorities[item]
  }
  if (uppercaseItemPriorities.hasOwnProperty(item)) {
    return uppercaseItemPriorities[item]
  }
  return 0;
}

function sumOfSharedItemsInRucksacks(rucksacks) {
  return getRucksacksAsArray(rucksacks)
    .map((rucksack) => getSharedItemType(rucksack))
    .reduce((sum, item) => sum + getItemValue(item), 0)
}



function main(rucksacks) {
  const result = sumOfSharedItemsInRucksacks(rucksacks);
  console.log('Sum of priorities of items', result);
}


main(rucksackList)
