module.exports = {
  alpine(x) {
    let d = x.length;
    let sum = 0;
    for (let i = 0; i < d; i++)
      sum += Math.abs((x[i] * Math.sin(x[i])) + (x[i] * 0.1));
    return sum;
  },
  aqley(x) {
    let d = x.length;
    let firstSum = 0;
    let secondSum = 0;
    for (let i = 0; i < d; i++) {
      firstSum += Math.pow(x[i], 2);
      secondSum += Math.cos(2 * Math.PI * x[i]);
    }
    return -20 * Math.exp(-0.2 * Math.sqrt((1.0 / d) * firstSum)) - Math.exp((1.0 / d) * secondSum) + 20 + Math.E;
  },
  elliptical(x) {
    let d = x.length;
    let sum = 0;
    for (let i = 0; i < d; i++)
      sum += Math.pow(Math.pow(10, 6), ((i) / (d - 1))) * Math.pow(x[i], 2);
    return sum;
  },
  grivonk(x) {
    let d = x.length;
    let sum = 0;
    let comp = 1;
    for (let i = 0; i < d; i++) {
      sum += Math.pow(x[i], 2);
      comp *= Math.cos(x[i] / Math.sqrt(i + 1));
    }
    return result = 1 + sum / 4000.0 - comp;
  },
  rastrigin(x) {
    let d = x.length;
    let sum = 0;
    for (let i = 0; i < d; i++)
      sum += Math.pow(x[i], 2) - (10.0 * (Math.cos(2 * Math.PI * x[i]))) + 10.0;
    return sum;
  },
  rosenbroke(x) {
    let d = x.length;
    let sum = 0;
    for (let i = 0; i < d - 1; i++)
      sum += 100 * Math.pow((x[i + 1] - Math.pow((x[i]), 2)), 2) + Math.pow((1 - x[i]), 2);
    return sum;
  },
  schwefel(x) {
    let d = x.length;
    let sum = 0;
    for (let i = 0; i < d; i++)
      sum += (x[i] * Math.sin(Math.sqrt(Math.abs(x[i]))));
    return -(1.0 / d) * sum + 418.983;
  },
  schwefel2(x) {
    let d = x.length;
    let sum = 0;
    for (let i = 0; i < d; i++) {
      let sum2 = 0;
      for (let j = 0; j <= i; j++)
        sum2 += x[j];
      sum += Math.pow(sum2, 2);
    }
    return sum;
  },
  spherical(x) {
    let d = x.length;
    let sum = 0;
    for (let i = 0; i < d; i++)
      sum += Math.pow(x[i], 2);
    return sum;
  },
  weierstrass(x) {
    let d = x.length;
    let firstSum = 0;
    let secondSum = 0;
    for (let i = 0; i < d; i++)
      for (let k = 0; k <= 20; k++)
        firstSum += Math.pow(0.5, k) * Math.cos(2 * Math.PI * Math.pow(3, k) * (x[i] + 0.5));
    for (let k = 0; k <= 20; k++)
      secondSum += Math.pow(0.5, k) * Math.cos(Math.PI * Math.pow(3, k));
    return (1.0 / d) * firstSum - secondSum;
  }
};
