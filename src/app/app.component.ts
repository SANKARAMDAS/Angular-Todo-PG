import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-List';
  todos =[
    {label:'Bring Water', done:false, priority: 3},
    {label:'Turn on the Light', done:true, priority: 5},
    {label:'Say Hi', done:true, priority: 2},
    {label:'Go to Bed', done:false, priority: 1},
];

addTodo(newTodoLabel){
  var newTodo = {
    label: newTodoLabel,
    priority: 1,
    done: false
  };
  this.todos.push(newTodo);
}

deleteTodo(todo){
  this.todos= this.todos.filter(t => t.label !==todo.label);
}
}
