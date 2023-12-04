import { Routes } from '@angular/router';
import { UsersComponent } from './main-features/users/users.component';
import { UserDetailComponent } from './main-features/user-detail/user-detail.component';
import { NewUserComponent } from './main-features/new-user/new-user.component';
import { AttendanceComponent } from './main-features/attendance/attendance.component';
import { LeaveComponent } from './main-features/leave/leave.component';
import { LeaveDetailComponent } from './main-features/leave-detail/leave-detail.component';
import { AnalyticsComponent } from './main-features/analytics/analytics.component';
import { SettingsComponent } from './main-features/settings/settings.component';
import { HomeComponent } from './main-features/home/home.component';
import { ItSupportComponent } from './main-features/it-support/it-support.component';
import { AttendanceRegisterComponent } from './main-features/attendance-register/attendance-register.component';
import { AttendanceInnerComponent } from './main-features/attendance-inner/attendance-inner.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'new-user', component: NewUserComponent},
    {path:'attendance',component:AttendanceComponent},
    {path: 'leave', component: LeaveComponent},
    {path: 'leave/:id/:name', component: LeaveDetailComponent},
    {path: 'attendance-register', component: AttendanceRegisterComponent},
    {path:'attendance-inner/:id',component:AttendanceInnerComponent},
    {path: 'user-detail', component: UserDetailComponent},
    {path : 'analytics', component: AnalyticsComponent},
    {
        path: 'settings',
        component: SettingsComponent,
      },
  {path: 'it-support', component: ItSupportComponent}

];
