import {
  Alert,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./password.style.js";
import Textbox from "../../components/textbox/textbox.jsx";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import icons from "../../constants/icons.js";

function Password() {
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");
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
        <Text style={styles.text}>Nova Senha</Text>
        <Textbox
          placeholder="Digite a nova senha"
          value={senha}
          onChangeText={ChangeText}
        />
      </View>
      <View style={styles.fields}>
        <Text style={styles.text}>Confirmar nova senh</Text>
        <Textbox
          placeholder="Repita a nova senha"
          value={senha2}
          onChangeText={ChangeText}
        />
      </View>
    </View>
  );
}

export default Password;
