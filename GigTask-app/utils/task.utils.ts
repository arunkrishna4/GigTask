import { TaskPriority } from "../types/task";

const MONTHS_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function formatDueDate(date: string): string {
  const taskDate = new Date(date);

  return `${taskDate.getDate()} ${MONTHS_SHORT[taskDate.getMonth()]} ${taskDate.getFullYear()}`;
}

export function getPriorityLabel(priority: TaskPriority): string {
  return priority.charAt(0).toUpperCase() + priority.slice(1);
}

const WEEKDAYS_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function formatDateWithWeekday(date: Date, includeYear = false): string {
  const base = `${WEEKDAYS_SHORT[date.getDay()]}, ${date.getDate()} ${MONTHS_SHORT[date.getMonth()]}`;
  return includeYear ? `${base} ${date.getFullYear()}` : base;
}

export function isOverdue(dueDate: string, completed: boolean): boolean {
  if (completed) {
    return false;
  }

  return new Date(dueDate).getTime() < Date.now();
}

export function validateTaskTitle(title: string): string {
  const trimmedTitle = title.trim();

  if (!trimmedTitle) {
    return "Task title is required.";
  }

  if (trimmedTitle.length > 100) {
    return "Task title must be 100 characters or less.";
  }

  return "";
}

export function validateTaskDescription(description: string): string {
  if (description.trim().length > 500) {
    return "Description must be 500 characters or less.";
  }

  return "";
}

export function isValidDueDate(date: Date): boolean {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const selectedDate = new Date(date);
  selectedDate.setHours(0, 0, 0, 0);

  return selectedDate >= today;
}