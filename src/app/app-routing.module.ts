import { AssertNotNull } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecordTemplateComponent } from './add-record-template/add-record-template.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { BuildingSearchComponent } from './building-search/building-search.component';
import { DataResolver } from './data.resolver';
import { FacilityHomeComponent } from './facility-home/facility-home.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: FacilityHomeComponent,
    resolve: { data: DataResolver }
  },
  {
    path: 'facility',
    component: BuildingSearchComponent,
    resolve: { data: DataResolver }
  },
  {
    path: 'facility/:id',
    component: BuildingSearchComponent,
    resolve: { data: DataResolver }
  },
  {
    path: 'facility/:id/:id2',
    component: BuildingSearchComponent,
    resolve: { data: DataResolver }
  },  
  {
    path: 'admin',
    component: AdminHomeComponent
  },
  {
    path: 'add-record',
    component: AddRecordTemplateComponent
  },
  {
    path: 'home',
    component: FacilityHomeComponent
  },  
  {
    path: 'assets/:id',
    component: AssetListComponent,
    resolve: { data: DataResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
