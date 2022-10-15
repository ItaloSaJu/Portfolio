import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule} from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { FormComponent } from './home/form/form.component';



const routes: Routes = [



]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
