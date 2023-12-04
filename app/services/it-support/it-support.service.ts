import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItSupportService {
private itSupportDB = [
  {
    id: "01",
    eitID: "paulo.ouana@meltwater.org",
    createdAt: "20 mins ago",
    state: "Open",
    description: "View",
    category: "Repair",
    action: 4
  },
  {
    id: "02",
    eitID: "paulo.ouana@meltwater.org",
    createdAt: "20 mins ago",
    state: "Progress",
    description: "View",
    category: "Borrow",
    action: 4
  },
  {
    id: "03",
    eitID: "paulo.ouana@meltwater.org",
    createdAt: "20 mins ago",
    state: "Resolved",
    description: "View",
    category: "Repair",
    action: 4
  },
  {
    id: "04",
    eitID: "paulo.ouana@meltwater.org",
    createdAt: "20 mins ago",
    state: "Open",
    description: "View",
    category: "Borrow",
    action: 4
  },
  {
    id: "05",
    eitID: "paulo.ouana@meltwater.org",
    createdAt: "20 mins ago",
    state: "Open",
    description: "View",
    category: "Repair",
    action: 4
  },
  {
    id: "06",
    eitID: "paulo.ouana@meltwater.org",
    createdAt: "20 mins ago",
    state: "Open",
    description: "View",
    category: "Borrow",
    action: 4
  },
  {
    id: "07",
    eitID: "paulo.ouana@meltwater.org",
    createdAt: "20 mins ago",
    state: "Open",
    description: "View",
    category: "Repair",
    action: 4
  },
  {
    id: "08",
    eitID: "paulo.ouana@meltwater.org",
    createdAt: "20 mins ago",
    state: "Open",
    description: "View",
    category: "Borrow",
    action: 4
  },

];
  constructor() { }

  getIncidents() {
    return of(this.itSupportDB);
  }

  getIncidentsById(id: string) {
    const myIncidents = this.itSupportDB.find(el => el.id === id);
    return of(myIncidents);
  }
}