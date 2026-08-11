import { TouchableOpacity, View, Image, Text, FlatList } from "react-native";
import { styles } from "./lancamentos.style.js";
import icons from "../../constants/icons.js";
import { lancamentos } from "../../constants/data.js";
import Lancamento from "../../components/lancamento/lancamento.jsx";

function Lancamentos(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerNavigation}>
        <TouchableOpacity>
          <Image source={icons.prior} style={styles.btnNavigation} />
        </TouchableOpacity>
        <View>
          <Text style={styles.textNavigation}>Janeiro</Text>
        </View>

        <TouchableOpacity>
          <Image source={icons.next} style={styles.btnNavigation} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={lancamentos}
        contentContainerStyle={styles.list}
        keyExtractor={(item) => item.id_lancamento}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <Lancamento
              icone={item.icone}
              descricao={item.descricao}
              categoria={item.categoria}
              valor={item.valor}
              tipo={item.tipo}
              data={item.dt_lancamento}
            />
          );
        }}
      />
      <View style={styles.footer}>
        <TouchableOpacity>
          <Image source={icons.add2} style={styles.add} />
        </TouchableOpacity>

        <View>
          <Text style={styles.titleFooter}>Receitas</Text>
          <Text style={styles.valueFooter}>R$ 1000,00</Text>
        </View>
        <View>
          <Text style={styles.titleFooter}>Despesas</Text>
          <Text style={styles.valueFooter}>R$ 800,00</Text>
        </View>
        <View>
          <Text style={styles.titleFooter}>Saldo</Text>
          <Text style={styles.valueFooter}>R$ 200,00</Text>
        </View>
      </View>
    </View>
  );
}

export default Lancamentos;
