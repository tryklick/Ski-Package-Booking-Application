// app.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Bokning, ReservationConfirmation, SkiEquipmentItem } from './shared.models';
import { SubmitService } from './servies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void { }

  constructor(private submitService : SubmitService) { }

  showConfirmation: boolean = false;
  showBookingForm: boolean = false;
  //skiPackages: SkiEquipmentItem[] = [];


  bookingName: string = '';
  bookingConfirmation?: ReservationConfirmation;
  showExtendedDescription: boolean | undefined;
  selectedSkiPackage: SkiEquipmentItem | undefined;

  cancelBooking() {
    this.showBookingForm = false;
    this.bookingName = ''; // Återställ namnet
    this.selectedSkiPackage = undefined;
  }


  handleSelectedEquipment(selectedEquipment: SkiEquipmentItem) {
    this.selectedSkiPackage = selectedEquipment;
  }

  handleConfirmation(conf: ReservationConfirmation) {
    this.bookingConfirmation = conf;
    this.showConfirmation = true;
  }

  submitBookingForm() {
    if (this.bookingName.trim() === '' || this.selectedSkiPackage?.id === undefined) {
      return;
    }

    const skickas : Bokning = {
      skiEquipmentId: this.selectedSkiPackage?.id,
      name: this.bookingName
    };

    this.submitService.submitBooking(skickas)
      .subscribe((response : ReservationConfirmation) => {
        this.handleConfirmation(response);
      });

    this.bookingName = '';
  }
}
