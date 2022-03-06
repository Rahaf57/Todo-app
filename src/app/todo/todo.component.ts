import { Component, OnInit } from '@angular/core';
import Item from '../models/item';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})



export class TodoComponent implements OnInit {

  
  value: string= ""
  todoitem: Item [] = [] ;

  

  constructor() { }

  addToList(){
    if (this.value.length > 0) {
      this.todoitem.push(new Item(this.value , false)); 
      this.value = '';
      this.save();
    }
   

    
}
  
deleteTodo(index : number) : void {


  this.todoitem=this.todoitem.filter((x , i) => i !== index );
  this.save()

}
check(index : number){
this.todoitem[index].checked = true;
this.save()
}

uncheck(index : number){
  this.todoitem[index].checked = false;
  this.save()
  }

  ngOnInit(): void {
    this.load();
  }

  save() {

    const str = JSON.stringify(this.todoitem);
    localStorage.setItem("items" , str);
  }

  load() {
    const str = localStorage.getItem("items");
    if(str) this.todoitem = JSON.parse(str);
  }
}
