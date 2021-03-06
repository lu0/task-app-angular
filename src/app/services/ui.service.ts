import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private uiShowAddForm: boolean = false;
  private subject = new Subject<any>();

  constructor(
    private router: Router
  ) { }

  toggleAddTask(): void {
    this.uiShowAddForm = !this.uiShowAddForm;
    this.subject.next(this.uiShowAddForm)
  }

  onToggleAddTask(): Observable<any> {
    return this.subject.asObservable(); 
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}
