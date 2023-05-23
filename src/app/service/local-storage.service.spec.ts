import { TestBed } from '@angular/core/testing';
import { Task } from '../task-manager/interface/task';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get item from localStorage', () => {
    const key = 'testKey';
    const value = 'testValue';

    service.setItem(key, value);

    const retrievedValue = service.getItem(key);
    expect(retrievedValue).toBe(value);
  });

  it('should return null if item is not found in localStorage', () => {
    const key = 'testKey';

    const retrievedValue = service.getItem(key);
    expect(retrievedValue).toBeNull();
  });

  it('should remove item from localStorage', () => {
    const key = 'testKey';
    const value = 'testValue';

    service.setItem(key, value);
    service.removeItem(key);

    const retrievedValue = service.getItem(key);
    expect(retrievedValue).toBeNull();
  });

  it('should clear localStorage', () => {
    const key1 = 'testKey1';
    const key2 = 'testKey2';
    const value1 = 'testValue1';
    const value2 = 'testValue2';

    service.setItem(key1, value1);
    service.setItem(key2, value2);
    service.clear();

    const retrievedValue1 = service.getItem(key1);
    const retrievedValue2 = service.getItem(key2);

    expect(retrievedValue1).toBeNull();
    expect(retrievedValue2).toBeNull();
  });

  it('should retrieve task list from localStorage', () => {
    const key = 'taskList';
    const tasks: Task[] = [
      { title: 'Task 1', description: 'Description 1' },
      { title: 'Task 2', description: 'Description 2' },
    ];

    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(tasks));

    const retrievedTasks = service.getTaskList();

    expect(localStorage.getItem).toHaveBeenCalledWith(key);
    expect(retrievedTasks).toEqual(tasks);
  });

  it('should return an empty array if task list is not found in localStorage', () => {
    const key = 'taskList';

    spyOn(localStorage, 'getItem').and.returnValue(null);

    const retrievedTasks = service.getTaskList();

    expect(localStorage.getItem).toHaveBeenCalledWith(key);
    expect(retrievedTasks).toEqual([]);
  });

  it('should store task list in localStorage', () => {
    const key = 'taskList';
    const tasks: Task[] = [
      { title: 'Task 1', description: 'Description 1' },
      { title: 'Task 2', description: 'Description 2' },
    ];

    spyOn(localStorage, 'setItem');

    service.setTaskList(tasks);

    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(tasks));
  });
});
