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
    color: COLORS.primary3,
    fontSize: FONT_SIZE.md,
    fontFamily: FONT_FAMILY.bold,
    marginTop: 50,
  },
  subtitulo: {
    color: COLORS.primary5,
    fontSize: FONT_SIZE.lg,
    fontFamily: FONT_FAMILY.bold,
    marginTop: 10,
    marginBottom: 20,
  },
};
