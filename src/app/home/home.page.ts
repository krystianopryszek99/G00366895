import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
// storage module 
import { Storage } from '@ionic/storage';
//import popover - in order to allow popover to work
import { PopoverController } from '@ionic/angular';
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //storage
  name: string;

  constructor(private storage: Storage, private flashlight: Flashlight, private popover: PopoverController) { }

  //method for plugin "Flashlight"
  flashOn() {
    this.flashlight.toggle();
  }

  save() {
    console.log(this.name);
    this.storage.set("name", this.name);
  }

  //this method creates the PopOver that displays on the screen
  CreatePopOver() {
    this.popover.create({ component: PopovercomponentPage, showBackdrop: false }).then((popoverElement) => {
      popoverElement.present();
    })
  }

}
