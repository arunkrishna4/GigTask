import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import {
    ActivityIndicator,
    Pressable,
    Text,
    TextInput,
    View,
} from "react-native";
import { COLORS } from "../constants/theme";
import styles from "../styles/task-details.styles";
import { TaskPriority } from "../types/task";
import PrioritySelector from "./PrioritySelector";

interface TaskDetailsFormProps {
    title: string;
    description: string;
    dueDate: Date;
    priority: TaskPriority;
    error: string | null;
    saving: boolean;
    deleting: boolean;
    showDatePicker: boolean;
    setTitle: (text: string) => void;
    setDescription: (text: string) => void;
    setPriority: (priority: TaskPriority) => void;
    setShowDatePicker: (show: boolean) => void;
    handleDateChange: (event: any, selectedDate?: Date) => void;
    saveTask: () => void;
    cancelEditing: () => void;
    handleDelete: () => void;
}

export default function TaskDetailsForm({
    title,
    description,
    dueDate,
    priority,
    error,
    saving,
    deleting,
    showDatePicker,
    setTitle,
    setDescription,
    setPriority,
    setShowDatePicker,
    handleDateChange,
    saveTask,
    cancelEditing,
    handleDelete,
}: TaskDetailsFormProps) {
    return (
        <>
            <View style={styles.formCard}>
                <View style={styles.formHeader}>
                    <Text style={styles.formTitle}>Refine the task</Text>
                    <Text style={styles.formSubtitle}>
                        Make the important parts easy to scan later.
                    </Text>
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Task title</Text>

                    <TextInput
                        style={styles.input}
                        value={title}
                        onChangeText={setTitle}
                        maxLength={100}
                        placeholder="Task title"
                        placeholderTextColor={COLORS.mutedText}
                    />
                </View>

                <View style={styles.field}>
                    <Text style={styles.label}>Description</Text>

                    <TextInput
                        style={[styles.input, styles.textArea]}
                        value={description}
                        onChangeText={setDescription}
                        multiline
                        maxLength={500}
                        placeholder="Add some details..."
                        placeholderTextColor={COLORS.mutedText}
                    />
                </View>

                <View style={styles.formSplitRow}>
                    <View style={[styles.field, styles.splitField]}>
                        <Text style={styles.label}>Due date</Text>

                        <Pressable
                            style={styles.dateButton}
                            onPress={() => setShowDatePicker(true)}
                        >
                            <Text style={styles.dateText}>
                                {dueDate.toLocaleDateString(undefined, {
                                    weekday: "short",
                                    day: "numeric",
                                    month: "short",
                                })}
                            </Text>

                            <Ionicons
                                name="calendar-outline"
                                size={19}
                                color={COLORS.primary}
                            />
                        </Pressable>

                        {showDatePicker && (
                            <DateTimePicker
                                value={dueDate}
                                mode="date"
                                minimumDate={new Date()}
                                onChange={handleDateChange}
                            />
                        )}
                    </View>

                    <View style={[styles.field, styles.splitField]}>
                        <Text style={styles.label}>Priority</Text>

                        <PrioritySelector value={priority} onChange={setPriority} />
                    </View>
                </View>
            </View>

            {error ? <Text style={styles.error}>{error}</Text> : null}

            <View style={styles.actionContainer}>
                <Pressable
                    style={styles.saveButton}
                    onPress={saveTask}
                    disabled={saving}
                >
                    {saving ? (
                        <ActivityIndicator color={COLORS.white} />
                    ) : (
                        <Text style={styles.editButtonText}>Save Changes</Text>
                    )}
                </Pressable>

                <Pressable
                    style={styles.cancelButton}
                    onPress={cancelEditing}
                    disabled={saving}
                >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </Pressable>

                <Pressable
                    style={({ pressed }) => [
                        styles.deleteButton,
                        pressed && styles.deleteButtonPressed,
                    ]}
                    onPress={handleDelete}
                    disabled={deleting || saving}
                >
                    {deleting ? (
                        <ActivityIndicator color={COLORS.danger} />
                    ) : (
                        <Text style={styles.deleteButtonText}>Delete Task</Text>
                    )}
                </Pressable>
            </View>
        </>
    );
}
