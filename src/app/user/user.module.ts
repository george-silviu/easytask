import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';
import { CardComponent } from '../shared/card/card.component';

@NgModule({
  declarations: [UserComponent],
  exports: [UserComponent],
  imports: [CardComponent],
})
export class UserModule {}
