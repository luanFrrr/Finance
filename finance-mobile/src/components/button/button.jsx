import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";

function Button(props) {
  const isPrimary = props.color === "primary";

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.btn, isPrimary ? styles.btnPrimary : styles.btnSecondary]}
    >
      <Text style={isPrimary ? styles.textPrimary : styles.textSecondary}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
