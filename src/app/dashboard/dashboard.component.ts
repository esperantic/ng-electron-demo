import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { TodoService } from '../common/services/todo/todo.service';
import { ITodo } from '../common/services/todo/todo.interface';
import { MatDialog } from '@angular/material';
import { TodoEditorComponent } from '../modals/todo-editor.component';
import { filter } from "rxjs/internal/operators";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public todos: ITodo[];
    public cards;

    constructor(private breakpointObserver: BreakpointObserver,
                private dialog: MatDialog,
                private todoService: TodoService) { }

    public ngOnInit() {
        this.todoService.getAll().then((todos) => {
            // TODO: I don't like this.
            // this.cards will use breakpointObsrvr to make different size for cards, but not now.
            this.todos = todos;
            this.cards = this.todos.map((todo) => {
                return {...todo, ...{cols: 1, rows: 1}};
            });
        });
    }

    public onClickDone(id: number) {
        console.log('onclickDone', id);
    }

    public onClickRemove(id: number) {
        console.log('onclickRemove', id);
    }

    public openTodoEditor() {
        const dialogRef = this.dialog.open(TodoEditorComponent, {
            width: '350px',
            data: {
                todo: {
                    title: '',
                    done: false
                }
            }
        });

        dialogRef.afterClosed()
            .pipe(filter(result => result !== undefined))
            .subscribe(result => {
                this.todoService.add(result)
                    .then((id) => {
                        // TODO: I don't like this, to refactor
                        this.todos = [...this.todos, {...result, ...{id}}];
                        this.cards = this.todos.map((todo) => {
                            return {...todo, ...{cols: 1, rows: 1}};
                        });
                    });
            });
    }
}
