import { Injectable } from '@angular/core';
import { Task } from '../task-manager/interface/task';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }

  getTaskList(): Task[] {
    const tasks = this.getItem('taskList');
    return tasks ? tasks : [];
  }

  setTaskList(tasks: Task[]) {
    this.setItem('taskList', tasks);
  }

  getLanguage(): string {
    const language = this.getItem('language');
    return language ? language : 'en';
  }

  setLanguage(language: string): void {
    this.setItem('language', language);
  }
}
