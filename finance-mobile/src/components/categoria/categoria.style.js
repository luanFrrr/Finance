import { COLORS, FONT_SIZE, FONT_FAMILY } from "../../constants/theme";

export const styles = {
  lancamento: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary2,
    padding: 10,
  },
  icone: {
    width: 35,
    height: 35,
  },
  categoria: {
    color: COLORS.primary4,
    fontSize: FONT_SIZE.sm,
  },

  containerTexto: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    justifyContent: "center",
  },
};
