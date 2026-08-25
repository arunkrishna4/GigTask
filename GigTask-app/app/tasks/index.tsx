import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import {
  ActivityIndicator,
  FlatList,
  Pressable,
  RefreshControl,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useRouter } from "expo-router";
import EmptyTasks from "../../components/EmptyTasks";
import TaskCard from "../../components/TaskCard";
import { COLORS, GRADIENTS } from "../../constants/theme";

import { useTasks } from "../../hooks/useTasks";
import styles from "../../styles/tasks.styles";

export default function Tasks() {
  const {
    tasks,
    loading,
    refreshing,
    error,
    totalCount,
    completedCount,
    pendingCount,
    refreshTasks,
    toggleTask,
    deleteTask,
    logout,
  } = useTasks();
  const router = useRouter();

  if (loading) {
    return (
      <LinearGradient colors={GRADIENTS.background} style={{ flex: 1 }}>
        <SafeAreaView style={styles.center}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </SafeAreaView>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={GRADIENTS.background} style={{ flex: 1 }}>
      <SafeAreaView
        style={styles.container}
        edges={["top", "bottom", "left", "right"]}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Your tasks</Text>
            <Text style={styles.subtitle}>Stay on top of your work.</Text>
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.logoutButton,
              pressed && styles.logoutButtonPressed,
            ]}
            onPress={logout}
            hitSlop={8}
          >
            <Ionicons name="log-out-outline" size={24} color={COLORS.danger} />
            <Text
              style={{ fontSize: 16, color: COLORS.danger, fontWeight: "bold" }}
            >
              Logout
            </Text>
          </Pressable>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{totalCount}</Text>
            <Text style={styles.statLabel}>Total</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{pendingCount}</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{completedCount}</Text>
            <Text style={styles.statLabel}>Done</Text>
          </View>
        </View>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard
              task={item}
              onToggle={() => toggleTask(item.id, !item.completed)}
              onPress={() =>
                router.push({
                  pathname: "/tasks/details",
                  params: { id: item.id },
                })
              }
            />
          )}
          ListEmptyComponent={<EmptyTasks />}
          contentContainerStyle={
            tasks.length === 0 ? styles.emptyList : styles.list
          }
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={refreshTasks}
              tintColor={COLORS.primary}
            />
          }
          showsVerticalScrollIndicator={false}
        />

        <Pressable
          style={({ pressed }) => [styles.fab, pressed && styles.fabPressed]}
          onPress={() => router.push("/tasks/create")}
        >
          <Text style={styles.fabText}>+</Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
}
