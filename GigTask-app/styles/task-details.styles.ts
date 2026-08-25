import { StyleSheet } from "react-native";

import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from "../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.sm,
    paddingBottom: 50,
  },

  /* HEADER */

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.xl,
  },

  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.md,
  },

  headerTextContainer: {
    flex: 1,
  },

  headerTitle: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.sectionTitle,
    fontWeight: "700",
  },

  headerSubtitle: {
    color: COLORS.mutedText,
    fontSize: TYPOGRAPHY.small,
    marginTop: 3,
  },

  /* TASK HERO */

  taskHero: {
    backgroundColor: COLORS.primarySoft,
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.primaryBorder,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.md,
  },

  statusDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    marginRight: SPACING.xs,
  },

  completedDot: {
    backgroundColor: COLORS.success,
  },

  statusText: {
    color: COLORS.mutedText,
    fontSize: TYPOGRAPHY.small,
    fontWeight: "600",
  },

  taskTitle: {
    color: COLORS.text,
    fontSize: 25,
    lineHeight: 32,
    fontWeight: "700",
    marginBottom: SPACING.md,
  },

  completedTitle: {
    textDecorationLine: "line-through",
    opacity: 0.6,
  },

  description: {
    color: COLORS.mutedText,
    fontSize: TYPOGRAPHY.body,
    lineHeight: 23,
  },

  noDescription: {
    color: COLORS.mutedText,
    fontSize: TYPOGRAPHY.body,
    fontStyle: "italic",
  },

  /* META CARDS */

  metaRow: {
    flexDirection: "row",
    gap: SPACING.sm,
    marginBottom: SPACING.md,
  },

  metaCard: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
  },

  metaIconContainer: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.sm,
  },

  metaLabel: {
    color: COLORS.mutedText,
    fontSize: 11,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginBottom: 3,
  },

  metaValue: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.body,
    fontWeight: "700",
  },

  /* COMPLETION */

  completionCard: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    minHeight: 58,
    paddingHorizontal: SPACING.md,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.xl,
  },

  completionIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.sm,
  },

  completionIconDone: {
    backgroundColor: COLORS.success,
    borderColor: COLORS.success,
  },

  completionCheck: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "700",
  },

  completionTextContainer: {
    flex: 1,
  },

  completionTitle: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.body,
    fontWeight: "600",
  },

  completionSubtitle: {
    color: COLORS.mutedText,
    fontSize: TYPOGRAPHY.small,
    marginTop: 2,
  },

  /* ACTIONS */

  actionContainer: {
    gap: SPACING.sm,
  },

  editButton: {
    minHeight: 52,
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.md,
    alignItems: "center",
    justifyContent: "center",
  },

  editButtonPressed: {
    opacity: 0.8,
  },

  editButtonText: {
    color: COLORS.white,
    fontSize: TYPOGRAPHY.body,
    fontWeight: "700",
  },

  cancelButton: {
    minHeight: 52,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
  },

  cancelButtonText: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.body,
    fontWeight: "600",
  },

  saveButton: {
    minHeight: 54,
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.md,
    alignItems: "center",
    justifyContent: "center",
  },

  deleteButton: {
    minHeight: 50,
    backgroundColor: COLORS.danger,
    borderRadius: RADIUS.md,
    alignItems: "center",
    justifyContent: "center",
    marginTop: SPACING.xs,
  },

  deleteButtonPressed: {
    opacity: 0.6,
  },

  deleteButtonText: {
    color: COLORS.white,
    fontSize: TYPOGRAPHY.small,
    fontWeight: "600",
  },

  error: {
    color: COLORS.danger,
    fontSize: TYPOGRAPHY.small,
    lineHeight: 18,
    marginBottom: SPACING.md,
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SPACING.lg,
  },

  /* EDIT MODE */

  field: {
    marginBottom: SPACING.lg,
  },

  label: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.small,
    fontWeight: "600",
    marginBottom: SPACING.xs,
  },

  input: {
    minHeight: 52,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
    color: COLORS.text,
    fontSize: TYPOGRAPHY.body,
  },

  textArea: {
    minHeight: 120,
    paddingTop: SPACING.md,
    textAlignVertical: "top",
  },

  dateButton: {
    minHeight: 52,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  dateText: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.body,
  },

  priorityContainer: {
    flexDirection: "row",
    gap: SPACING.sm,
  },

  priorityButton: {
    flex: 1,
    minHeight: 48,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surface,
    alignItems: "center",
    justifyContent: "center",
  },

  priorityButtonSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  priorityText: {
    color: COLORS.mutedText,
    fontSize: TYPOGRAPHY.small,
    fontWeight: "600",
  },

  priorityTextSelected: {
    color: COLORS.white,
  },
});
