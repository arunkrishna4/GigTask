import { useRouter } from "expo-router";
import { useState } from "react";
import Toast from "react-native-toast-message";

import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { createTask } from "../services/task.service";
import { TaskPriority } from "../types/task";
import {
  isValidDueDate,
  validateTaskDescription,
  validateTaskTitle,
} from "../utils/task.utils";

export function useCreateTask() {
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dueDate, setDueDate] = useState<Date>(new Date());
  const [priority, setPriority] = useState<TaskPriority>("medium");

  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleDateChange = (
    _event: DateTimePickerEvent,
    selectedDate?: Date,
  ): void => {
    setShowDatePicker(false);

    if (selectedDate) {
      setDueDate(selectedDate);
    }
  };

  const submit = async (): Promise<void> => {
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

    setLoading(true);

    try {
      await createTask({
        title: title.trim(),
        description: description.trim() || undefined,
        due_date: dueDate.toISOString(),
        priority,
      });

      Toast.show({
        type: "success",
        text1: "Task created successfully",
        text2: "Your new task has been added.",
      });

      router.back();
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Unable to create task.",
      );
    } finally {
      setLoading(false);
    }
  };

  const goBack = (): void => {
    router.back();
  };

  return {
    title,
    description,
    dueDate,
    priority,

    showDatePicker,
    loading,
    error,

    setTitle,
    setDescription,
    setPriority,

    setShowDatePicker,
    handleDateChange,

    submit,
    goBack,
  };
}