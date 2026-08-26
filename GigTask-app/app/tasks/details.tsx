import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TaskDetailsSkeleton from "@/components/TaskDetailsSkeleton";
import TaskDetailsForm from "../../components/TaskDetailsForm";
import TaskDetailsReadOnly from "../../components/TaskDetailsReadOnly";
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
    handleDelete,
    goBack,
  } = useTaskDetails();



  if (loading) {
    return (
      <LinearGradient colors={GRADIENTS.background} style={styles.container}>
        <SafeAreaView
          style={styles.container}
          edges={["top", "left", "right", "bottom"]}
        >
          <View style={styles.decorCircleTop} pointerEvents="none" />
          <View style={styles.decorCircleBottom} pointerEvents="none" />

          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.header}>
              <Pressable style={styles.backButton} onPress={goBack}>
                <Ionicons
                  name="arrow-back"
                  size={21}
                  color={COLORS.text}
                />
              </Pressable>

              <View style={styles.headerTextContainer}>
                <Text style={styles.headerTitle}>Task details</Text>

                <Text style={styles.headerSubtitle}>
                  Loading task...
                </Text>
              </View>
            </View>

            <TaskDetailsSkeleton />
          </ScrollView>
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
            <View style={styles.decorCircleTop} pointerEvents="none" />
            <View style={styles.decorCircleBottom} pointerEvents="none" />
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

            {/* READ ONLY MODE AND EDIT MODE REFACTORED TO COMPONENTS */}
            {!editing ? (
              <TaskDetailsReadOnly
                task={task}
                error={error}
                deleting={deleting}
                startEditing={startEditing}
                handleDelete={handleDelete}
              />
            ) : (
              <TaskDetailsForm
                title={title}
                description={description}
                dueDate={dueDate}
                priority={priority}
                error={error}
                saving={saving}
                deleting={deleting}
                showDatePicker={showDatePicker}
                setTitle={setTitle}
                setDescription={setDescription}
                setPriority={setPriority}
                setShowDatePicker={setShowDatePicker}
                handleDateChange={handleDateChange}
                saveTask={saveTask}
                cancelEditing={cancelEditing}
                handleDelete={handleDelete}
              />
            )}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}
