// types.ts
export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  isCompleted: boolean;
}

export type TaskList = Task[];

export interface TaskItemProps {
  tasks: TaskList;
  onToggleCompletion: (taskId: number) => void;
}

export interface TaskListScreenProps {
  tasks: TaskList;
  onToggleCompletion: (taskId: number) => void;
}
