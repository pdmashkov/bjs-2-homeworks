function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }

    sum += arr[i];
  }

  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;

  if (arr.length != 0) {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  let difference = 0;

  if (arr.length != 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= min) {
        min = arr[i];
      }

      if (arr[i] >= max) {
        max = arr[i];
      }
    }

    difference = max - min;
  }

  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0
  let difference = 0;

  if (arr.length != 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }

    difference = sumEvenElement - sumOddElement;
  }

  return difference;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let avg = 0;

  if (arr.length != 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }

    avg = sumEvenElement / countEvenElement;
  }

  return avg;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let maxFuncResult = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    maxFuncResult = func(...arrOfArr[i]);

    if (maxFuncResult > maxWorkerResult) {
      maxWorkerResult = maxFuncResult;
    }
  }

  return maxWorkerResult;
}
