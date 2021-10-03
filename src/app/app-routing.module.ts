import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataResolver, MenuResolver } from './data.resolver';
import { HomePageHorizontalComponent } from './home-page-horizontal/home-page-horizontal.component';
import { HomePageVerticalComponent } from './home-page-vertical/home-page-vertical.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ChartsChartjsComponent } from './pages/charts-chartjs/charts-chartjs.component';
import { ChartsGoogleComponent } from './pages/charts-google/charts-google.component';
import { ChartsKnobComponent } from './pages/charts-knob/charts-knob.component';
import { ChartsMorrisComponent } from './pages/charts-morris/charts-morris.component';
import { ChartsSparklineComponent } from './pages/charts-sparkline/charts-sparkline.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { FormsElementsComponent } from './pages/forms-elements/forms-elements.component';
import { FormsMasksComponent } from './pages/forms-masks/forms-masks.component';
import { FormsPluginsComponent } from './pages/forms-plugins/forms-plugins.component';
import { FormsQuilljsComponent } from './pages/forms-quilljs/forms-quilljs.component';
import { FormsUploadsComponent } from './pages/forms-uploads/forms-uploads.component';
import { FormsValidationComponent } from './pages/forms-validation/forms-validation.component';
import { IconsDripiconsComponent } from './pages/icons-dripicons/icons-dripicons.component';
import { IconsFeatherComponent } from './pages/icons-feather/icons-feather.component';
import { IconsFontawesomeComponent } from './pages/icons-fontawesome/icons-fontawesome.component';
import { IconsMaterialdesignComponent } from './pages/icons-materialdesign/icons-materialdesign.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { LockScreenComponent } from './pages/lock-screen/lock-screen.component';
import { LoginComponent } from './pages/login/login.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { MapsGoogleComponent } from './pages/maps-google/maps-google.component';
import { MapsVectorComponent } from './pages/maps-vector/maps-vector.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { StarterComponent } from './pages/starter/starter.component';
import { TablesBAsicComponent } from './pages/tables-basic/tables-basic.component';
import { TablesDatatablesComponent } from './pages/tables-datatables/tables-datatables.component';
import { TeamComponent } from './pages/team/team.component';
import { UiButtonsComponent } from './pages/ui-buttons/ui-buttons.component';
import { UiCardsComponent } from './pages/ui-cards/ui-cards.component';
import { UiCarouselComponent } from './pages/ui-carousel/ui-carousel.component';
import { UiEmbedsComponent } from './pages/ui-embeds/ui-embeds.component';
import { UiGeneralComponent } from './pages/ui-general/ui-general.component';
import { UiGridComponent } from './pages/ui-grid/ui-grid.component';
import { UiMediaObjectsComponent } from './pages/ui-media-objects/ui-media-objects.component';
import { UiModalsComponent } from './pages/ui-modals/ui-modals.component';
import { UiProgressbarsComponent } from './pages/ui-progressbars/ui-progressbars.component';
import { UiScrollspyComponent } from './pages/ui-scrollspy/ui-scrollspy.component';
import { UiSpinnersComponent } from './pages/ui-spinners/ui-spinners.component';
import { UiSweetalertsComponent } from './pages/ui-sweetalerts/ui-sweetalerts.component';
import { UiTabsComponent } from './pages/ui-tabs/ui-tabs.component';
import { UiToastsComponent } from './pages/ui-toasts/ui-toasts.component';
import { UiTooltipsPopoversComponent } from './pages/ui-tooltips-popovers/ui-tooltips-popovers.component';
import { UiTypographyComponent } from './pages/ui-typography/ui-typography.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageVerticalComponent,
    resolve: { menudata: MenuResolver, data: DataResolver }
  },
  {
    path: 'v',
    component: HomePageVerticalComponent,
    resolve: { menudata: MenuResolver, data: DataResolver }
  },
  {
    path: 'h',
    component: HomePageHorizontalComponent,
    resolve: { menudata: MenuResolver, data: DataResolver }
  },
  {
    path: 'charts-chartjs',
    component: ChartsChartjsComponent,
    resolve: { menudata: MenuResolver }
  }, 
  {
    path: 'charts-google',
    component: ChartsGoogleComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'charts-knob',
    component: ChartsKnobComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'charts-morris',
    component: ChartsMorrisComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'charts-sparkline',
    component: ChartsSparklineComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: '404',
    component: Error404Component,
    resolve: { menudata: MenuResolver }
  },  
  {
    path: '500',
    component: Error500Component,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'faqs',
    component: FaqsComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'forms-elements',
    component: FormsElementsComponent,
    resolve: { menudata: MenuResolver, data: DataResolver }
  },
  {
    path: 'forms-masks',
    component: FormsMasksComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'forms-plugins',
    component: FormsPluginsComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'forms-quilljs',
    component: FormsQuilljsComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'forms-uploads',
    component: FormsUploadsComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'forms-validation',
    component: FormsValidationComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'icons-dripicons',
    component: IconsDripiconsComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'icons-feather',
    component: IconsFeatherComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'icons-fontawesome',
    component: IconsFontawesomeComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'icons-materialdesign',
    component: IconsMaterialdesignComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'invoice',
    component: InvoiceComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'lock-screen',
    component: LockScreenComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'login',
    component: LoginComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'maps-google',
    component: MapsGoogleComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'maps-vector',
    component: MapsVectorComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'pricing',
    component: PricingComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'recover-password',
    component: RecoverPasswordComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'register',
    component: RegisterComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'starter',
    component: StarterComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'tables-basic',
    component: TablesBAsicComponent,
    resolve: { menudata: MenuResolver, data: DataResolver }
  },
  {
    path: 'tables-datatables',
    component: TablesDatatablesComponent,
    resolve: { menudata: MenuResolver }
  },  
  {
    path: 'team',
    component: TeamComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'ui-buttons',
    component: UiButtonsComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'ui-cards',
    component: UiCardsComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'ui-carousel',
    component: UiCarouselComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'ui-embeds',
    component: UiEmbedsComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'ui-general',
    component: UiGeneralComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'ui-grid',
    component: UiGridComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'ui-media-objects',
    component: UiMediaObjectsComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'ui-modals',
    component: UiModalsComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'ui-progressbars',
    component: UiProgressbarsComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'ui-scrollspy',
    component: UiScrollspyComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'ui-spinners',
    component: UiSpinnersComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'ui-sweetalerts',
    component: UiSweetalertsComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'ui-tabs',
    component: UiTabsComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'ui-toasts',
    component: UiToastsComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'ui-tooltips-popovers',
    component: UiTooltipsPopoversComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'ui-typography',
    component: UiTypographyComponent,
    resolve: { menudata: MenuResolver }
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    resolve: { menudata: MenuResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
