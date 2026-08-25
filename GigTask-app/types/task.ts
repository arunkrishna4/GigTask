//priority:
export type TaskPriority = "low" | "medium" | "high";

//
export interface Task {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  due_date: string;
  priority: TaskPriority;
  completed: boolean;
  created_at: string;
  updated_at: string;
}

//type for create task
export interface CreateTaskInput {
  title: string;
  description?: string;
  due_date: string;
  priority: TaskPriority;
}

//type for update task
export interface UpdateTaskInput {
  title?: string;
  description?: string;
  due_date?: string;
  priority?: TaskPriority;
  completed?: boolean;
}
