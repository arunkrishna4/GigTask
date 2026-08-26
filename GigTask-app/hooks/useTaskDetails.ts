import { useLocalSearchParams, useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import Toast from "react-native-toast-message";

import { Alert } from "react-native";
import { deleteTask, getTaskById, updateTask } from "../services/task.service";
import { Task, TaskPriority } from "../types/task";
import {
  isValidDueDate,
  validateTaskDescription,
  validateTaskTitle,
} from "../utils/task.utils";

export function useTaskDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const [task, setTask] = useState<Task | null>(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [priority, setPriority] = useState<TaskPriority>("medium");

  const [editing, setEditing] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");


  const loadTask = useCallback(async () => {


    if (!id) {
      setError("Task not found.");
      setLoading(false);

      return;
    }

    try {
      setError("");



      const data = await getTaskById(id);



      setTask(data);
      setTitle(data.title);
      setDescription(data.description ?? "");
      setDueDate(new Date(data.due_date));
      setPriority(data.priority);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Unable to load task.",
      );
    } finally {
      setLoading(false);

    }
  }, [id]);

  useEffect(() => {
    loadTask();
  }, [loadTask]);

  const startEditing = () => {
    setError("");
    setEditing(true);
  };

  const cancelEditing = () => {
    if (!task) {
      return;
    }

    setTitle(task.title);
    setDescription(task.description ?? "");
    setDueDate(new Date(task.due_date));
    setPriority(task.priority);

    setError("");
    setEditing(false);
  };

  const handleDateChange = (_event: unknown, selectedDate?: Date) => {
    setShowDatePicker(false);

    if (selectedDate) {
      setDueDate(selectedDate);
    }
  };

  const saveTask = async () => {
    if (!task) {
      return;
    }

    setError("");

    const titleError = validateTaskTitle(title);

    if (titleError) {
      setError(titleError);
      return;
    }

    const descriptionError = validateTaskDescription(description);

    if (descriptionError) {
      setError(descriptionError);
      return;
    }

    if (!isValidDueDate(dueDate)) {
      setError("Due date cannot be in the past.");
      return;
    }

    setSaving(true);

    try {
      const updatedTask = await updateTask(task.id, {
        title: title.trim(),
        description: description.trim() || undefined,
        due_date: dueDate.toISOString(),
        priority,
      });

      setTask(updatedTask);
      setEditing(false);

      Toast.show({
        type: "success",
        text1: "Task updated",
        text2: "Your changes have been saved.",
      });
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Unable to update task.",
      );
    } finally {
      setSaving(false);
    }
  };

  const confirmDelete = () => {
    if (!task) {
      return;
    }

    return {
      title: "Delete task?",
      message: "This action cannot be undone.",
    };
  };

  const removeTask = async () => {
    if (!task) {
      return;
    }

    setDeleting(true);
    setError("");

    try {
      await deleteTask(task.id);

      Toast.show({
        type: "success",
        text1: "Task deleted",
        text2: "The task has been removed.",
      });

      router.back();
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Unable to delete task.",
      );
    } finally {
      setDeleting(false);
    }
  };

  const goBack = () => {
    router.back();
  };

  const handleDelete = () => {
    const confirmation = confirmDelete();

    if (!confirmation) {
      return;
    }

    Alert.alert(confirmation.title, confirmation.message, [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: removeTask,
      },
    ]);
  };

  return {
    task,

    title,
    description,
    dueDate,
    priority,

    editing,
    showDatePicker,

    loading,
    saving,
    deleting,
    error,

    setTitle,
    setDescription,
    setPriority,
    setShowDatePicker,

    handleDateChange,

    startEditing,
    cancelEditing,
    saveTask,
    confirmDelete,
    handleDelete,
    removeTask,
    goBack,
  };
}
