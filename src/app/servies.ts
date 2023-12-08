import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Bokning, ReservationConfirmation, SkiEquipmentItem } from './shared.models';

const BASE_URL = 'https://www-th-frontend.azurewebsites.net/api/exam/v1';

@Injectable({
  providedIn: 'root',
})
export class HttpGetProductsService {
  private readonly apiUrl = `${BASE_URL}/skiequipment`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<SkiEquipmentItem[]> {
    return this.http.get<SkiEquipmentItem[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching ski equipment:', error);
        return throwError('Could not fetch ski equipment. Please try again later.');
      })
    );
  }
}

@Injectable({
  providedIn: 'root',
})
export class BookingNotificationService {
  private readonly apiUrl = `${BASE_URL}/booking`;
  SkickaBokning: any;

  constructor(private http: HttpClient) {}

 // Inside getProducts method
getProducts(): Observable<SkiEquipmentItem[]> {
  return this.http.get<SkiEquipmentItem[]>(`${this.apiUrl}/skiequipment`).pipe(
    catchError((error) => {
      // Handle error (e.g., log it, show a user-friendly message)
      console.error('Error fetching products:', error);
      return throwError('Something went wrong while fetching products.');
    })
    );
  }
}
@Injectable({ providedIn: 'root'})
export class SubmitService {
  private readonly apiUrl = "https://www-th-frontend.azurewebsites.net/api/exam/v1/booking";

  constructor(private httpClient : HttpClient) {}

  submitBooking(booking : Bokning) : Observable<ReservationConfirmation> {
    return this.httpClient.post<ReservationConfirmation>(this.apiUrl, booking);
  }
}

@Injectable({
  providedIn: 'root',
})
export class SharedState {
  private kvitto?: ReservationConfirmation;

  getKvitto(): ReservationConfirmation | undefined {
    return this.kvitto;
  }

  setKvitto(inputKvitto: ReservationConfirmation): void {
    this.kvitto = inputKvitto;
  }
}
