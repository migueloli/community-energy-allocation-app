import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const GLOBAL_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    padding: 16,
    backgroundColor: COLORS.primary,
  },

  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.textLight,
    marginBottom: 8,
  },

  headerSubtitle: {
    fontSize: 16,
    color: COLORS.textLight,
    marginBottom: 16,
  },

  contractSelector: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  sectionTitle: {
    fontSize: 16,
    color: COLORS.textLight,
    marginBottom: 8,
  },

  dropdown: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
  },

  dropdownText: {
    fontSize: 14,
    color: COLORS.textPrimary,
  },

  timeSelector: {
    flexDirection: "row",
    backgroundColor: COLORS.cardBackground,
    borderRadius: 25,
    padding: 4,
    margin: 16,
  },

  timePeriodButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 20,
  },

  timePeriodButtonActive: {
    backgroundColor: COLORS.primary,
  },

  timePeriodText: {
    color: COLORS.textPrimary,
    fontSize: 14,
  },

  timePeriodTextActive: {
    color: COLORS.textLight,
  },

  consumptionCard: {
    backgroundColor: COLORS.cardBackground,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
  },

  consumptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.textPrimary,
    marginBottom: 24,
    alignSelf: "center",
  },

  chartContainer: {
    width: "100%",
    height: 300,
    padding: 25,
    alignContent: "center",
  },

  gridSourceContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
    width: "100%",
  },

  sourceIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },

  sourceLabel: {
    flex: 1,
    fontSize: 16,
  },

  sourceValue: {
    fontSize: 16,
    fontWeight: "bold",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: COLORS.cardBackground,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  navItem: {
    alignItems: "center",
    paddingVertical: 4,
  },

  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },

  navText: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },

  navTextActive: {
    color: COLORS.primary,
  },

  bottomSheet: {
    backgroundColor: COLORS.cardBackground,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
  },
});
