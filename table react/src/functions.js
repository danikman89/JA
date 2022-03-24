export function isEven(number) {
  return number % 2 === 0;
}

export function fibonacci(n) {
  if (!n || n < 1) {
    return "must be higher than 0";
  }
  const arr = [];
  let pastNum = 0;
  let currentNum = 1;
  for (let i = 1; i <= n; i++) {
    const nextNum = pastNum + currentNum;
    arr.push(currentNum);
    pastNum = currentNum;
    currentNum = nextNum;
  }
  return arr.join(", ");
}

export function countdownR(num) {
  if (num > 0) {
    countdownR(num - 1);
  }
}
