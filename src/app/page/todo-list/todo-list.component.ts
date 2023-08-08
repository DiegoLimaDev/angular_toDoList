import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodo = '';

  saveTodo() {
    if (this.newTodo) {
      const todo = new Todo(this.newTodo, false);
      this.todos.push(todo);
      this.newTodo = '';
    } else {
      alert('Please enter a todo task');
    }
  }

  doneTodo(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((e, i) => i !== id);
  }
}
