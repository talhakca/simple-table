import { Injectable } from '@angular/core';
import { Tariff } from '@verivox/shared';
import { Observable, of } from 'rxjs';
import { mockTariffs } from './utils/mock-tariffs';
@Injectable({
  providedIn: 'root'
})
export class TariffService {

  getTariffs(): Observable<Tariff[]> {
    return of(mockTariffs);
  }
}
