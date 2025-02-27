export class Timer {
  #timer = undefined;
  #currentCount = undefined;


  startTimer(countdown,  callbackFn) {
    if (this.#timer) {
      clearInterval(this.#timer);
    }
    this.#currentCount = countdown;
    this.#timer = this.#setTimeoutFn(callbackFn);

    callbackFn(this.#currentCount);
  }

  #setTimeoutFn(callbackFn) {
    return setTimeout(() => {
      this.#currentCount--;
      callbackFn(this.#currentCount);
      if (this.#currentCount > 0) {
        this.#timer = this.#setTimeoutFn(callbackFn);
      }
    }, 1000);
  }

  isStarted() {
    return this.#timer !== undefined;
  }
}
