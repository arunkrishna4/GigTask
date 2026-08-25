import { StyleSheet } from "react-native";

import { COLORS, SPACING, TYPOGRAPHY } from "../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    backgroundColor: "#F4F7FB",
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
    color: "#111827",
    fontSize: TYPOGRAPHY.screenTitle,
    fontWeight: "900",
    letterSpacing: 0,
  },

  subtitle: {
    color: "#64748B",
    fontSize: TYPOGRAPHY.small,
    marginTop: 3,
    fontWeight: "500",
  },

  logoutButton: {
    flexDirection: "row",
    gap: 7,
    minWidth: 108,
    height: 46,
    borderRadius: 23,
    backgroundColor: "rgba(255, 241, 242, 0.9)",
    borderWidth: 1,
    borderColor: "#FECDD3",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.07,
    shadowRadius: 16,
    elevation: 3,
  },

  logoutButtonPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.86,
  },

  logoutText: {
    color: COLORS.danger,
    fontSize: TYPOGRAPHY.caption,
    fontWeight: "900",
  },

  statsContainer: {
    flexDirection: "row",
    gap: SPACING.sm,
    marginBottom: SPACING.md,
  },

  statCard: {
    flex: 1,
    minHeight: 104,
    backgroundColor: "rgba(255, 255, 255, 0.94)",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.18)",
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    justifyContent: "space-between",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 18,
    elevation: 3,
  },

  statTopRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  statIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#EEF2FF",
    alignItems: "center",
    justifyContent: "center",
  },

  pendingIcon: {
    backgroundColor: "#FEF3C7",
  },

  doneIcon: {
    backgroundColor: "#D1FAE5",
  },

  statNumber: {
    color: "#111827",
    fontSize: 28,
    fontWeight: "900",
    lineHeight: 33,
    alignSelf: "center",
  },

  statLabel: {
    color: "#64748B",
    fontSize: 11,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  error: {
    color: "#BE123C",
    fontSize: TYPOGRAPHY.small,
    lineHeight: 20,
    marginBottom: SPACING.sm,
  },

  listHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: SPACING.xs,
    marginBottom: SPACING.sm,
    paddingHorizontal: 2,
  },

  listTitle: {
    color: "#111827",
    fontSize: TYPOGRAPHY.cardTitle,
    fontWeight: "900",
  },

  listCount: {
    color: "#64748B",
    fontSize: TYPOGRAPHY.caption,
    fontWeight: "800",
  },

  list: {
    paddingBottom: 126,
  },

  emptyList: {
    flexGrow: 1,
    justifyContent: "center",
    paddingBottom: 92,
  },

  fab: {
    position: "absolute",
    bottom: 70,
    right: SPACING.lg,
    width: 64,
    height: 64,
    borderRadius: 24,
    backgroundColor: "#111827",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#111827",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.24,
    shadowRadius: 18,
    elevation: 8,
  },

  fabPressed: {
    transform: [{ scale: 0.94 }],
    opacity: 0.92,
  },

  fabText: {
    color: COLORS.white,
    fontSize: 34,
    fontWeight: "400",
    lineHeight: 32,
  },

  refreshLoader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(244, 247, 251, 0.58)",
  },

  decorCircleTop: {
    position: "absolute",
    top: -80,
    right: -60,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: COLORS.primary,
    opacity: 0.07,
  },

  decorCircleBottom: {
    position: "absolute",
    bottom: -100,
    left: -80,
    width: 270,
    height: 270,
    borderRadius: 135,
    backgroundColor: COLORS.primary,
    opacity: 0.055,
  },
});
