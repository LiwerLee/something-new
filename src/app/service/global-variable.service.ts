import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService {
  private currentPageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  currentPage$ = this.currentPageSubject.asObservable();

  constructor() { }

  setCurrentPage(page: string): void {
    this.currentPageSubject.next(page);
  }



}
