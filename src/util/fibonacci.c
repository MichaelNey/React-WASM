#include <stdlib.h>
#include <stdio.h>
#include "emscripten/emscripten.h"

int main(void) {
    printf("WebAssembly Main Loaded.");
};

EMSCRIPTEN_KEEPALIVE
int createFibonacci(int n) {
  if (n == 1) {
      return 1;
  } else if(n == 2) {
      return 1;
  } else {
      return createFibonacci(n-1) + createFibonacci(n-2);
  }
}