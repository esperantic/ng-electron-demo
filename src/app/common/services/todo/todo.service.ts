import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { DexieService } from '../dexie/dexie.service';
import { ITodo } from './todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  table: Dexie.Table<ITodo, number>;

  constructor(private dexieService: DexieService) {
    this.table = this.dexieService.table('todos');
  }

  public getAll() {
    return this.table.toArray();
  }

  public add(data) {
    return this.table.add(data);
  }

  public update(id, data) {
    return this.table.update(id, data);
  }

  public remove(id) {
    return this.table.delete(id);
  }
}
