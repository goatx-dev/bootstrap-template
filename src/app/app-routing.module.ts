import { AssertNotNull } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetListComponent } from './asset-list/asset-list.component';
import { DataResolver } from './data.resolver';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    resolve: { data: DataResolver }
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
