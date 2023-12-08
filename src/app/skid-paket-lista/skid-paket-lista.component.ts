import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SkiEquipmentItem } from '../shared.models';
import { HttpGetProductsService } from '../servies';

@Component({
  selector: 'app-skid-paket-lista',
  templateUrl: './skid-paket-lista.component.html',
  styleUrls: ['./skid-paket-lista.component.scss']
})

export class SkidPaketListaComponent implements OnInit {
  skidoritemarray: SkiEquipmentItem[] = [];

  @Output() dinpaket = new EventEmitter<SkiEquipmentItem>();

  constructor(private httpService: HttpGetProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.httpService.getProducts().subscribe((response: SkiEquipmentItem[]) => {
      this.skidoritemarray = response.map(item => ({ ...item, extendedDescriptionVisible: false }));
    });
  }

  toggleExtendedDescription(item: SkiEquipmentItem) {
    item.extendedDescriptionVisible = !item.extendedDescriptionVisible;
  }

  selectEquipment(selectedItem: SkiEquipmentItem) {
    this.dinpaket.emit(selectedItem);
  }
}

