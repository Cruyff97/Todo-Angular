import { Component, OnInit, OnChanges , Input, EventEmitter} from '@angular/core';
import { Todos } from '../todos.model';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { TODO } from '../mock-todo';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  faTrash=faTrash
all=TODO
constructor() {  }

ngOnInit(): void {

}

Toggle(id:number): void{
  this.all.map((v,i)=>{
    if(i==id) {
      v.completed=!v.completed
    }})
  }
  Remove(id:number){
this.all.splice(id,1)
}
    
ngOnChanges(){
 

}
}
