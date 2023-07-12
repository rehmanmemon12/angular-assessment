import { Injectable } from '@angular/core';
import { Listing } from '../models/listing.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private listings: Listing[] = [
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
  ];

  constructor() { }

  getPropertyListings(): Observable<Listing[]> {
    return of(this.listings);
  }

  getListingById(id: number | undefined): Observable<any> {
    const listing = this.listings.find(l => l.id === id);
    return of(listing);
  }
}
