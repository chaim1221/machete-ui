import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAssignmentsComponent } from './work-assignments.component';
import { WorkAssignmentsService } from './work-assignments.service';
import { WorkAssignment } from '../../shared/models/work-assignment';
import { Observable } from 'rxjs';
import { LookupsService } from '../../lookups/lookups.service';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { DropdownModule, InputSwitchModule, DataTableModule } from 'primeng/primeng';
import { Lookup } from '../../lookups/models/lookup';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WorkOrderService } from '../work-order/work-order.service';
import { OnlineOrdersService } from '../online-orders.service';
import { WorkOrderServiceSpy, WorkAssignmentsServiceSpy, LookupsServiceSpy, OnlineOrdersServiceSpy, RouterSpy, TransportRulesServiceSpy, TransportProvidersServiceSpy } from "../../shared/testing";
import { Router } from "@angular/router";
import { TransportRulesService } from '../transport-rules.service';
import { TransportProvidersService } from '../transport-providers.service';

describe('WorkAssignmentsComponent', () => {
  let component: WorkAssignmentsComponent;
  let fixture: ComponentFixture<WorkAssignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAssignmentsComponent ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        DropdownModule,
        InputSwitchModule,
        DataTableModule
      ]
    })
    .overrideComponent(WorkAssignmentsComponent, {
      set: {
        providers: [
          { provide: WorkAssignmentsService, useClass: WorkAssignmentsServiceSpy },
          { provide: LookupsService, useClass: LookupsServiceSpy },
          { provide: TransportProvidersService, useClass: TransportProvidersServiceSpy },
          { provide: OnlineOrdersService, useClass: OnlineOrdersServiceSpy },
          { provide: TransportRulesService, useClass: TransportRulesServiceSpy },
          { provide: Router, useClass: RouterSpy }
        ]
      }
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(WorkAssignmentsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load transportRules', () => {
    expect(component.transportRules).toBeTruthy();
  });


});
