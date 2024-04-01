import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Tariff } from '@verivox/shared';
import { AppState } from '@verivox/store';
import { Subscription } from 'rxjs';
import { Sort } from './utils/enums/sort.enum';
import { orderBy } from 'lodash';
import { sortOptions } from './utils/constants/sort-options';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  tariffs!: Tariff[];
  subscription!: Subscription;
  selectedSort!: Sort;
  selectOptions = sortOptions;

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

  onSortChange(sort: Sort) {
    const [fieldName, sortValue] = sort.split('-')
    this.tariffs = orderBy(this.tariffs, fieldName, sortValue as 'asc' | 'desc');
  }

}
