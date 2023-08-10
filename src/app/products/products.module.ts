import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UnCommonPageComponent } from './pages/un-common-page/un-common-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
    ProductsComponent,
    BasicsPageComponent,
    NumbersPageComponent,
    UnCommonPageComponent,
  ],
  imports: [CommonModule, PrimeNgModule, ProductsRoutingModule],
})
export class ProductsModule {}
