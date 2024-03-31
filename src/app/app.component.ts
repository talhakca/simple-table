import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Tariff } from '@verivox/shared';
import { AppState } from '@verivox/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  tariffs!: Tariff[];
  subscription!: Subscription;

  constructor(
    private store: Store<{ app: AppState }>
  ) { }

  ngOnInit(): void {
    this.subscription = this.subscribeToTariffs();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  subscribeToTariffs() {
    return this.store.select(state => state.app.tariffs).subscribe(tariffs => {
      this.tariffs = tariffs
    });
  }

}
