import { COLORS, FONT_SIZE, FONT_FAMILY } from "../../constants/theme";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.primary1,
  },
  containerNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary2,
    paddingBottom: 10,
    marginBottom: 10,
  },
  btnNavigation: {
    width: 40,
    height: 40,
  },
  textNavigation: {
    fontSize: FONT_SIZE.md,
    color: COLORS.primary1,
    backgroundColor: COLORS.secondary,
    padding: 6,
    borderRadius: 20,
    width: 140,
    textAlign: "center",
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
  titleFooter: {
    color: COLORS.primary1,
    fontSize: FONT_SIZE.sm,
    marginTop: 10,
  },
  valueFooter: {
    color: COLORS.primary1,
    fontSize: FONT_SIZE.sm,
    fontFamily: FONT_FAMILY.bold,
  },
};
