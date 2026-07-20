import { View, Image, Text } from "react-native";
import { styles } from "./onboarding.styles.js";
import icons from "../../constants/icons.js";
import Button from "../../components/button/button.jsx";

function Onboarding() {
  function Login() {}
  function CreateAccount() {}

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={icons.logo} />
      <View>
        <Text style={styles.titulo}>Bem vindo(a) ao Finance!</Text>
        <Text style={styles.subtitulo}>
          Gerenciar seu dinheiro nunca foi tão fácil!
        </Text>
      </View>

      <Button
        onPress={() => {
          Login();
        }}
        color="secondary"
        text="Acessar Conta"
      />
      <Button
        onPress={() => {
          CreateAccount();
        }}
        color="primary"
        text="Criar Minha Conta"
      />
    </View>
  );
}

export default Onboarding;
