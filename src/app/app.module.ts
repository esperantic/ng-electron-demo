import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule, MatDialogModule, MatFormFieldModule, MatFormFieldControl, MatInputModule,
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigatorComponent } from './navigator/navigator.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { TableComponent } from './table/table.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DexieService } from './common/services/dexie/dexie.service';
import { TodoService } from './common/services/todo/todo.service';
import {TodoEditorComponent} from './modals/todo-editor.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainPageComponent,
    NavigatorComponent,
    TableComponent,
    TodoEditorComponent
  ],
  entryComponents: [TodoEditorComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [
    DexieService,
    TodoService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
