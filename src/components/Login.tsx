import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <TextInput
        style={""}
        onChangeText={setUsername}
        placeholder="Usuário"
        value={username}
      />
      <TextInput
        style={""}
        placeholder="Senha"
        onChangeText={setPassword}
        secureTextEntry
        value={password}
      />

      <Button
        title="Entrar"
        onPress={() =>
          console.log("Usuário:" + username + " Senha: " + password)
        }
      />
    </View>
  );
}
