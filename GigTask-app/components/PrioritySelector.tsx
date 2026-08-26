import { Pressable, Text, View } from "react-native";

import styles from "../styles/priority-selector.styles";
import { TaskPriority } from "../types/task";
import { getPriorityLabel } from "../utils/task.utils";

interface PrioritySelectorProps {
  value: TaskPriority;
  onChange: (priority: TaskPriority) => void;
}

const PRIORITIES: TaskPriority[] = ["low", "medium", "high"];

export default function PrioritySelector({
  value,
  onChange,
}: PrioritySelectorProps) {
  return (
    <View style={styles.container}>
      {PRIORITIES.map((priority) => {
        const selected = value === priority;

        return (
          <Pressable
            key={priority}
            style={[styles.button, selected && styles.selectedButton]}
            onPress={() => onChange(priority)}
          >
            <Text
              style={[styles.text, selected && styles.selectedText]}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {getPriorityLabel(priority)}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
