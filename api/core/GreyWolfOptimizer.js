const mathFunctions = require('../core/mathFunctions');
const ALPHA_WOLF = 0;

module.exports = function solve(problem) {
  const targetFunction = mathFunctions[problem.function];
  let iterationNumber = 0;
  let population = initPopulation(problem, targetFunction);
  let isEnd = false;
  let best = population[ALPHA_WOLF].value;
  let solution = {generations: []};
  while (!isEnd) {
    let a = 2.0 - (iterationNumber * (2.0 / problem.maxIterationNumber));
    population = refreshPositions(population, problem.bounds, a);
    population = sortPopulation(population, targetFunction);
    iterationNumber++;
    isEnd = iterationNumber >= problem.maxIterationNumber || Math.abs(best - population[ALPHA_WOLF].value) < problem.accuracy;
    best = population[ALPHA_WOLF].value;
    refreshSolution(solution, population);
  }
  return {...solution, iterationNumber};
};

function initPopulation({wolfNumber, dimensions, bounds}, targetFunction) {
  let population = [];
  for (let i = 0; i < wolfNumber; i++) {
    let wolf = {position: [], value: 0};
    for (let j = 0; j < dimensions; j++)
      wolf.position[j] = bounds[j].min + (bounds[j].max - bounds[j].min) * Math.random();

    population.push(wolf);
  }
  return sortPopulation(population, targetFunction);
}

function refreshPositions(population, bounds, a) {
  let leaders = getLeaders(population);
  return population.map(wolf => {
    let newWolf = {};
    newWolf.position = wolf.position.map((coordinate, index) => {
      let coordinateVectors = leaders.reduce((acc, leader) => acc + calculateVector(coordinate, leader.position[index], a), 0);
      let newCoordinate = coordinateVectors / leaders.length;
      if (newCoordinate > bounds[index].max || newCoordinate < bounds[index].min)
        newCoordinate = bounds[index].min + (bounds[index].max - bounds[index].min) * Math.random();
      return newCoordinate;
    });
    return newWolf;
  });
}

function getLeaders(population) {
  return population.slice(0, 3);
}

function sortPopulation(population, targetFunction) {
  population.forEach(wolf => wolf.value = targetFunction(wolf.position));
  return population.sort((firstWolf, secondWolf) => firstWolf.value - secondWolf.value);
}

function calculateVector(currentWolfCoordinate, leaderWolfCoordinate, a) {
  let A = 2.0 * a * Math.random() - a;
  let C = 2.0 * Math.random();
  return leaderWolfCoordinate - A * (Math.abs(C * leaderWolfCoordinate - currentWolfCoordinate));
}

function refreshSolution(solution, population) {
  solution.generations.push(population);
  solution.best = population[ALPHA_WOLF];
}
