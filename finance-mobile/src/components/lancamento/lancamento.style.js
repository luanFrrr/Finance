import { COLORS, FONT_SIZE, FONT_FAMILY } from "../../constants/theme";

export const styles = {
  lancamento: {
    //flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary2,
    padding: 10,
  },
  icone: {
    width: 50,
    height: 50,
  },
  descricao: {
    color: COLORS.primary4,
    fontSize: FONT_SIZE.md,
  },
  categoria: {
    color: COLORS.primary3,
    fontSize: FONT_SIZE.sm,
  },
  valor: {
    color: COLORS.primary4,
    fontSize: FONT_SIZE.md,
    textAlign: "right",
  },
  data: {
    color: COLORS.primary3,
    fontSize: FONT_SIZE.sm,
    textAlign: "right",
  },
  containerTexto: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
  },
};
