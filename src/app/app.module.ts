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
import { Globals } from './globals';
import { HomePageVerticalComponent } from './home-page-vertical/home-page-vertical.component';
import { HomePageHorizontalComponent } from './home-page-horizontal/home-page-horizontal.component';
import { HorizontalMenuComponent } from './display/horizontal-menu/horizontal-menu.component';
import { VerticalMenuComponent } from './display/vertical-menu/vertical-menu.component';
import { HeaderComponent } from './display/header/header.component';
import { UiButtonsComponent } from './pages/ui-buttons/ui-buttons.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { StarterComponent } from './pages/starter/starter.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { TeamComponent } from './pages/team/team.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { LockScreenComponent } from './pages/lock-screen/lock-screen.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';
import { UiCardsComponent } from './pages/ui-cards/ui-cards.component';
import { UiCarouselComponent } from './pages/ui-carousel/ui-carousel.component';
import { UiEmbedsComponent } from './pages/ui-embeds/ui-embeds.component';
import { UiGeneralComponent } from './pages/ui-general/ui-general.component';
import { UiGridComponent } from './pages/ui-grid/ui-grid.component';
import { UiMediaObjectsComponent } from './pages/ui-media-objects/ui-media-objects.component';
import { UiModalsComponent } from './pages/ui-modals/ui-modals.component';
import { UiProgressbarsComponent } from './pages/ui-progressbars/ui-progressbars.component';
import { UiTabsComponent } from './pages/ui-tabs/ui-tabs.component';
import { UiTypographyComponent } from './pages/ui-typography/ui-typography.component';
import { UiToastsComponent } from './pages/ui-toasts/ui-toasts.component';
import { UiTooltipsPopoversComponent } from './pages/ui-tooltips-popovers/ui-tooltips-popovers.component';
import { UiScrollspyComponent } from './pages/ui-scrollspy/ui-scrollspy.component';
import { UiSpinnersComponent } from './pages/ui-spinners/ui-spinners.component';
import { UiSweetalertsComponent } from './pages/ui-sweetalerts/ui-sweetalerts.component';
import { FormsElementsComponent } from './pages/forms-elements/forms-elements.component';
import { FormsPluginsComponent } from './pages/forms-plugins/forms-plugins.component';
import { FormsValidationComponent } from './pages/forms-validation/forms-validation.component';
import { FormsMasksComponent } from './pages/forms-masks/forms-masks.component';
import { FormsQuilljsComponent } from './pages/forms-quilljs/forms-quilljs.component';
import { FormsUploadsComponent } from './pages/forms-uploads/forms-uploads.component';
import { TablesBAsicComponent } from './pages/tables-basic/tables-basic.component';
import { TablesDatatablesComponent } from './pages/tables-datatables/tables-datatables.component';
import { ChartsMorrisComponent } from './pages/charts-morris/charts-morris.component';
import { ChartsGoogleComponent } from './pages/charts-google/charts-google.component';
import { ChartsChartjsComponent } from './pages/charts-chartjs/charts-chartjs.component';
import { ChartsSparklineComponent } from './pages/charts-sparkline/charts-sparkline.component';
import { ChartsKnobComponent } from './pages/charts-knob/charts-knob.component';
import { IconsFeatherComponent } from './pages/icons-feather/icons-feather.component';
import { IconsMaterialdesignComponent } from './pages/icons-materialdesign/icons-materialdesign.component';
import { IconsDripiconsComponent } from './pages/icons-dripicons/icons-dripicons.component';
import { IconsFontawesomeComponent } from './pages/icons-fontawesome/icons-fontawesome.component';
import { MapsGoogleComponent } from './pages/maps-google/maps-google.component';
import { MapsVectorComponent } from './pages/maps-vector/maps-vector.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { BlockedPageComponent } from './blocked-page/blocked-page.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HomePageVerticalComponent,
    HomePageHorizontalComponent,
    HorizontalMenuComponent,
    VerticalMenuComponent,
    HeaderComponent,
    UiButtonsComponent,
    InvoiceComponent,
    StarterComponent,
    MaintenanceComponent,
    FaqsComponent,
    PricingComponent,
    TeamComponent,
    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent,
    LockScreenComponent,
    Error404Component,
    Error500Component,
    UiCardsComponent,
    UiCarouselComponent,
    UiEmbedsComponent,
    UiGeneralComponent,
    UiGridComponent,
    UiMediaObjectsComponent,
    UiModalsComponent,
    UiProgressbarsComponent,
    UiTabsComponent,
    UiTypographyComponent,
    UiToastsComponent,
    UiTooltipsPopoversComponent,
    UiScrollspyComponent,
    UiSpinnersComponent,
    UiSweetalertsComponent,
    FormsElementsComponent,
    FormsPluginsComponent,
    FormsValidationComponent,
    FormsMasksComponent,
    FormsQuilljsComponent,
    FormsUploadsComponent,
    TablesBAsicComponent,
    TablesDatatablesComponent,
    ChartsMorrisComponent,
    ChartsGoogleComponent,
    ChartsChartjsComponent,
    ChartsSparklineComponent,
    ChartsKnobComponent,
    IconsFeatherComponent,
    IconsMaterialdesignComponent,
    IconsDripiconsComponent,
    IconsFontawesomeComponent,
    MapsGoogleComponent,
    MapsVectorComponent,
    CalendarComponent,
    BlockedPageComponent
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
    NgApexchartsModule,
    FullCalendarModule
  ],
  providers: [Globals, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})

export class AppModule { }
