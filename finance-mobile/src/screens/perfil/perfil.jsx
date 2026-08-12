import {
  Alert,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./perfil.style.js";
import Textbox from "../../components/textbox/textbox.jsx";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import icons from "../../constants/icons.js";

function Perfil() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const nav = useNavigation();

  function ChangeText() {}
  function ClickSalvar() {
    Alert.alert("Salvando");
  }

  useEffect(() => {
    nav.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={ClickSalvar}>
            <Image source={icons.save} style={styles.icone} />
          </TouchableOpacity>
        );
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.fields}>
        <Text style={styles.text}>Nome</Text>
        <Textbox
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={ChangeText}
        />
      </View>
      <View style={styles.fields}>
        <Text style={styles.text}>Email</Text>
        <Textbox
          placeholder="Digite seu Email"
          value={email}
          onChangeText={ChangeText}
        />
      </View>
    </View>
  );
}

export default Perfil;
