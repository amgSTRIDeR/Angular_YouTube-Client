import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import HeaderComponent from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export default class CoreModule { }
