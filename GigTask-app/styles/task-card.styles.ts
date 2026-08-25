import { StyleSheet } from "react-native";

import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from "../constants/theme";

export default StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },

  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.995 }],
  },

  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  checkbox: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.sm,
    marginTop: 2,
  },

  checkboxPressed: {
    backgroundColor: COLORS.primaryLight,
    borderColor: COLORS.primary,
  },

  checkboxCompleted: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  checkmark: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "700",
  },

  titleContainer: {
    flex: 1,
    marginRight: SPACING.sm,
  },

  title: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.body,
    fontWeight: "700",
  },

  completedTitle: {
    textDecorationLine: "line-through",
    color: COLORS.mutedText,
  },

  description: {
    color: COLORS.mutedText,
    fontSize: TYPOGRAPHY.small,
    marginTop: 4,
    lineHeight: 18,
  },

  priorityBadge: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: RADIUS.sm,
  },

  lowBadge: {
    backgroundColor: COLORS.successLight,
  },

  mediumBadge: {
    backgroundColor: COLORS.warningLight,
  },

  highBadge: {
    backgroundColor: COLORS.dangerLight,
  },

  priorityText: {
    fontSize: 11,
    fontWeight: "700",
  },

  lowText: {
    color: COLORS.success,
  },

  mediumText: {
    color: COLORS.warning,
  },

  highText: {
    color: COLORS.danger,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: SPACING.md,
    paddingTop: SPACING.sm,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },

  dueDate: {
    color: COLORS.mutedText,
    fontSize: TYPOGRAPHY.small,
  },

  overdue: {
    color: COLORS.danger,
    fontWeight: "600",
  },

  actions: {
    flexDirection: "row",
    gap: SPACING.sm,
  },

  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 6,
    borderRadius: RADIUS.sm,
  },

  editButton: {
    backgroundColor: COLORS.primaryLight,
  },

  editButtonPressed: {
    backgroundColor: "#DDE2FB",
  },

  deleteButton: {
    backgroundColor: COLORS.dangerLight,
  },

  deleteButtonPressed: {
    backgroundColor: "#FCE0E0",
  },

  editText: {
    color: COLORS.primary,
    fontSize: TYPOGRAPHY.small,
    fontWeight: "700",
  },

  deleteText: {
    color: COLORS.danger,
    fontSize: TYPOGRAPHY.small,
    fontWeight: "700",
  },
});
