import { useCallback, useMemo, useState } from "react";

import { useFocusEffect, useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";
import { deleteTask, getTasks, toggleTask } from "../services/task.service";
import { Task, TaskPriority } from "../types/task";

export type TaskFilter = "all" | "completed" | "incomplete";

export type PriorityFilter = "all" | TaskPriority;

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  const [statusFilter, setStatusFilter] = useState<TaskFilter>("all");

  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>("all");

  const { signOut } = useAuth();
  const router = useRouter();

  const loadTasks = useCallback(async () => {
    try {
      setError("");

      const data = await getTasks();

      setTasks(data);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Unable to load tasks.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTasks();
    }, [loadTasks]),
  );

  const refreshTasks = async () => {
    setRefreshing(true);
    await loadTasks();
    setRefreshing(false);
  };

  const handleToggleTask = async (id: string, completed: boolean) => {
    try {
      const updatedTask = await toggleTask(id, completed);

      setTasks((currentTasks) =>
        currentTasks.map((task) => (task.id === id ? updatedTask : task)),
      );
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Unable to update task.",
      );
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      await deleteTask(id);

      setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Unable to delete task.",
      );
    }
  };

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "completed" && task.completed) ||
        (statusFilter === "incomplete" && !task.completed);

      const matchesPriority =
        priorityFilter === "all" || task.priority === priorityFilter;

      return matchesStatus && matchesPriority;
    });
  }, [tasks, statusFilter, priorityFilter]);

  const completedCount = tasks.filter((task) => task.completed).length;

  const pendingCount = tasks.length - completedCount;

  const logout = async () => {
    try {
      await signOut();
      router.replace("/auth/login");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unable to log out.");
    }
  };

  return {
    tasks: filteredTasks,
    loading,
    refreshing,
    error,

    statusFilter,
    priorityFilter,

    completedCount,
    pendingCount,
    totalCount: tasks.length,

    setStatusFilter,
    setPriorityFilter,

    logout,

    refreshTasks,
    toggleTask: handleToggleTask,
    deleteTask: handleDeleteTask,
  };
}
