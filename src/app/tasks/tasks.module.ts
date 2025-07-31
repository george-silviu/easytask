import { NgModule } from '@angular/core';

import { TasksComponent } from './tasks.component';
import { TaskModule } from './task/task.module';
import { NewTaskModule } from './new-task/new-task.module';

@NgModule({
  declarations: [TasksComponent],
  exports: [TasksComponent],
  imports: [TaskModule, NewTaskModule],
})
export class TasksModule {}
