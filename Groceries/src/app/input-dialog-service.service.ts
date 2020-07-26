import { Injectable } from '@angular/core';
import { GroceriesServiceService } from './groceries-service.service'
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InputDialogServiceService {

  constructor(public alertController: AlertController, public dataService: GroceriesServiceService) { }
  // Show Prompt function
  async showPrompt(item?, index?){
    const alert = await this.alertController.create({
      header: item ? 'Edit Item' : 'Add Item',
      message: item? 'Please edit Item name and quantity' : 'Please enter Item name and quantity',
      inputs: [
        {
          name: 'itemName',
          type: 'text',
          placeholder: 'Grocery Item Name',
          value: item ? item.itemName : null
        },
        {
          name: 'itemCount',
          type: 'text',
          placeholder: 'Grocery Item Count',
          value: item ? item.itemCount : null
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: index !== undefined ? 'Save' : 'Add',
          handler: (item) => {
            console.log('Confirm Add', item);
            if(index !== undefined){
              this.dataService.editItem(item, index);
            }else{
              this.dataService.addItem(item);
            }
          }
        }
      ]
    });
    await alert.present();
  }

}
