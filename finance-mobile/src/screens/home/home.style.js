import { COLORS, FONT_SIZE, FONT_FAMILY } from "../../constants/theme";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.primary2,
    paddingTop: 30,
  },
  logo: {
    width: 107,
    height: 23,
  },
  header: {
    alignItems: "center",
  },
  containerSaldo: {
    alignItems: "center",
    padding: 30,
  },
  titulo: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.secondary,
    fontFamily: FONT_FAMILY.regular,
  },
  saldo: {
    fontSize: FONT_SIZE.xlg,
    fontFamily: FONT_FAMILY.bold,
    color: COLORS.secondary,
  },
  containerReceita: {
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  iconReceita: {
    width: 40,
    height: 40,
  },
  containerValor: {
    marginLeft: 5,
  },
  textReceita: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.primary3,
    fontFamily: FONT_FAMILY.regular,
    lineHeight: 17,
    marginTop: 2,
  },
  valorReceita: {
    fontSize: FONT_SIZE.md,
    color: COLORS.primary5,
    fontFamily: FONT_FAMILY.bold,
    lineHeight: 20,
  },
  containerValores: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerList: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.primary1,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary2,
  },
  textUltimo: {
    fontSize: FONT_SIZE.md,
    color: COLORS.primary5,
    fontFamily: FONT_FAMILY.bold,
  },
  textTodos: {
    fontSize: FONT_SIZE.md,
    color: COLORS.secondary,
    fontFamily: FONT_FAMILY.regular,
  },
  List: {
    flex: 1,
    backgroundColor: COLORS.primary1,
  },
  containerFooter: {
    alignItems: "center",
    padding: 10,
    backgroundColor: COLORS.primary1,
  },
  btnAdd: {
    width: 65,
    height: 65,
  },
  menu: {
    margin: 0,
  },
  backgroundMenu: {
    backgroundColor: COLORS.primary1,
    flex: 1,
    width: "75%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 40,
  },
  logoMenu: {
    width: 100,
    height: 119,
  },
  itemMenu: {
    padding: 15,
    alignItems: "center",
  },
  textMenu: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.primary4,
    fontFamily: FONT_FAMILY.regular,
  },

  textMenuLogout: {
    fontSize: FONT_SIZE.md,
    color: COLORS.secondary,
    fontFamily: FONT_FAMILY.regular,
  },
  btnMenu: {
    position: "absolute",
    top: 2,
    left: 10,
  },
  iconMenu: {
    width: 35,
    height: 25,
  },
};
