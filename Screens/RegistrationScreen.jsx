import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
       console.log(state);
       setState(initialState);
       setIsShowPassword(false);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>
      <View style={styles.form}>
        <View style={styles.image}>
          <TouchableOpacity style={styles.btnAddImage}>
            <Text style={styles.textAddImage}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Реєстрація</Text>
        <TextInput
          style={styles.input}
          placeholder="Логін"
          value={state.login}
          onFocus={() => setIsShowKeyboard(true)}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, login: value }))
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
          value={state.email}
          onFocus={() => setIsShowKeyboard(true)}
          onChangeText={(value) =>
            setState((prevState) => ({ ...prevState, email: value }))
          }
        />
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            value={state.password}
            secureTextEntry={isShowPassword ? false : true}
            onFocus={() => setIsShowKeyboard(true)}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, password: value }))
            }
          />
          <TouchableOpacity
            style={styles.btnShowPassword}
            onPress={() => setIsShowPassword(true)}
          >
            <Text style={styles.textShowPassword}>
              {isShowPassword ? "Показати" : "Приховати"}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={keyboardHide}
        >
          <Text style={styles.text}>Реєстрація</Text>
        </TouchableOpacity>
        <Text style={styles.link}>Вже є акаунт? Увійти</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  form: {
    height: 549,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
    paddingTop: 92,
    paddingHorizontal: 16,
    alignItems: "center",
  },

  image: {
    position: "absolute",
    width: 132,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    top: -50,
  },

  btnAddImage: {
    position: "absolute",
    bottom: 14,
    right: -12,
    width: 25,
    height: 25,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FF6C00",
    color: "#FF6C00",
    alignItems: "center",
  },

  textAddImage: {
    fontSize: 15,
    color: "#FF6C00",
  },

  title: {
    marginBottom: 32,
    fontSize: 30,
    fontWeight: 500,
    color: "#212121",
  },

  input: {
    width: "100%",
    height: 50,
    marginBottom: 16,
    padding: 16,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },

  inputBox: {
    width: "100%",
    position: "relative",
  },

  btnShowPassword: {
    position: "absolute",
    right: 10,
    top: 14,
  },

  textShowPassword: {
    color: "#1B4371",
  },

  button: {
    width: "100%",
    paddingVertical: 16,
    marginTop: 20,
    marginBottom: 16,
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },

  text: {
    fontSize: 16,
    color: "#FFFFFF",
  },

  link: {
    color: "#1B4371",
  },
});
