import { Component , Output} from '@angular/core';
import { Todos } from './todos.model';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>#todo</h1>
    <app-tab></app-tab>
    <app-search></app-search>
    <router-outlet ></router-outlet>
  </div>
  `,
 styles: ['div { display: flex; flex-direction: column; align-items: center ; margin: 3px}']
})
export class AppComponent {
 
  title = 'TodoApp';
  }

