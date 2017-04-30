import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    todos: TodoItem[] = [];
    // [
    //   	{
    //   		title: 'PADNUG Angular Presentation',
    //   		description: 'Try to show up on time',
    //   		completed: false
    //   	},
    //   	{
    //   		title: 'Do Angular Presentation',
    //   		description: 'Should go good, let\'s hope I don\'t fail...',
    //   		completed: false
    //   	},
    //   		title: 'Go Home Happy',
    //   		description: 'Job done. Ready to go back',
    //   		completed: true
    //   	},
    //   	{
    //   		title: 'Drive back to Hood River',
    //   		description: 'Try to not fall asleep on the way back.',
    //   		completed: false
    //   	}
    // ];
    activeTodo: TodoItem = new TodoItem();
    baseUrl = 'http://localhost:5000/api/';
    message: string;

    constructor(private http: Http) {
    }

    ngOnInit() {
        this.loadTodos();
    }

    loadTodos() {
        this.http.get(this.baseUrl + 'todos')
            .subscribe((response) => {
                this.todos = response.json();

            }, (response) => {
                this.showMessage('Todos failed to load.', 5000);
            });
    }

    toggleCompleted(todo) {
        todo.completed = !todo.completed;
        this.http.put(this.baseUrl + 'todo', todo)
            .subscribe((response) => {
                this.showMessage('Updated...', 4000);
            }, (response) => {
                todo.completed = !todo.completed;
                this.showMessage('couldn\'t update todo item.', 5000);
            });

    }

    removeTodo(todo) {
        this.http.delete(this.baseUrl + 'todo/' +  todo.title)
            .subscribe((response) => {
                this.todos = this.todos.filter((td, i) => td !== todo);
            }, () => {
                this.showMessage('delete failed.', 5000);
            });

    }

    editTodo(todo) {
        this.activeTodo = todo;
    }

    saveTodo(todo, form = null) {
        this.http.post(this.baseUrl + "todo", todo)
            .subscribe( (response) => {
               this.showMessage("saved", 5000);

                let match: TodoItem = this.todos.find((td) => td === todo);

                if (!match)
                    this.todos.unshift(todo);

                this.activeTodo = new TodoItem();
                if (form)
                    form.reset();
            }, () => {
                this.showMessage("save operation failed", 5000);
            });
    }

    showMessage(msg, timeout = 0) {
        this.message = msg;
        if (timeout) {
            setTimeout(() => {
                this.message = null;
            }, timeout);
        }
    }
}

export class TodoItem {
    title: string;
    description: string;
    completed: boolean;
    entered: Date = new Date();
}
