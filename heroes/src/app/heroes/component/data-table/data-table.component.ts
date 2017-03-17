import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'data-table',
    templateUrl: './data-table.component.html'
})
export class TableComponent {
    
    @Input() list: any = [];
    
    @Input() fieldsToDisplay: any = [];

    @Output() edit = new EventEmitter();

    @Output() delete = new EventEmitter();

    constructor() { }

    onEdit(item) {
        this.edit.emit(item);
    }

    onDelete(item) {
        this.delete.emit(item);
    }
}