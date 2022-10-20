import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ClubListComponent } from '../../table-list/club-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';

export const AdminLayoutRoutes: Routes = [
    { path: '',     component: ClubListComponent },
];
