import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsUserTableComponent } from "../settings-user-table/settings-user-table.component";

@Component({
    selector: 'app-settings-user',
    standalone: true,
    templateUrl: './settings-user.component.html',
    styleUrl: './settings-user.component.scss',
    imports: [CommonModule, SettingsUserTableComponent]
})
export class SettingsUserComponent {

}
