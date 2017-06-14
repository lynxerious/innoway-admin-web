import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { AddComponent } from './add/add.component';

import { TabsModule } from 'ng2-bootstrap/tabs';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    TabsModule
  ],
  declarations: [ProductsComponent, AddComponent, DetailComponent]
})
export class ProductsModule { }
