import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { COLORS } from "../constants/theme";
import styles from "../styles/task-details.styles";
import { Task } from "../types/task";

interface TaskDetailsReadOnlyProps {
    task: Task;
    error: string | null;
    deleting: boolean;
    startEditing: () => void;
    handleDelete: () => void;
}

export default function TaskDetailsReadOnly({
    task,
    error,
    deleting,
    startEditing,
    handleDelete,
}: TaskDetailsReadOnlyProps) {
    return (
        <>
            <LinearGradient
                colors={
                    task.completed
                        ? ["#0F766E", "#14B8A6"]
                        : ["#111827", "#4F46E5"]
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.taskHero}
            >
                <View style={styles.heroContentRow}>
                    <View style={styles.heroTextBlock}>
                        <Text
                            style={[
                                styles.taskTitle,
                                task.completed && styles.completedTitle,
                            ]}
                        >
                            {task.title}
                        </Text>

                        {task.description ? (
                            <Text style={styles.description}>{task.description}</Text>
                        ) : (
                            <Text style={styles.noDescription}>No description added.</Text>
                        )}
                    </View>

                    <View style={styles.statusPill}>
                        <View
                            style={[
                                styles.statusDot,
                                task.completed && styles.completedDot,
                            ]}
                        />

                        <Text style={styles.statusText}>
                            {task.completed ? "Completed" : "In progress"}
                        </Text>
                    </View>
                </View>
            </LinearGradient>

            <View style={styles.metaRow}>
                <View style={styles.metaCard}>
                    <View style={styles.metaIconContainer}>
                        <Ionicons
                            name="calendar-outline"
                            size={18}
                            color={COLORS.primary}
                        />
                    </View>

                    <Text style={styles.metaLabel}>Due date</Text>

                    <Text style={styles.metaValue}>
                        {task.due_date}
                    </Text>
                </View>

                <View
                    style={[
                        styles.metaCard,
                        task.priority === "low" && {
                            backgroundColor: COLORS.priorityLow,
                            borderColor: COLORS.priorityLowBorder,
                        },
                        task.priority === "medium" && {
                            backgroundColor: COLORS.priorityMedium,
                            borderColor: COLORS.priorityMediumBorder,
                        },
                        task.priority === "high" && {
                            backgroundColor: COLORS.priorityHigh,
                            borderColor: COLORS.priorityHighBorder,
                        },
                    ]}
                >
                    <View style={styles.metaIconContainer}>
                        <Ionicons
                            name="flag-outline"
                            size={18}
                            color={COLORS.primary}
                        />
                    </View>

                    <Text style={styles.metaLabel}>Priority</Text>

                    <Text style={styles.metaValue}>
                        {task.priority?.charAt(0).toUpperCase() +
                            task.priority?.slice(1)}
                    </Text>
                </View>
            </View>

            <View style={styles.insightCard}>
                <View style={styles.completionCard}>
                    <View
                        style={[
                            styles.completionIcon,
                            task.completed && styles.completionIconDone,
                        ]}
                    >
                        {task.completed ? (
                            <Ionicons name="checkmark" size={18} color={COLORS.white} />
                        ) : (
                            <Ionicons
                                name="time-outline"
                                size={18}
                                color={COLORS.primary}
                            />
                        )}
                    </View>

                    <View style={styles.completionTextContainer}>
                        <Text style={styles.completionTitle}>
                            {task.completed ? "This task is wrapped" : "Ready for the next push"}
                        </Text>

                        <Text style={styles.completionSubtitle}>
                            {task.completed
                                ? "Everything important is preserved here for reference."
                                : "Keep the details sharp, then complete it from the dashboard."}
                        </Text>
                    </View>
                </View>
            </View>

            {error ? <Text style={styles.error}>{error}</Text> : null}

            <View style={styles.actionContainer}>
                {!task.completed && (
                    <Pressable
                        style={({ pressed }) => [
                            styles.editButton,
                            pressed && styles.editButtonPressed,
                        ]}
                        onPress={startEditing}
                    >
                        <Text style={styles.editButtonText}>Edit Task</Text>
                    </Pressable>
                )}

                <Pressable
                    style={({ pressed }) => [
                        styles.deleteButton,
                        pressed && styles.deleteButtonPressed,
                    ]}
                    onPress={handleDelete}
                    disabled={deleting}
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
