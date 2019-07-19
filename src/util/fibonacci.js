export function createFibonacci(n) {
    if (n === 1) {
        return 1;
    } else if(n === 2) {
        return 1;
    } else {
        return createFibonacci(n-1) + createFibonacci(n-2);
    }
  }