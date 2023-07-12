import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ListingService } from '../service/listing.service';
import { Listing } from '../models/listing.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  viewMode: 'table' | 'card' = 'table';
  listings: Listing[] = [];
  displayedColumns: string[] = [
    'imageUrl',
    'title',
    'address',
    'beds',
    'bath',
    'coveredAreaSQFT',
    'propertyType',
    'isCommercial',
    'price',
  ];
  dataSource!: MatTableDataSource<Listing>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private listingsService: ListingService) {}

  ngOnInit() {
    this.loadListings();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadListings() {
    this.listingsService.getPropertyListings().subscribe((listings) => {
      this.listings = listings;
      this.dataSource = new MatTableDataSource(this.listings);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator; // Add this line
    });
  }

  applyFilter(filterValue: Event) {
    const targetValue = (filterValue.target as HTMLInputElement)?.value
      ?.trim()
      .toLowerCase();
    this.dataSource.filter = targetValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
