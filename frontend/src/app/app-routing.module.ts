import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { CreatecatComponent } from './createcat/createcat.component';
import { ReadComponent } from './read/read.component';
import { ReadcatComponent } from './readcat/readcat.component';

const routes: Routes = [
  //set route for create and read
  { path: 'create', component: CreateComponent },
  { path: 'create/:pid', component: CreateComponent },
  { path: 'read', component: ReadComponent },
  { path: 'createcat', component: CreatecatComponent },
  { path: 'createcat/:cid', component: CreatecatComponent },
  { path: 'readcat', component: ReadcatComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
