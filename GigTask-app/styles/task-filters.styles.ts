import { StyleSheet } from "react-native";
import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.md,
    marginBottom: SPACING.sm,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    zIndex: 10,
  },

  title: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.sectionTitle,
    fontWeight: "800",
    lineHeight: 24,
    textAlign: "center",
    marginBottom: SPACING.sm,
  },

  controlsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.md,
  },

  controlGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    minHeight: 36,
    zIndex: 10,
  },

  label: {
    color: COLORS.mutedText,
    fontSize: TYPOGRAPHY.caption,
    fontWeight: "800",
    textTransform: "uppercase",
  },

  dropdownWrap: {
    position: "relative",
    zIndex: 20,
  },

  dropdownButton: {
    minWidth: 102,
    height: 34,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: SPACING.xs,
    paddingHorizontal: SPACING.sm,
    borderRadius: RADIUS.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.background,
  },

  dropdownButtonPressed: {
    backgroundColor: COLORS.primaryLight,
  },

  dropdownButtonActive: {
    borderColor: COLORS.borderFocus,
    backgroundColor: COLORS.primaryLight,
  },

  dropdownText: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.caption,
    fontWeight: "700",
    lineHeight: 16,
  },

  chevron: {
    color: COLORS.mutedText,
    fontSize: 15,
    fontWeight: "800",
    lineHeight: 15,
  },

  menu: {
    position: "absolute",
    top: 38,
    left: 0,
    right: 0,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: "hidden",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
    zIndex: 30,
  },

  menuItem: {
    minHeight: 34,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: SPACING.sm,
    backgroundColor: COLORS.surface,
  },

  menuItemPressed: {
    backgroundColor: COLORS.primaryLight,
  },

  menuItemSelected: {
    backgroundColor: COLORS.primaryLight,
  },

  menuItemText: {
    color: COLORS.mutedText,
    fontSize: TYPOGRAPHY.caption,
    fontWeight: "700",
  },

  menuItemTextSelected: {
    color: COLORS.primary,
  },

  priorityDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
  },

  lowDot: {
    backgroundColor: COLORS.success,
  },

  mediumDot: {
    backgroundColor: COLORS.warning,
  },

  highDot: {
    backgroundColor: COLORS.danger,
  },

  allDot: {
    backgroundColor: COLORS.mutedText,
  },
});

export default styles;
