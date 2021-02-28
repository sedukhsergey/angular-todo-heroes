import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnDestroy {
  intervalId = 0;
  message = '';
  seconds = 11;

  ngOnDestroy(): void { this.clearTimer(); }

  start(): void { this.countDown(); }
  stop(): void  {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  private clearTimer(): void { clearInterval(this.intervalId); }

  private countDown(): void {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
        return;
      }
      if (this.seconds < 0) { this.seconds = 10; } // reset
      this.message = `T-${this.seconds} seconds and counting`;
    }, 1000);
  }

}
