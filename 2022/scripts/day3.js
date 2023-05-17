const rucksackList = require('../puzzle_input/day3-rucksacks');

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

function getSharedItemType(group) {
  const e1 = group[0].split('');
  const e2 = group[1].split('');
  const e3 = group[2].split('');

  return e1.filter((item) => e2.includes(item) && e3.includes(item))
    .filter((item, i, arr) => i === 0 || !arr.slice(i-1).includes(item));
}

function sortRucksacksIntoGroups(rucksacks) {
  const ELVES_PER_GROUP = 3;
  const allRucksacks = rucksacks.split('\n');

  const groups = [];
  for(let i = 0; i < allRucksacks.length; i += ELVES_PER_GROUP) {
    const group = []
    for(let j = 0; j < ELVES_PER_GROUP; j++) {
      group.push(allRucksacks[i+j])
    }
    groups.push(group)
  }
  return groups;
}

function getItemValue(item) {
  if (lowercaseItemPriorities.hasOwnProperty(item)) {
    return lowercaseItemPriorities[item];
  }
  if (uppercaseItemPriorities.hasOwnProperty(item)) {
    return uppercaseItemPriorities[item];
  }
  return 0;
}

function sumOfCommonItemsPerGroup(rucksacks) {
  return sortRucksacksIntoGroups(rucksacks)
    .map((group) => getSharedItemType(group))
    .reduce((sum, item) => sum + getItemValue(item), 0);
}

function main(rucksacks) {
  const result = sumOfCommonItemsPerGroup(rucksacks);
  console.log('Sum of priorities of items', result);
}

main(rucksackList)
