import { COLORS, FONT_SIZE, FONT_FAMILY } from "../../constants/theme";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.primary1,
    alignItems: "center",
    justifyContent: "center",
    padding: 45,
  },
  logo: {
    width: 90,
    height: 107,
  },

  titulo: {
    color: COLORS.primary5,
    fontSize: FONT_SIZE.lg,
    fontFamily: FONT_FAMILY.bold,
    marginTop: 50,
    marginBottom: 20,
  },
  fields: {
    width: "100%",
    marginBottom: 10,
  },
};
