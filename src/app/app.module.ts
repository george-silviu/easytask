import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [
    // here we can register non-standalone components
    AppComponent,
    HeaderComponent,
    UserComponent,
  ],
  bootstrap: [AppComponent], // here is specified the root component that Angular will use to start the application,
  imports: [BrowserModule, SharedModule, TasksModule], // here we can register standalone components AND modules
})
export class AppModule {}
