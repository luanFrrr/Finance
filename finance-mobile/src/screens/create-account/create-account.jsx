import { View, Image, Text } from "react-native";
import { styles } from "./crete-account.style.js";
import icons from "../../constants/icons.js";
import Button from "../../components/button/button.jsx";
import Textbox from "../../components/textbox/textbox.jsx";

function CreateAccount() {
  function ProcessAccount() {}
  function ChangeText() {}

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={icons.logo} />

      <Text style={styles.titulo}>Criar Nova Conta.</Text>

      <View style={styles.fields}>
        <Textbox placeholder="Nome" value="" onChangeText={ChangeText} />
      </View>
      <View style={styles.fields}>
        <Textbox placeholder="Email" value="" onChangeText={ChangeText} />
      </View>
      <View style={styles.fields}>
        <Textbox
          placeholder="Senha"
          value=""
          onChangeText={ChangeText}
          isPassword={true}
        />
      </View>
      <View style={styles.fields}>
        <Textbox
          placeholder="Confirme a Senha"
          value=""
          onChangeText={ChangeText}
          isPassword={true}
        />
      </View>

      <Button
        onPress={() => {
          ProcessAccount();
        }}
        color="secondary"
        text="Criar Minha Conta"
      />
    </View>
  );
}

export default CreateAccount;
