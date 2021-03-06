import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { FormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { ButtonModule, DropdownModule, DataTableModule, SharedModule, ChartModule,
  DialogModule, TabViewModule, CalendarModule, InputTextareaModule } from 'primeng/primeng';
import {ReportsRoutingModule } from './reports-routing.module';

@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    CommonModule,
    TabViewModule,
    ChartModule,
    DataTableModule,
    SharedModule,
    CalendarModule,
    FormsModule,
    JsonpModule,
    ButtonModule,
    DropdownModule,
    DialogModule,
    InputTextareaModule,
    ReportsRoutingModule
  ],
  bootstrap: []
})
export class ReportsModule {
  constructor() {
    console.log('.ctor: ReportsModule');
  }
}
