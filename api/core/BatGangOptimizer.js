const mathFunctions = require('../core/mathFunctions');

module.exports = function solve(problem) {
  const targetFunction = mathFunctions[problem.function];
  let iterationNumber = 0;
  let population = initPopulation(problem, targetFunction);
  let solution = {generations: []};
  while (iterationNumber < problem.maxIterationNumber) {
    population = refreshPositions(population, problem, iterationNumber, targetFunction);
    iterationNumber++;
    refreshSolution(solution, population);
  }
  return {...solution, iterationNumber};
};

function initPopulation({batNumber, dimensions, bounds}, targetFunction) {
  let population = {bats: []};
  for (let i = 0; i < batNumber; i++) {
    let bat = {position: [], velocity: []};
    bat.loudness = Math.random();
    bat.pulseRate = Math.random();
    for (let j = 0; j < dimensions; j++) {
      bat.velocity[j] = 0;
      bat.position[j] = bounds[j].min + (bounds[j].max - bounds[j].min) * Math.random();
    }
    bat.value = targetFunction(bat.position);
    population.bats.push(bat);
  }
  population.best = getBestBat(population.bats);
  return population;
}

function getBestBat(bats) {
  return bats.concat().sort((firstBat, secondBat) => firstBat.value - secondBat.value)[0];
}

function refreshPositions(population, {frequency, bounds, alpha, gamma}, iterationNumber, targetFunction) {
  let newPopulation = {bats: [], best: population.best};
  newPopulation.bats = population.bats.map((bat) => {
    let newBat = {position: [], velocity: [], pulseRate: bat.pulseRate, loudness: bat.loudness, value: bat.value};
    bat.frequency = frequency.min + (frequency.max - frequency.min) * Math.random();

    bat.position.forEach((coordinate, index) => {
      newBat.velocity.push(bat.velocity[index] + (bat.position[index] - newPopulation.best.position[index]) * bat.frequency);
      newBat.position.push(simpleBounds(coordinate + bat.velocity[index], bounds[index].min, bounds[index].max));
    });

    if (Math.random() > bat.pulseRate) {
      newBat.position = newBat.position.map((coordinate, index) => {
        let newCoordinate = newPopulation.best.position[index] + (0.001 * (Math.random() * (Math.random() > 0.5 ? -1 : 1)));
        return simpleBounds(newCoordinate, bounds[index].min, bounds[index].max);
      })
    }

    let value = targetFunction(newBat.position);

    if (value <= newBat.value && Math.random() < newBat.loudness) {
      newBat.value = value;
      newBat.pulseRate = newBat.pulseRate * 1.0 - Math.exp(-gamma * iterationNumber);
      newBat.loudness = newBat.loudness * alpha;
    }
    if (value <= newPopulation.best.value) {
      newPopulation.best.value = value;
      newPopulation.best.position = newBat.position;
    }
    return newBat;
  });
  return newPopulation;
}

function simpleBounds(coordinate, minBound, maxBound) {
  if (coordinate > maxBound || coordinate < minBound)
    coordinate = minBound + (maxBound - minBound) * Math.random();
  return coordinate;
}

function refreshSolution(solution, population) {
  solution.generations.push(population);
  solution.best = population.best;
}
