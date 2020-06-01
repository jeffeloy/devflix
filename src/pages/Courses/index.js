import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Style from "./style";
import logoImg from "../../assets/logo.png";

export default function Courses({ navigation }) {
  return (
    <View style={Style.container}>
      <View style={Style.header}>
        <Image source={logoImg} />
      </View>

      <Text style={Style.title}>Cursos</Text>

      <View style={Style.content}>
        <Text style={Style.coursesName}>Desenvolvimento de Sistemas</Text>
        <TouchableOpacity
          style={Style.coursesSubjects}
          onPress={() => navigation.navigate("Subjects")}
        >
          <Text style={Style.coursesSubjectsText}>
            Ver disciplinas do curso
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
