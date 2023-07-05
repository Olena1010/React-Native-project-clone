import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useKeyboardListener } from "../helpers/hooks";
import { colors } from "../helpers/vars";

export const LoginScreen = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [userLoginState, setUserLoginState] = useState(initialState);
  const [isFocused, setIsFocused] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isKeyboardShown = useKeyboardListener();

  const onLogin = () => {
    const { email, password } = userLoginState;
    if (!email || !password) {
      alert("необхідно заповнити всі поля");
    }

    console.log(userLoginState);
    setUserLoginState(initialState);
  };

  return (
    <View style={{ ...styles.form, marginBottom: !isKeyboardShown ? 0 : -185 }}>
      <Text style={styles.formTitle}>Логін</Text>

      <TextInput
        placeholder="Адреса електронної пошти"
        placeholderTextColor={colors.placeholderTextColor}
        value={userLoginState.email}
        onChangeText={(value) =>
          setUserLoginState((state) => ({ ...state, email: value.trim() }))
        }
        style={[styles.input, isFocused === "email" && styles.inputFocused]}
        onFocus={() => {
          setIsFocused("email");
        }}
        onBlur={() => setIsFocused(false)}
        textAlign="left"
      />
      <View>
        <TextInput
          placeholder="Пароль"
          placeholderTextColor={colors.placeholderTextColor}
          value={userLoginState.password}
          onChangeText={(value) =>
            setUserLoginState((state) => ({ ...state, password: value.trim() }))
          }
          style={[
            styles.input,
            isFocused === "password" && styles.inputFocused,
          ]}
          onFocus={() => {
            setIsFocused("password");
          }}
          onBlur={() => setIsFocused(false)}
          textAlign="left"
          secureTextEntry={!showPassword}
        />

        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.passwordToggleButton}
          activeOpacity={0.8}
        >
          <Text style={styles.passwordToggleButtonText}>
            {showPassword ? "Сховати" : "Показати"}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.btnSign}
        title="Логін"
        onPress={onLogin}
        activeOpacity={0.8}
      >
        <Text style={styles.btnText}>Логін</Text>
      </TouchableOpacity>
      <Text style={styles.linkLogin}>Вже є акаунт? Увійти</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    // maxHeight: 489,
    width: "100%",
    position: "absolute",
    bottom: 0,

    backgroundColor: colors.formBackgroundColor,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 78,
  },
  formTitle: {
    fontSize: 30,
    marginBottom: 32,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
  },
  btnSign: {
    height: 51,
    backgroundColor: colors.orange,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 43,
  },
  btnText: {
    fontSize: 16,
    color: colors.btnTextColor,
    fontFamily: "Roboto-Regular",
  },
  linkLogin: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
    color: colors.blue,
  },
  input: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.inputBorderColor,
    backgroundColor: colors.backgroundColor,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    color: colors.inputTextColor,
  },
  inputFocused: {
    borderColor: colors.orange,
  },
  passwordToggleButton: {
    position: "absolute",
    right: 16,
    top: "50%",
    transform: [{ translateY: -17 }],
  },
  passwordToggleButtonText: {
    fontSize: 16,
    color: colors.blue,
    fontFamily: "Roboto-Regular",
  },
});