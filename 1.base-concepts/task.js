"use strict"

function solveEquation(a, b, c) {
  let arr = [];

  const d = Math.pow(b, 2) - 4 * a * c;
  if (d === 0) {
    arr.push(-b / (2 * a));
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  };

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12;

  let bodyCredit = amount - contribution;

  let payOfMonth = bodyCredit * (percent + (percent / (((1 + percent) ** countMonths) - 1)));

  let totalAmount = (payOfMonth * countMonths).toFixed(2);

  return Number(totalAmount);
}