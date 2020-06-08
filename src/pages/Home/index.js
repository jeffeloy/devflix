import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import * as ScreenOrientation from "expo-screen-orientation";

import videos from "../../database/videos.json";

import Header from "../../components/Header";
import Videos from "../../components/Videos";
import Poster from "../../components/Poster";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #333333;
`;

async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
}
function Home() {
  changeScreenOrientation();
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

        <Videos label="Recomendados" videos={videos} />
        <Videos label="Lançamentos" videos={videos} />
        <Videos label="Mais vistos" videos={videos} />
      </Container>
    </>
  );
}

export default Home;
