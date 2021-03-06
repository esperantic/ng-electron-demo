import { Injectable } from '@angular/core';
import Dexie from 'dexie';


@Injectable({
  providedIn: 'root'
})
export class DexieService extends Dexie{

  constructor() {
    super('ElectronDb');
    this.version(1).stores({
        todos: '++id, title, done, created_at, updated_at',
    });
  }
}
