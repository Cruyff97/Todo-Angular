import { TODO } from './../mock-todo';
import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  faTrash=faTrash
  completed=TODO
  Toggle(id:number): void{
    this.completed.map((v,i)=>{
      if(i==id) {
        v.completed=!v.completed
      }})
    }
    Remove(id:number){
  this.completed.splice(id,1)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
