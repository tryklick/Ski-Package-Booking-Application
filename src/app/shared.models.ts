export class Bokning {
  skiEquipmentId: number;
  name: string;

  constructor(name: string, skiEquipmentId: number) {
    this.skiEquipmentId = skiEquipmentId;
    this.name = name;
  }
}

export interface ReservationConfirmation {
  confirmationNumber: string;
}


export interface SkiEquipmentItem {
fullDescription: any;
shortDescription: any;
name: any;
  id: number;
  header: string;
  description: string;
  extendedDescription: string;
  imageUrl: string;
  extendedDescriptionVisible?: boolean;
  equipmentDetails?: {
    skida: string;
    bindning: string;
    pjaxa: string;
  };

}



