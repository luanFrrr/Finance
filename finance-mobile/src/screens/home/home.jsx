import { useState } from "react";
import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./home.style.js";
import icons from "../../constants/icons.js";
import { lancamentos } from "../../constants/data.js";
import Lancamento from "../../components/lancamento/lancamento.jsx";
import Modal from "react-native-modal";

function Home(props) {
  const [showMenu, setShowMenu] = useState(false);
  function Add() {
    props.navigation.navigate("Lancamentos");
  }
  function handleShowMenu() {
    setShowMenu(!showMenu);
  }
  function ClickDesconectar() {
    setShowMenu(false);
  }
  function ClickCategorias() {
    setShowMenu(false);
    props.navigation.navigate("Categorias");
  }
  function ClickLancamentos() {
    setShowMenu(false);
    props.navigation.navigate("Lancamentos");
  }
  function ClickPerfil() {
    setShowMenu(false);
    props.navigation.navigate("Perfil");
  }
  function ClickPassword() {
    setShowMenu(false);
    props.navigation.navigate("Password");
  }

  return (
    <View style={styles.container}>
      <Modal
        isVisible={showMenu}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        style={styles.menu}
        onBackdropPress={() => setShowMenu(false)}
      >
        <View style={styles.backgroundMenu}>
          <Image style={styles.logoMenu} source={icons.logo} />

          <View>
            <TouchableOpacity
              style={styles.itemMenu}
              onPress={ClickLancamentos}
            >
              <Text style={styles.textMenu}>Lançamentos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemMenu} onPress={ClickCategorias}>
              <Text style={styles.textMenu}>Categorias</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemMenu} onPress={ClickPerfil}>
              <Text style={styles.textMenu}>Meu Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemMenu} onPress={ClickPassword}>
              <Text style={styles.textMenu}>Alterar Senha</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={styles.itemMenu}
              onPress={ClickDesconectar}
            >
              <Text style={styles.textMenuLogout}>Desconectar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.header}>
        <TouchableOpacity style={styles.btnMenu} onPress={handleShowMenu}>
          <Image style={styles.iconMenu} source={icons.menu} />
        </TouchableOpacity>

        <Image style={styles.logo} source={icons.finance} />
      </View>

      <View style={styles.containerSaldo}>
        <Text style={styles.titulo}>SALDO ATUAL</Text>
        <Text style={styles.saldo}>7.000,00</Text>
      </View>

      <View style={styles.containerValores}>
        <View style={styles.containerReceita}>
          <Image source={icons.receita} style={styles.iconReceita} />
          <View style={styles.containerValor}>
            <Text style={styles.textReceita}>Receitas</Text>
            <Text style={styles.valorReceita}> RS 10.000,00</Text>
          </View>
        </View>
        <View style={styles.containerReceita}>
          <Image source={icons.despesa} style={styles.iconReceita} />
          <View style={styles.containerValor}>
            <Text style={styles.textReceita}>Despesas</Text>
            <Text style={styles.valorReceita}> RS 3.000,00</Text>
          </View>
        </View>
      </View>

      <View style={styles.headerList}>
        <Text style={styles.textUltimo}>Últimos Lançamentos</Text>
        <TouchableOpacity>
          <Text style={styles.textTodos}>Ver Todos</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={lancamentos}
        contentContainerStyle={styles.List}
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
      <View style={styles.containerFooter}>
        <TouchableOpacity onPress={Add}>
          <Image style={styles.btnAdd} source={icons.add} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;
