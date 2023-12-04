import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsUserComponent } from "../settings-user/settings-user.component";
import {MatTabsModule} from '@angular/material/tabs'

@Component({
    selector: 'app-settings',
    standalone: true,
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss',
    imports: [CommonModule, SettingsUserComponent, MatTabsModule]
})
export class SettingsComponent {

}
