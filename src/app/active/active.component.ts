import { TODO } from './../mock-todo';
import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  faTrash=faTrash
active=TODO
Toggle(id:number): void{
  this.active.map((v,i)=>{
    if(i==id) {
      v.completed=!v.completed
    }})
  }
  constructor() { }

  ngOnInit(): void {
  }

}
