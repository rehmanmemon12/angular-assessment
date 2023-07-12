export interface Listing {
  id: number;
  imageUrl: string;
  title: string;
  address: string;
  beds: number;
  bath: number;
  coveredAreaSQFT: number;
  propertyType: string;
  isCommercial: boolean;
  price: number;
}
