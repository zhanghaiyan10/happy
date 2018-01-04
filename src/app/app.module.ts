import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule  } from '@angular/router';
import { appComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import {appRoutes} from './app.routes';
import { OrderModel } from './order-model';
import { OdataService } from './odata.services';

@NgModule({
  declarations: [
    appComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [OdataService,{ provide: APP_BASE_HREF, useValue: '/' },
  { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [appComponent]
})
export class AppModule { }
