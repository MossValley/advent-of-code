const elfStrategy = require('../puzzle_input/day2-strategy');

const test=`A Y
B X
C Z`


const results = {
  X: 0, // lose
  Y: 3, // draw
  Z: 6, // win
}
const shapeScore = {
  A: 1, // rock
  B: 2, // paper
  C: 3, // scissors
}

const shapeMatch = {
  A: { X: shapeScore.C, Y: shapeScore.A, Z: shapeScore.B },
  B: { X: shapeScore.A, Y: shapeScore.B, Z: shapeScore.C },
  C: { X: shapeScore.B, Y: shapeScore.C, Z: shapeScore.A },
}

function getScoreForRound(round) {
  const opponentShape = round[0];
  const strategyResult = round[1];

  const playerShape = shapeMatch[opponentShape][strategyResult];

  return playerShape + results[strategyResult];
}

function getStrategyRounds(strategy) {
  return strategy
    .split(/\n/)
    .map((x) => x.split(' '));
}

function totalScoreForTournament(strategy) {
  return getStrategyRounds(strategy)
    .map((round) => getScoreForRound(round))
    .reduce((sum, round) => sum + round);
}

function main(strategy) {
  const score = totalScoreForTournament(strategy)
  console.log(`Your total score is ${score}`);
}

main(elfStrategy);
