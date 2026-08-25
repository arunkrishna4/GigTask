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

export default function TaskCard({ task, onToggle, onPress }: TaskCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
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

        <View style={[styles.priorityBadge, styles[`${task.priority}Badge`]]}>
          <Text style={[styles.priorityText, styles[`${task.priority}Text`]]}>
            {getPriorityLabel(task.priority)}
          </Text>
        </View>
      </View>

      <View style={styles.bottomRow}>
        <Text
          style={[
            styles.dueDate,
            isOverdue(task.due_date, task.completed) && styles.overdue,
          ]}
        >
          {isOverdue(task.due_date, task.completed) ? "Overdue · " : "Due · "}
          {formatDueDate(task.due_date)}
        </Text>
      </View>
    </Pressable>
  );
}
