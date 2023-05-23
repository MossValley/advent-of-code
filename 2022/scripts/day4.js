const pairsList = require('../puzzle_input/day4-pairs')

function splitPair(pair) {
  return pair.split(',')
    .map((range) => range.split('-'))
    .map((r) => [Number(r[0]), Number(r[1])])
}

function isFirstRangeWider(first, second) {
  const index0= first[0] <= second[0];
  const index1= first[1] >= second[1];

  return index0 && index1
}

function isOneRangeContainedInTheOther(pair) {
  const ranges = splitPair(pair);
  const range1 = ranges[0];
  const range2 = ranges[1];
  const a = isFirstRangeWider(range1, range2);
  const b = isFirstRangeWider(range2, range1);
  return a || b
}

function splitListIntoPairs(list) {
  return list.split(/\n/)
}

function assignmentCounter(list) {
  const pairList = splitListIntoPairs(list);
  const pairMap = pairList.map((pair) => isOneRangeContainedInTheOther(pair))
  return pairMap.filter((p) => p).length;
}


function main(pairsList) {
  console.log('Assignment pairs where one range fully contains the other:',assignmentCounter(pairsList))
}

main(pairsList);
