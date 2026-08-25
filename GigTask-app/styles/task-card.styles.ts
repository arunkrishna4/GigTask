import { StyleSheet } from "react-native";
import { COLORS, RADIUS, SPACING } from "../constants/theme";

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },

  cardPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },

  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  checkbox: {
    width: 23,
    height: 23,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    marginRight: SPACING.sm,
  },

  checkboxPressed: {
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
    lineHeight: 16,
  },

  titleContainer: {
    flex: 1,
    paddingRight: SPACING.sm,
  },

  title: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 21,
  },

  completedTitle: {
    color: COLORS.mutedText,
    textDecorationLine: "line-through",
  },

  description: {
    color: COLORS.mutedText,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 4,
  },

  priorityBadge: {
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 999,
    marginLeft: SPACING.xs,
  },

  lowBadge: {
    backgroundColor: "#EAF7EE",
  },

  mediumBadge: {
    backgroundColor: "#FFF7D6",
  },

  highBadge: {
    backgroundColor: "#FDECEC",
  },

  priorityText: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.3,
  },

  lowText: {
    color: "#2F8F4E",
  },

  mediumText: {
    color: "#A47700",
  },

  highText: {
    color: "#C94A4A",
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: SPACING.md,
    paddingTop: SPACING.sm,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },

  dueDate: {
    color: COLORS.mutedText,
    fontSize: 12,
    fontWeight: "600",
  },

  overdue: {
    color: "#C94A4A",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: SPACING.xs,
  },

  arrow: {
    color: COLORS.mutedText,
    fontSize: 28,
    lineHeight: 24,
    marginTop: 5,
    marginLeft: 4,
  },
});

export default styles;
