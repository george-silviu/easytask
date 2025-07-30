import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [AppComponent], // here we add the module components
  bootstrap: [AppComponent], // here is specified the root component that Angular will use to start the application,
  imports: [BrowserModule, HeaderComponent, TasksComponent, UserComponent], // here we add the standalone components
})
export class AppModule {}
