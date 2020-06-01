import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import Style from "./style";
import logoImg from "../../assets/logo.png";

export default function Subjects({ navigation }) {
  return (
    <View style={Style.container}>
      <View style={Style.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={18} color="#000000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
