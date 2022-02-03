import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-root-routing.module';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [EditComponent],
  imports: [CommonModule, EditRoutingModule],
})
export class EditModule {}
