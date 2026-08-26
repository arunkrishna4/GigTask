import { supabase } from "../lib/supabase";
import { CreateTaskInput, Task, UpdateTaskInput } from "../types/task";

//retriveing the tasks based on the userid
export async function getTasks(): Promise<Task[]> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("You must be logged in to view tasks.");
  }

  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("user_id", user.id)
    .order("due_date", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}

// Retrieving a single task by ID.
export async function getTaskById(id: string): Promise<Task> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("You must be logged in to view this task.");
  }
  console.time("fetch-task");

  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("id", id)
    .eq("user_id", user.id)
    .single();
  console.timeEnd("fetch-task");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

//Creating a task based on authenticated user.
export async function createTask(task: CreateTaskInput): Promise<Task> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("You must be logged in to create a task.");
  }

  const { data, error } = await supabase
    .from("tasks")
    .insert({
      user_id: user.id,
      title: task.title,
      description: task.description ?? null,
      due_date: task.due_date,
      priority: task.priority,
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

//Updating a task based on ID.
export async function updateTask(
  id: string,
  updates: UpdateTaskInput,
): Promise<Task> {
  const { data, error } = await supabase
    .from("tasks")
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

//Deleting a task based on ID.
export async function deleteTask(id: string): Promise<void> {
  const { error } = await supabase.from("tasks").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}

//changing the Completed boolean.
export async function toggleTask(
  id: string,
  completed: boolean,
): Promise<Task> {
  return updateTask(id, { completed });
}
