import { Component, Input, OnInit } from '@angular/core';
import { TODO } from '../mock-todo';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
todos=TODO
  constructor() { }

  ngOnInit(): void {
  }
OnInsert(){
 let input= <HTMLInputElement>document.getElementById('input');

 this.todos.push({content:input!.value, completed:false})
  
}
}
