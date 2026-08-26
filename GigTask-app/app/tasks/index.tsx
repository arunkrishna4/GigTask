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

import TaskFilters from "@/components/TaskFilters";
import { normalize } from "@/utils/normalize";
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
    statusFilter,
    priorityFilter,
    setStatusFilter,
    setPriorityFilter,
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
        <View style={styles.decorCircleTop} pointerEvents="none" />
        <View style={styles.decorCircleBottom} pointerEvents="none" />

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
            <Text style={styles.logoutText}>Logout</Text>
          </Pressable>
        </View>

        <View style={styles.statsContainer}>
          <LinearGradient
            colors={["#312E81", "#6366F1"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.statCard}
          >
            <View style={styles.statTopRow}>
              <View style={styles.statIcon}>
                <Ionicons
                  name="albums-outline"
                  size={normalize(22)}
                  color="#C7D2FE"
                />
              </View>

              <Text style={styles.statLabel}>Total</Text>
            </View>

            <Text style={styles.statNumber}>{totalCount}</Text>
          </LinearGradient>

          <LinearGradient
            colors={["#92400E", "#F59E0B"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.statCard}
          >
            <View style={styles.statTopRow}>
              <View style={styles.statIcon}>
                <Ionicons
                  name="time-outline"
                  size={normalize(22)}
                  color="#FEF3C7"
                />
              </View>

              <Text style={styles.statLabel}>Pending</Text>
            </View>

            <Text style={styles.statNumber}>{pendingCount}</Text>
          </LinearGradient>

          <LinearGradient
            colors={["#115E59", "#14B8A6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.statCard}
          >
            <View style={styles.statTopRow}>
              <View style={styles.statIcon}>
                <Ionicons
                  name="checkmark"
                  size={normalize(22)}
                  color="#CCFBF1"
                />
              </View>

              <Text style={styles.statLabel}>Done</Text>
            </View>

            <Text style={styles.statNumber}>{completedCount}</Text>
          </LinearGradient>
        </View>

        <TaskFilters
          statusFilter={statusFilter}
          priorityFilter={priorityFilter}
          onStatusChange={setStatusFilter}
          onPriorityChange={setPriorityFilter}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <View style={styles.listHeader}>
          <Text style={styles.listTitle}>Tasks</Text>
          <Text style={styles.listCount}>{tasks.length} showing</Text>
        </View>

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
          <Ionicons name="add" size={32} color={COLORS.white} />
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
}
