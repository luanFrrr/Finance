import { View, Image, Text } from "react-native";
import { styles } from "./login.style.js";
import icons from "../../constants/icons.js";
import Button from "../../components/button/button.jsx";
import Textbox from "../../components/textbox/textbox.jsx";

function Login() {
  function ProcessarLogin() {}
  function ChangeEmail() {}
  function ChangePassword() {}

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={icons.logo} />

      <Text style={styles.titulo}>Acessar sua Conta</Text>

      <View style={styles.fields}>
        <Textbox placeholder="Email" value="" onChangeText={ChangeEmail} />
      </View>
      <View style={styles.fields}>
        <Textbox
          placeholder="Senha"
          value=""
          onChangeText={ChangePassword}
          isPassword={true}
        />
      </View>

      <Button
        onPress={() => {
          Login();
        }}
        color="secondary"
        text="Acessar"
      />
    </View>
  );
}

export default Login;
