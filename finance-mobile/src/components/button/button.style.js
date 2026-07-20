import { COLORS, FONT_FAMILY, FONT_SIZE } from "../../constants/theme";

export const styles = {
  btn: {
    width: "100%",
    margin: 10,
    borderRadius: 4,
    padding: 10,
  },
  btnPrimary: {
    backgroundColor: COLORS.primary2,
  },
  btnSecondary: {
    backgroundColor: COLORS.secondary,
  },
  textPrimary: {
    color: COLORS.primary5,
    textAlign: "center",
    fontSize: FONT_SIZE.md,
    fontFamily: FONT_FAMILY.regular,
  },
  textSecondary: {
    color: COLORS.primary1,
    textAlign: "center",
    fontSize: FONT_SIZE.md,
    fontFamily: FONT_FAMILY.regular,
  },
};
