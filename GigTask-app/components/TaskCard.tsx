import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import styles from "../styles/task-card.styles";
import { Task } from "../types/task";
import {
  formatDueDate,
  getPriorityLabel,
  isOverdue,
} from "../utils/task.utils";

interface TaskCardProps {
  task: Task;
  onToggle: () => void;
  onPress: () => void;
}

export default function TaskCard({
  task,
  onToggle,
  onPress,
}: TaskCardProps) {
  const overdue = isOverdue(task.due_date, task.completed);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        task.completed && styles.completedCard,
        pressed && styles.cardPressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.topRow}>
        <Pressable
          style={({ pressed }) => [
            styles.checkbox,
            task.completed && styles.checkboxCompleted,
            pressed && !task.completed && styles.checkboxPressed,
          ]}
          onPress={onToggle}
          hitSlop={8}
        >
          {task.completed && <Text style={styles.checkmark}>✓</Text>}
        </Pressable>

        <View style={styles.titleContainer}>
          <Text
            style={[styles.title, task.completed && styles.completedTitle]}
            numberOfLines={2}
          >
            {task.title}
          </Text>

          {task.description ? (
            <Text style={styles.description} numberOfLines={2}>
              {task.description}
            </Text>
          ) : null}
        </View>

        <View style={styles.rightSection}>
          <View
            style={[
              styles.priorityBadge,
              styles[`${task.priority}Badge`],
            ]}
          >
            <Text
              style={[
                styles.priorityText,
                styles[`${task.priority}Text`],
              ]}
            >
              {getPriorityLabel(task.priority)}
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </View>
      </View>

      <View style={styles.bottomRow}>
        <View style={styles.dueContainer}>
          <Ionicons
            name={overdue ? "alert-circle-outline" : "calendar-outline"}
            size={14}
            color={overdue ? "#DC2626" : "#64748B"}
            style={{ marginRight: 5 }}
          />

          <Text style={[styles.dueDate, overdue && styles.overdue]}>
            {overdue ? "Overdue · " : "Due · "}
            {formatDueDate(task.due_date)}
          </Text>
        </View>

        <Text style={styles.statusText}>
          {task.completed ? "Completed" : "In progress"}
        </Text>
      </View>
    </Pressable>
  );
}