import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TaskComponent } from './tasks/task/task.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    // here we can register non-standalone components
    AppComponent,
    HeaderComponent,
    TasksComponent,
    UserComponent,
    TaskComponent,
    NewTaskComponent,
  ],
  bootstrap: [AppComponent], // here is specified the root component that Angular will use to start the application,
  imports: [BrowserModule, FormsModule, SharedModule], // here we can register standalone components AND modules
})
export class AppModule {}
