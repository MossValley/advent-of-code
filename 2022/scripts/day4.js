const pairsList = require('../puzzle_input/day4-pairs')

function splitPair(pair) {
  return pair.split(',')
    .map((range) => range.split('-'))
    .map((r) => [Number(r[0]), Number(r[1])])
}

function doesFirstRangeOverlapSecondRange(first, second) {
  return first[1] >= second[0] && first[1] <= second[1]
}

function doesOneRangeOverlapTheOther(pair) {
  const ranges = splitPair(pair);
  const range1 = ranges[0];
  const range2 = ranges[1];
  const a = doesFirstRangeOverlapSecondRange(range1, range2);
  const b = doesFirstRangeOverlapSecondRange(range2, range1);
  return a || b
}

function splitListIntoPairs(list) {
  return list.split(/\n/)
}

function assignmentCounter(list) {
  const pairList = splitListIntoPairs(list);
  const pairMap = pairList.map((pair) => doesOneRangeOverlapTheOther(pair))
  return pairMap.filter((p) => p).length;
}


function main(pairsList) {
  console.log('Assignment pairs where ranges overlap:',assignmentCounter(pairsList))
}

main(pairsList);
