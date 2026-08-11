import { TouchableOpacity, View, Text, Image } from "react-native";
import { styles } from "./categoria.style.js";

function Categoria(props) {
  return (
    <TouchableOpacity
      style={styles.lancamento}
      onPress={() => props.onPress(props.id_categoria)}
    >
      <View>
        <Image source={{ uri: props.icone }} style={styles.icone} />
      </View>
      <View style={styles.containerTexto}>
        <Text style={styles.categoria}>{props.categoria}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Categoria;
