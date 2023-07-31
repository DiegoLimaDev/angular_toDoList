import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiListComponent } from './page/api-list/api-list.component';
import { TodoListComponent } from './page/todo-list/todo-list.component';
import { NotFoundComponent } from './page/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'api', component: ApiListComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
