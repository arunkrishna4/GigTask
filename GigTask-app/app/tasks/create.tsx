import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { LinearGradient } from "expo-linear-gradient";

import {
  ActivityIndicator,
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
import { useCreateTask } from "../../hooks/useCreateTask";
import styles from "../../styles/create-task.styles";

export default function CreateTask() {
  const {
    title,
    description,
    dueDate,
    priority,
    showDatePicker,
    loading,
    error,

    setTitle,
    setDescription,
    setPriority,
    setShowDatePicker,
    handleDateChange,

    submit,
    goBack,
  } = useCreateTask();

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
            <View style={styles.header}>
              <Pressable style={styles.backButton} onPress={goBack} hitSlop={8}>
                <Ionicons name="arrow-back" size={21} color={COLORS.text} />
              </Pressable>

              <View style={styles.headerTextContainer}>
                <Text style={styles.title}>Create task</Text>

                <Text style={styles.subtitle}>
                  Add a new task to your workspace.
                </Text>
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Task title</Text>

              <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="What needs to be done?"
                placeholderTextColor={COLORS.mutedText}
                maxLength={100}
                returnKeyType="next"
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Description</Text>

              <TextInput
                style={[styles.input, styles.textArea]}
                value={description}
                onChangeText={setDescription}
                placeholder="Add some details..."
                placeholderTextColor={COLORS.mutedText}
                multiline
                maxLength={500}
              />
            </View>

            <View style={styles.field}>
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
                    year: "numeric",
                  })}
                </Text>

                <Ionicons
                  name="calendar-outline"
                  size={20}
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

            <View style={styles.field}>
              <Text style={styles.label}>Priority</Text>

              <PrioritySelector value={priority} onChange={setPriority} />
            </View>

            {error ? <Text style={styles.error}>{error}</Text> : null}

            <Pressable
              style={({ pressed }) => [
                styles.submitButton,
                pressed && styles.submitButtonPressed,
                loading && styles.submitButtonDisabled,
              ]}
              onPress={submit}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color={COLORS.white} />
              ) : (
                <Text style={styles.submitButtonText}>Create Task</Text>
              )}
            </Pressable>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
}
