import { TouchableOpacity, View, Image, Text } from "react-native";
import { styles } from "./lancamentos.style.js";
import icons from "../../constants/icons.js";

function Lancamentos() {
  return (
    <View style={styles.container}>
      <View style={styles.containerNavigation}>
        <TouchableOpacity>
          <Image source={icons.prior} style={styles.btnNavigation} />
        </TouchableOpacity>
        <View>
          <Text>Janeiro</Text>
        </View>

        <TouchableOpacity>
          <Image source={icons.next} style={styles.btnNavigation} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Lancamentos;
