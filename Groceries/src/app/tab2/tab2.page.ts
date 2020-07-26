import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogServiceService } from '../input-dialog-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  // Variables
  titleOfPage = "Grocery List"
  // Constructor 
  constructor(
    public toastController: ToastController, 
    public alertController: AlertController, 
    public dataService: GroceriesServiceService,
    public inputDialogService: InputDialogServiceService
    ) {}
  
  loadGroceryItems(){
    return this.dataService.getItems();
  }
  // Remove grocery function
  async removeGroceryItem(groceryItem, index){
    const toast = await this.toastController.create({
      message: `You have removed: ${groceryItem.itemName}`,
      duration: 2000
    });
    toast.present();
    this.dataService.removeItem(index);
  }
  // Edit grocery function
  async editGroceryItem(groceryItem, index){
    const toast = await this.toastController.create({
      message: `You are editing: ${groceryItem.itemName}`,
      duration: 2000
    });
    toast.present();
    this.inputDialogService.showPrompt(groceryItem, index);
  }
  // Add grocery function
  async addGroceryItem(){
    this.inputDialogService.showPrompt();
  }

  // End Class
}
