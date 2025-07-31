import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';

import { TaskComponent } from './task.component';
import { CardComponent } from '../../shared/card/card.component';

@NgModule({
  declarations: [TaskComponent],
  exports: [TaskComponent],
  imports: [CardComponent, DatePipe],
})
export class TaskModule {}
