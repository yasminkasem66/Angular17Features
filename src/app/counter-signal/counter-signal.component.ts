import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-signal.component.html',
  styleUrls: ['./counter-signal.component.scss'],
})
export class CounterSignalComponent {
  counter = signal(0);
  counters = signal<string[]>([]);

  increment() {
    this.counter.update((oldValue) => oldValue + 1);
    this.counters.update((oldValue) => [...oldValue,'increment']);
  }

  decrement() {
    this.counter.update((oldValue) => oldValue - 1);
    this.counters.update((oldValue) => [...oldValue,'decrement']);
  }
}
