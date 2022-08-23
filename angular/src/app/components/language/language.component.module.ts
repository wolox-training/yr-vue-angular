import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageComponent } from './language.component';

@NgModule({
  declarations: [LanguageComponent],
  imports: [CommonModule, FormsModule],
  exports: [LanguageComponent],
})
export class LanguageModule {}
