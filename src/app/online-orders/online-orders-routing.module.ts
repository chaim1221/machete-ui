import { WorkAssignment } from './work-assignments/models/work-assignment';
import { OnlineOrdersService } from './online-orders.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineOrdersComponent } from './online-orders.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { IntroConfirmComponent } from './intro-confirm/intro-confirm.component';
import { WorkOrderComponent } from './work-order/work-order.component';
import { WorkAssignmentsComponent } from './work-assignments/work-assignments.component';
import { FinalConfirmComponent } from './final-confirm/final-confirm.component';
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { SequenceGuardService } from './sequence-guard.service';
import { WorkOrderService } from './work-order/work-order.service';
import { EmployersService } from '../employers/employers.service';
import { WorkAssignmentsService } from './work-assignments/work-assignments.service';

const onlineOrderRoutes: Routes = [
  {
    path: 'online-orders',
    component: OnlineOrdersComponent,
    canLoad: [AuthGuardService],
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'introduction',
        component: IntroductionComponent,
        canLoad: [AuthGuardService]
      },
      {
        path: 'intro-confirm',
        component: IntroConfirmComponent,
        canLoad: [AuthGuardService]
      },
      {
        path: 'work-order',
        component: WorkOrderComponent,
        canLoad: [AuthGuardService],
        canActivate: [SequenceGuardService]
      },
      {
        path: 'work-assignments',
        component: WorkAssignmentsComponent,
        canLoad: [AuthGuardService],
        canActivate: [SequenceGuardService]
      },
      {
        path: 'final-confirm',
        component: FinalConfirmComponent,
        canLoad: [AuthGuardService],
        canActivate: [SequenceGuardService]
      }
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(onlineOrderRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    [
      SequenceGuardService,
      OnlineOrdersComponent,
      WorkOrderService,
      EmployersService,
      WorkAssignmentsService
    ]
  ]
})
export class OnlineOrdersRoutingModule { }
