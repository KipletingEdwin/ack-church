
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MainPageRoutingModule } from './main-routing.module';
import { MainPage } from './main.page';
import { HeaderComponentModule } from "../components/header/header.module";
import { HomeComponentModule } from '../components/home/home.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    HeaderComponentModule,
    HomeComponentModule,
],
  declarations: [MainPage]
})
export class MainPageModule {}
