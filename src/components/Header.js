import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 25px 0 25px;
  width: 100%;
`;
const Logo = styled.Image`
  width: 20px;
  height: 40px;
`;
const Menu = styled.Text`
  font-size: 18px;
  color: #e9ecef;
  letter-spacing: 0.1px;
`;
function Header() {
  const navigation = useNavigation();
  return (
    <Container>
      <Logo resizeMode="contain" source={require("../assets/short-logo.png")} />

      <Menu
        onPress={() => {
          navigation.navigate("Playlist");
        }}
      >
        Playlists
      </Menu>
      <Menu>Vídeos</Menu>
      <Menu>Minha Lista</Menu>
    </Container>
  );
}

export default Header;
