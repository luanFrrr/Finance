import { styles } from "./categorias.style.js";
import {
  Alert,
  FlatList,
  View,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { categorias } from "../../constants/data.js";
import Categoria from "../../components/categoria/categoria.jsx";
import icons from "../../constants/icons.js";

function ClickCategoria(id_categoria) {
  Alert.alert("Categoria clicada", `ID da categoria: ${id_categoria}`);
}

function Categorias(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id_categoria}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          return (
            <Categoria
              id_categoria={item.id_categoria}
              icone={item.icone}
              categoria={item.categoria}
              onPress={ClickCategoria}
            />
          );
        }}
      />

      <View style={styles.footer}>
        <TouchableOpacity>
          <Image source={icons.add2} style={styles.add} />
        </TouchableOpacity>
        <View>
          <Text style={styles.registros}>10 Registros</Text>
        </View>
      </View>
    </View>
  );
}

export default Categorias;
