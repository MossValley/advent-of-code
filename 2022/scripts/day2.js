const elfStrategy = require('../puzzle_input/day2-strategy');

const test=`A Y
B X
C Z`

const round = {
  lose: 0,
  draw: 3,
  win: 6,
}

const shapeMatchKey = {
  A: { Y: round.win, X: round.draw, Z: round.lose },
  B: { Z: round.win, Y: round.draw, X: round.lose },
  C: { X: round.win, Z: round.draw, Y: round.lose },
}

const shapeScoreKey = {
  A: 1, // rock
  B: 2, // paper
  C: 3, // scissors
  X: 1, // rock
  Y: 2, // paper
  Z: 3, // scissors
}

function getScoreForRound(shapes) {
  const opponent = shapes[0]
  const player = shapes[1]

  const round = shapeMatchKey[opponent][player]

  return shapeScoreKey[player] + round;
}

function getStrategyRounds(strategy) {
  return strategy
    .split(/\n/)
    .map((x) => x.split(' '));
}

function totalScoreForTournament(strategy) {
  return getStrategyRounds(strategy)
    .map((round) => getScoreForRound(round))
    .reduce((sum, round) => sum + round)
}

function main(strategy) {
  const score = totalScoreForTournament(strategy)
  console.log(`Your total score is ${score}`)
}

main(elfStrategy)