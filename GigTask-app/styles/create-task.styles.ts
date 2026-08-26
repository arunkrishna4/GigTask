import { StyleSheet } from "react-native";
import { normalize } from "../utils/normalize";


import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from "../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.xxl,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.xl,
  },

  backButton: {
    width: normalize(42),
    height: normalize(42),
    borderRadius: normalize(21),
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

  title: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.sectionTitle,
    fontWeight: "700",
  },

  subtitle: {
    color: COLORS.mutedText,
    fontSize: TYPOGRAPHY.small,
    marginTop: normalize(3),
  },

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
    minHeight: normalize(52),
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
    color: COLORS.text,
    fontSize: TYPOGRAPHY.body,
  },

  textArea: {
    minHeight: normalize(120),
    paddingTop: SPACING.md,
    textAlignVertical: "top",
  },

  dateButton: {
    minHeight: normalize(52),
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

  datePlaceholder: {
    color: COLORS.mutedText,
  },

  priorityContainer: {
    flexDirection: "row",
    gap: SPACING.sm,
  },

  priorityButton: {
    flex: 1,
    minHeight: normalize(48),
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

  error: {
    color: COLORS.danger,
    fontSize: TYPOGRAPHY.small,
    marginBottom: SPACING.md,
    lineHeight: normalize(18),
  },

  submitButton: {
    minHeight: normalize(54),
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.md,
    alignItems: "center",
    justifyContent: "center",
    marginTop: SPACING.sm,
  },

  submitButtonPressed: {
    opacity: 0.8,
  },

  submitButtonDisabled: {
    opacity: 0.5,
  },

  submitButtonText: {
    color: COLORS.white,
    fontSize: TYPOGRAPHY.body,
    fontWeight: "700",
  },
});
