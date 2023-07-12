import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../service/listing.service';
import { Listing } from '../models/listing.model';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  listing!: Listing;

  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingService
  ) { }

  ngOnInit() {
    this.loadListing();
  }

  loadListing() {
    const listingId = Number(this.route.snapshot.paramMap.get('id'));
    this.listingsService.getListingById(listingId)
      .subscribe(listing => {
        this.listing = listing;
      });
  }
}
