import { NgModule } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';


import { MatMenuModule } from '@angular/material/menu';

const AllMaterialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatListModule,
  MatTabsModule,
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatPaginatorModule,
  MatDialogModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatMenuModule,
  MatGridListModule
];

@NgModule({
  imports: [AllMaterialModules],
  exports: [AllMaterialModules],
})
export class MaterialModule {}
