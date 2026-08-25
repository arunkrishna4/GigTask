import { Text, View } from "react-native";

import styles from "../styles/empty-tasks.styles";

export default function EmptyTasks() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>✓</Text>
      </View>

      <Text style={styles.title}>No tasks yet</Text>

      <Text style={styles.subtitle}>
        Create your first task and start getting things done.
      </Text>
    </View>
  );
}
