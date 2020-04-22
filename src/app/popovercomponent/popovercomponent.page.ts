import { Component, OnInit } from '@angular/core';
// storage module 
import {Storage} from '@ionic/storage';
// popover
import {PopoverController} from '@ionic/angular';
//import {PopovercomponentPage} from 'popovercomponent/popovercomponent.page';
@Component({
  selector: 'app-popovercomponent',
  templateUrl: './popovercomponent.page.html',
  styleUrls: ['./popovercomponent.page.scss'],
})
export class PopovercomponentPage implements OnInit {

    //storage
    //name:string;
    myRate:string;

  constructor(private popover:PopoverController, private storage:Storage) { }

  ionViewWillEnter(){
    
  }

  ngOnInit() {
    this.storage.get("rate").then(
      (data)=>{
        this.myRate = data;
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    );
  }

  // ClosePopover(){
  //   console.log(this.name);
  //   this.storage.set("name", this.name);
  //   this.popover.dismiss();
  // }

  onSave(){
    console.log(this.myRate);
    this.storage.set("rate", this.myRate);
  }

}
