export default function Count({
  onCountdownFinish,
  currentCount,
  setCurrentCount,
  startCountdown,
  setStartCountdown
}: {
  onCountdownFinish: () => void;
  currentCount: number;
  setCurrentCount: (count: number) => void;
  startCountdown: boolean;
  setStartCountdown: (start: boolean) => void;
}) {
  console.log('startCountdown', startCountdown);
  if (startCountdown && !timer.isStarted()) {
    timer.startTimer(currentCount, (count: number) => {
      setCurrentCount(count);
      setStartCountdown(false);
    });
  
  } if (currentCount === 0) {
    timer.cancelTimer();
    onCountdownFinish();
  }
  return <>{currentCount}</>;
}

export class Timer {
  private currentCount: number | undefined = undefined;
  private timer: number | undefined;
  startTimer(countdown: number, callbackFn: (count: number) => void) {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.currentCount = countdown;
    this.timer = this.#setTimeoutFn(callbackFn);

    callbackFn(this.currentCount);
  }

  cancelTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = undefined;
    this.currentCount = undefined;
  }

  #setTimeoutFn(callbackFn: (count: number) => void) {
    return setTimeout(() => {
      if (this.currentCount !== undefined) {
        this.currentCount--;
        callbackFn(this.currentCount);
        if (this.currentCount > 0) {
          this.timer = this.#setTimeoutFn(callbackFn);
        }
      }
    }, 1000);
  }

  isStarted() {
    return this.timer !== undefined;
  }
}

const timer = new Timer();
