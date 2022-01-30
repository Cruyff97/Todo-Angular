
import { CompletedComponent } from './completed/completed.component';
import { ActiveComponent } from './active/active.component';
import { AllComponent } from './all/all.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {path:'', component: AllComponent
  },
  {
    path:'All', redirectTo:''
  },
  {
    path:'Active', component: ActiveComponent
  },
  {
    path:'Completed', component: CompletedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),  FormsModule,ReactiveFormsModule],
  exports: [RouterModule, FormsModule, ReactiveFormsModule]
})
export class AppRoutingModule { }
