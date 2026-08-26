import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { PriorityFilter, TaskFilter } from "../hooks/useTasks";
import styles from "../styles/task-filters.styles";

interface TaskFiltersProps {
  statusFilter: TaskFilter;
  priorityFilter: PriorityFilter;
  onStatusChange: (value: TaskFilter) => void;
  onPriorityChange: (value: PriorityFilter) => void;
}

const statusOptions: { label: string; value: TaskFilter }[] = [
  { label: "All", value: "all" },
  { label: "Pending", value: "incomplete" },
  { label: "Completed", value: "completed" },
];

const priorityOptions: {
  label: string;
  value: PriorityFilter;
  dot: "allDot" | "lowDot" | "mediumDot" | "highDot";
}[] = [
    { label: "All", value: "all", dot: "allDot" },
    { label: "Low", value: "low", dot: "lowDot" },
    { label: "Medium", value: "medium", dot: "mediumDot" },
    { label: "High", value: "high", dot: "highDot" },
  ];

export default function TaskFilters({
  statusFilter,
  priorityFilter,
  onStatusChange,
  onPriorityChange,
}: TaskFiltersProps) {
  const [openDropdown, setOpenDropdown] = useState<
    "status" | "priority" | null
  >(null);

  const selectedStatus = statusOptions.find(
    (option) => option.value === statusFilter,
  );
  const selectedPriority = priorityOptions.find(
    (option) => option.value === priorityFilter,
  );

  return (
    <LinearGradient
      colors={["#E0F2FE", "#E0E7FF", "#F3E8FF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>Filter</Text>

      <View style={styles.controlsRow}>
        <View style={styles.controlGroup}>
          <Text style={styles.label}>Status:</Text>
          <View style={styles.dropdownWrap}>
            <Pressable
              style={({ pressed }) => [
                styles.dropdownButton,
                openDropdown === "status" && styles.dropdownButtonActive,
                pressed && styles.dropdownButtonPressed,
              ]}
              onPress={() =>
                setOpenDropdown((current) =>
                  current === "status" ? null : "status",
                )
              }
            >
              <Text style={styles.dropdownText}>{selectedStatus?.label}</Text>
              <Ionicons name="chevron-down-outline" size={16} />
            </Pressable>

            {openDropdown === "status" && (
              <View style={styles.menu}>
                {statusOptions.map((option) => {
                  const selected = statusFilter === option.value;

                  return (
                    <Pressable
                      key={option.value}
                      style={({ pressed }) => [
                        styles.menuItem,
                        selected && styles.menuItemSelected,
                        pressed && styles.menuItemPressed,
                      ]}
                      onPress={() => {
                        onStatusChange(option.value);
                        setOpenDropdown(null);
                      }}
                    >
                      <Text
                        style={[
                          styles.menuItemText,
                          selected && styles.menuItemTextSelected,
                        ]}
                      >
                        {option.label}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            )}
          </View>
        </View>

        <View style={styles.controlGroup}>
          <Text style={styles.label}>Priority:</Text>
          <View style={styles.dropdownWrap}>
            <Pressable
              style={({ pressed }) => [
                styles.dropdownButton,
                openDropdown === "priority" && styles.dropdownButtonActive,
                pressed && styles.dropdownButtonPressed,
              ]}
              onPress={() =>
                setOpenDropdown((current) =>
                  current === "priority" ? null : "priority",
                )
              }
            >
              <View
                style={[
                  styles.priorityDot,
                  styles[selectedPriority?.dot ?? "allDot"],
                ]}
              />
              <Text style={styles.dropdownText}>{selectedPriority?.label}</Text>
              <Ionicons name="chevron-down-outline" size={16} />
            </Pressable>

            {openDropdown === "priority" && (
              <View style={styles.menu}>
                {priorityOptions.map((option) => {
                  const selected = priorityFilter === option.value;

                  return (
                    <Pressable
                      key={option.value}
                      style={({ pressed }) => [
                        styles.menuItem,
                        selected && styles.menuItemSelected,
                        pressed && styles.menuItemPressed,
                      ]}
                      onPress={() => {
                        onPriorityChange(option.value);
                        setOpenDropdown(null);
                      }}
                    >
                      <View style={[styles.priorityDot, styles[option.dot]]} />
                      <Text
                        style={[
                          styles.menuItemText,
                          selected && styles.menuItemTextSelected,
                        ]}
                      >
                        {option.label}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            )}
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
