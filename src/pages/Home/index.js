import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import Header from "../../components/Header";
import Videos from "../../components/Videos";

import Poster from "../../components/Poster";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #333333;
`;

const thumbs = [
  "http://i3.ytimg.com/vi/KTOq047D1nk/maxresdefault.jpg",
  "http://i3.ytimg.com/vi/WVtijTZPZck/maxresdefault.jpg",
  "http://i3.ytimg.com/vi/sx4hAHhO9CY/maxresdefault.jpg",
  "http://i3.ytimg.com/vi/pdFqfOTmd60/maxresdefault.jpg",
  "http://i3.ytimg.com/vi/WPTQ8fZ0aQk/maxresdefault.jpg",
];

function Home() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Poster
          url={"http://i3.ytimg.com/vi/VsU6p7DHVtA/maxresdefault.jpg"}
          title={
            "React Native Web, Expo, React.memo, O Universo do React Native"
          }
          tags={["React Native", "Expo"]}
          content={<Header />}
        ></Poster>
        <Videos label="Recomendados" thumbs={thumbs} />
        <Videos label="Lançamentos" thumbs={thumbs} />
        <Videos label="Mais vistos" thumbs={thumbs} />
      </Container>
    </>
  );
}

export default Home;
