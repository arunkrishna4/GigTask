import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";

import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PrioritySelector from "../../components/PrioritySelector";
import { COLORS, GRADIENTS } from "../../constants/theme";
import { useTaskDetails } from "../../hooks/useTaskDetails";
import styles from "../../styles/task-details.styles";

export default function TaskDetails() {
  const {
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
    removeTask,
    goBack,
  } = useTaskDetails();

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

  if (loading) {
    return (
      <LinearGradient colors={GRADIENTS.background} style={styles.container}>
        <SafeAreaView style={styles.center}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </SafeAreaView>
      </LinearGradient>
    );
  }

  if (!task) {
    return (
      <LinearGradient colors={GRADIENTS.background} style={styles.container}>
        <SafeAreaView style={styles.center}>
          <Text style={styles.error}>{error || "Task not found."}</Text>

          <Pressable style={styles.editButton} onPress={goBack}>
            <Text style={styles.editButtonText}>Go Back</Text>
          </Pressable>
        </SafeAreaView>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient colors={GRADIENTS.background} style={styles.container}>
      <SafeAreaView
        style={styles.container}
        edges={["top", "left", "right", "bottom"]}
      >
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {/* HEADER */}

            <View style={styles.header}>
              <Pressable style={styles.backButton} onPress={goBack} hitSlop={8}>
                <Ionicons name="arrow-back" size={21} color={COLORS.text} />
              </Pressable>

              <View style={styles.headerTextContainer}>
                <Text style={styles.headerTitle}>Task details</Text>

                <Text style={styles.headerSubtitle}>
                  {editing ? "Update your task." : "View and manage your task."}
                </Text>
              </View>
            </View>

            {/* READ ONLY MODE */}

            {!editing ? (
              <>
                {/* TASK HERO */}

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
                        <Text style={styles.description}>
                          {task.description}
                        </Text>
                      ) : (
                        <Text style={styles.noDescription}>
                          No description added.
                        </Text>
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

                {/* TASK META */}

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
                      {new Date(task.due_date).toLocaleDateString(undefined, {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
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
                      {task.priority.charAt(0).toUpperCase() +
                        task.priority.slice(1)}
                    </Text>
                  </View>
                </View>

                {/* COMPLETION STATUS */}

                <View style={styles.insightCard}>
                  <View style={styles.completionCard}>
                    <View
                      style={[
                        styles.completionIcon,
                        task.completed && styles.completionIconDone,
                      ]}
                    >
                      {task.completed ? (
                        <Ionicons
                          name="checkmark"
                          size={18}
                          color={COLORS.white}
                        />
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
                        {task.completed
                          ? "This task is wrapped"
                          : "Ready for the next push"}
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

                {/* ACTIONS */}

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
            ) : (
              /* EDIT MODE */
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

                      <PrioritySelector
                        value={priority}
                        onChange={setPriority}
                      />
                    </View>
                  </View>
                </View>

                {error ? <Text style={styles.error}>{error}</Text> : null}

                {/* EDIT ACTIONS */}

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
            )}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}
