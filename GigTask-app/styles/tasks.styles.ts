import { StyleSheet } from "react-native";

import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from "../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: SPACING.lg,
  },

  greeting: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.screenTitle,
    fontWeight: "800",
    letterSpacing: -0.4,
  },

  subtitle: {
    color: COLORS.mutedText,
    fontSize: TYPOGRAPHY.body,
    marginTop: SPACING.xs,
  },

  logoutButton: {
    flexDirection: "row",
    gap: 7,
    width: 113,
    height: 50,
    borderRadius: 20,
    backgroundColor: COLORS.dangerLight,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  logoutButtonPressed: {
    backgroundColor: COLORS.dangerLight,
  },

  statsContainer: {
    flexDirection: "row",
    gap: SPACING.sm,
    marginBottom: SPACING.lg,
    marginTop: SPACING.lg,
  },

  statCard: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.md,
    alignItems: "center",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },

  statNumber: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.sectionTitle,
    fontWeight: "800",
  },

  statLabel: {
    color: COLORS.mutedText,
    fontSize: 12,
    marginTop: 2,
    fontWeight: "600",
  },

  error: {
    color: COLORS.danger,
    fontSize: TYPOGRAPHY.small,
    marginBottom: SPACING.sm,
  },

  list: {
    paddingBottom: 120,
  },

  emptyList: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 80,
  },

  fab: {
    position: "absolute",
    bottom: 70,
    right: SPACING.lg,
    width: 68,
    height: 68,
    borderRadius: 29,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },

  fabPressed: {
    backgroundColor: COLORS.primaryDark,
    transform: [{ scale: 0.94 }],
  },

  fabText: {
    color: COLORS.white,
    fontSize: 34,
    fontWeight: "400",
    lineHeight: 32,
  },
});
