
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,

    children: [
      // {
      //   path: 'home',
      //   loadChildren: () => import('../components/home/home.module').then( m => m.HomeComponentModule)
      // },
      {
        path: 'about',
        loadChildren: () => import('../pages/about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'services',
        loadChildren: () => import('../pages/services/services.module').then( m => m.ServicesPageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('../pages/events/events.module').then( m => m.EventsPageModule)
      },
      {
        path: 'ministries',
        loadChildren: () => import('../pages/ministries/ministries.module').then( m => m.MinistriesPageModule)
      },
      {
        path: 'sermons',
        loadChildren: () => import('../pages/sermons/sermons.module').then( m => m.SermonsPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../pages/contact/contact.module').then( m => m.ContactPageModule)
      },




    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
