import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { SideNavComponent } from './app-core/common/side-nav/side-nav.component';
import { TopNavComponent } from './app-core/common/top-nav/top-nav.component';
import { MaterialModule } from './material/material.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, LoginComponent, SideNavComponent, MaterialModule,TopNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnChanges {
  title = 'inMest-web';
  name = 'Shad';
  profile = {
    id: 1,
    firstName: "Shadrack",
    lastName: "Apollo",
    middleName: "Amekileng",
  }

  constructor(){
    console.log("construct this");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.name, 'onChanges');
    for (const inputChange in changes){
      console.log(changes[inputChange].firstChange, inputChange);
    } 
  }

  ngOnInit(): void{
    console.log('On Init');
  }
}
