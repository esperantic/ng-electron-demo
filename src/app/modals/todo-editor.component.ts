import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';

@Component({
    selector: 'app-todo-editor',
    templateUrl: 'todo-editor.component.html',
    styleUrls: ['./todo-editor.component.css']
})
export class TodoEditorComponent {

    constructor(public dialogRef: MatDialogRef<TodoEditorComponent>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    onCancelClick(): void {
        this.dialogRef.close();
    }
}