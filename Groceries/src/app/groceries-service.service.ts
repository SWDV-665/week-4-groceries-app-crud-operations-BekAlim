import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {

  groceryItems = [];

  constructor() { }

  getItems(){
    return this.groceryItems;
  }

  removeItem(index){
    this.groceryItems.splice(index, 1);
  }

  addItem(item){
    this.groceryItems.push(item);
  }

  editItem(item, index){
    this.groceryItems[index] = item;
  }

}
