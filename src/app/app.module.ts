import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// storage
import {IonicStorageModule} from '@ionic/storage';
// flashlight plugin
import { Flashlight } from '@ionic-native/flashlight/ngx';
// importing the http module / for api
import {HttpClientModule} from '@angular/common/http';
// importing forms module to use ngModel / also allow two-way data binding
import {FormsModule} from '@angular/forms';
// importing Popover 
import {PopovercomponentPageModule} from './popovercomponent/popovercomponent.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    HttpClientModule, IonicStorageModule.forRoot(), FormsModule, 
    PopovercomponentPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    Flashlight,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
