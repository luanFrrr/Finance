import { COLORS, FONT_SIZE, FONT_FAMILY } from "../../constants/theme";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.primary1,
  },

  list: {
    flex: 1,
    backgroundColor: COLORS.primary1,
  },

  footer: {
    backgroundColor: COLORS.secondary,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  add: {
    width: 48,
    height: 48,
  },
  registros: {
    color: COLORS.primary1,
    fontSize: FONT_SIZE.md,
    fontFamily: FONT_FAMILY.bold,
    marginTop: 17,
  },
};
