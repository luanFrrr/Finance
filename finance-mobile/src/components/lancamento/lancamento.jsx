import { TouchableOpacity, View, Text, Image } from "react-native";
import { styles } from "./lancamento.style.js";

function Lancamento(props) {
  return (
    <TouchableOpacity style={styles.lancamento}>
      <View>
        <Image source={{ uri: props.icone }} style={styles.icone} />
      </View>
      <View style={styles.containerTexto}>
        <Text style={styles.descricao}>{props.descricao}</Text>
        <Text style={styles.categoria}>{props.categoria}</Text>
      </View>
      <View>
        <Text style={styles.valor}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(props.valor)}
        </Text>
        <Text style={styles.data}>{props.data}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Lancamento;
