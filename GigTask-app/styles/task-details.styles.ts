import { StyleSheet } from "react-native";

import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from "../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FB",
  },

  content: {
    flexGrow: 1,
    position: "relative",
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.sm,
    paddingBottom: 72,
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SPACING.lg,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: SPACING.lg,
  },

  backButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.22)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.md,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 4,
  },

  headerTextContainer: {
    flex: 1,
  },

  headerTitle: {
    color: "#111827",
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: 0,
  },

  headerSubtitle: {
    color: "#64748B",
    fontSize: TYPOGRAPHY.small,
    marginTop: 3,
    fontWeight: "500",
  },

  taskHero: {
    minHeight: 176,
    borderRadius: 28,
    padding: SPACING.xl,
    marginBottom: SPACING.md,
    justifyContent: "center",
    shadowColor: "#111827",
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.22,
    shadowRadius: 24,
    elevation: 8,
  },

  heroContentRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: SPACING.lg,
  },

  heroTextBlock: {
    flex: 1,
    minWidth: 0,
  },

  statusPill: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    gap: 7,
    paddingHorizontal: SPACING.md,
    paddingVertical: 8,
    borderRadius: RADIUS.pill,
    backgroundColor: "rgba(255, 255, 255, 0.16)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#A5B4FC",
  },

  completedDot: {
    backgroundColor: "#99F6E4",
  },

  statusText: {
    color: COLORS.white,
    fontSize: TYPOGRAPHY.caption,
    fontWeight: "800",
  },

  taskTitle: {
    color: COLORS.white,
    fontSize: 30,
    lineHeight: 37,
    fontWeight: "900",
    letterSpacing: 0,
    marginBottom: 6,
  },

  completedTitle: {
    textDecorationLine: "line-through",
    opacity: 0.82,
  },

  description: {
    color: "rgba(255, 255, 255, 0.82)",
    fontSize: TYPOGRAPHY.body,
    lineHeight: 24,
    fontWeight: "500",
  },

  noDescription: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: TYPOGRAPHY.body,
    fontStyle: "italic",
  },

  metaRow: {
    flexDirection: "row",
    gap: SPACING.sm,
    marginBottom: SPACING.md,
  },

  metaCard: {
    flex: 1,
    minHeight: 116,
    backgroundColor: "rgba(255, 255, 255, 0.94)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.18)",
    padding: SPACING.md,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 18,
    elevation: 3,
  },

  metaIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#EEF2FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.md,
  },

  metaLabel: {
    color: "#64748B",
    fontSize: 11,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.6,
    marginBottom: 4,
  },

  metaValue: {
    color: "#111827",
    fontSize: TYPOGRAPHY.secondary,
    fontWeight: "800",
  },

  insightCard: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.18)",
    padding: SPACING.sm,
    marginBottom: SPACING.lg,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.07,
    shadowRadius: 20,
    elevation: 3,
  },

  completionCard: {
    minHeight: 76,
    paddingHorizontal: SPACING.md,
    flexDirection: "row",
    alignItems: "center",
  },

  completionIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#C7D2FE",
    backgroundColor: "#EEF2FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: SPACING.md,
  },

  completionIconDone: {
    backgroundColor: COLORS.success,
    borderColor: COLORS.success,
  },

  completionCheck: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "800",
  },

  completionTextContainer: {
    flex: 1,
  },

  completionTitle: {
    color: "#111827",
    fontSize: TYPOGRAPHY.body,
    fontWeight: "800",
  },

  completionSubtitle: {
    color: "#64748B",
    fontSize: TYPOGRAPHY.small,
    lineHeight: 20,
    marginTop: 3,
  },

  actionContainer: {
    gap: SPACING.sm,
    marginBottom: SPACING.xxl,
  },

  editButton: {
    minHeight: 54,
    backgroundColor: "#111827",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#111827",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.18,
    shadowRadius: 18,
    elevation: 5,
  },

  editButtonPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },

  editButtonText: {
    color: COLORS.white,
    fontSize: TYPOGRAPHY.button,
    fontWeight: "800",
  },

  saveButton: {
    minHeight: 54,
    backgroundColor: "#111827",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#111827",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.18,
    shadowRadius: 18,
    elevation: 5,
  },

  cancelButton: {
    minHeight: 52,
    backgroundColor: "rgba(255, 255, 255, 0.94)",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.22)",
    alignItems: "center",
    justifyContent: "center",
  },

  cancelButtonText: {
    color: "#111827",
    fontSize: TYPOGRAPHY.button,
    fontWeight: "800",
  },

  deleteButton: {
    minHeight: 50,
    backgroundColor: "#FFF1F2",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#FECDD3",
    alignItems: "center",
    justifyContent: "center",
    marginTop: SPACING.xs,
  },

  deleteButtonPressed: {
    opacity: 0.7,
  },

  deleteButtonText: {
    color: "#BE123C",
    fontSize: TYPOGRAPHY.button,
    fontWeight: "800",
  },

  error: {
    color: "#BE123C",
    fontSize: TYPOGRAPHY.small,
    lineHeight: 20,
    marginBottom: SPACING.md,
  },

  formCard: {
    backgroundColor: "rgba(255, 255, 255, 0.94)",
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.18)",
    padding: SPACING.lg,
    marginBottom: SPACING.lg,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 4,
  },

  formHeader: {
    marginBottom: SPACING.lg,
  },

  formTitle: {
    color: "#111827",
    fontSize: 24,
    fontWeight: "900",
  },

  formSubtitle: {
    color: "#64748B",
    fontSize: TYPOGRAPHY.small,
    lineHeight: 20,
    marginTop: 4,
  },

  field: {
    marginBottom: SPACING.lg,
  },

  label: {
    color: "#334155",
    fontSize: TYPOGRAPHY.caption,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: 0.7,
    marginBottom: SPACING.xs,
  },

  input: {
    minHeight: 54,
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 18,
    paddingHorizontal: SPACING.md,
    color: "#111827",
    fontSize: TYPOGRAPHY.body,
    fontWeight: "600",
  },

  textArea: {
    minHeight: 132,
    paddingTop: SPACING.md,
    lineHeight: 23,
    textAlignVertical: "top",
  },

  formSplitRow: {
    flexDirection: "row",
    gap: SPACING.sm,
  },

  splitField: {
    flex: 1,
    marginBottom: 0,
  },

  dateButton: {
    minHeight: 54,
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 18,
    paddingHorizontal: SPACING.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: SPACING.sm,
  },

  dateText: {
    flex: 1,
    color: "#111827",
    fontSize: TYPOGRAPHY.small,
    fontWeight: "800",
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

  decorCircleTop: {
    position: "absolute",
    top: -78,
    right: -62,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: COLORS.primary,
    opacity: 0.07,
  },

  decorCircleBottom: {
    position: "absolute",
    bottom: -96,
    left: -82,
    width: 270,
    height: 270,
    borderRadius: 135,
    backgroundColor: COLORS.primary,
    opacity: 0.055,
  },
});
