import { TextInput } from "react-native";
import { COLORS } from "../../constants/theme";
import { styles } from "./textbox.style.js";

function Textbox(props) {
  return (
    <TextInput
      style={[styles.input, props.style]}
      placeholder={props.placeholder}
      value={props.value}
      placeholderTextColor={props.placeholderTextColor || COLORS.primary4}
      onChangeText={(text) => props.onChangeText?.(text)}
      secureTextEntry={props.isPassword}
      autoCapitalize={props.autoCapitalize || "none"}
    />
  );
}

export default Textbox;
