import { Task } from "./task";

export interface TaskDialogData {
  title: string;
  task: Task;
  action: 'add' | 'edit';
}
