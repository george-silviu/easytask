import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewTaskComponent } from './new-task.component';

@NgModule({
  declarations: [NewTaskComponent],
  exports: [NewTaskComponent],

  imports: [FormsModule],
})
export class NewTaskModule {}
