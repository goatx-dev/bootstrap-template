import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxTablePaginationModule } from 'ngx-table-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgApexchartsModule } from "ng-apexcharts";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { DisplayHeaderComponent } from './display-header/display-header.component';
import { DisplayFooterComponent } from './display-footer/display-footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BuildingSearchComponent } from './building-search/building-search.component';
import { VerticalMenuComponent } from './vertical-menu/vertical-menu.component';
import { FacilityHomeComponent } from './facility-home/facility-home.component';
import { AddRecordTemplateComponent } from './add-record-template/add-record-template.component';
import { ModalDialogTemplateComponent } from './modal-dialog-template/modal-dialog-template.component';
import { Globals } from './globals';

@NgModule({
  declarations: [
    AppComponent,
    DisplayHeaderComponent,
    DisplayFooterComponent,
    HomePageComponent,
    AssetListComponent,
    AdminHomeComponent,
    BuildingSearchComponent,
    VerticalMenuComponent,
    FacilityHomeComponent,
    AddRecordTemplateComponent,
    ModalDialogTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxTablePaginationModule,
    Ng2SearchPipeModule,
    NgbModule,
    Ng2GoogleChartsModule,
    NgApexchartsModule
  ],
  providers: [Globals, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
