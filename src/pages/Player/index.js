import React from "react";
import { WebView } from "react-native-webview";
import * as ScreenOrientation from "expo-screen-orientation";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #333333;
`;
async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.LANDSCAPE
  );
}
function Player({ navigation, route }) {
  changeScreenOrientation();

  const videoId = route.params.videoId;
  const videoURL = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Container>
      <WebView
        source={{ uri: videoURL }}
        allowsFullscreenVideo={true}
        style={{ height: "35%" }}
      />
    </Container>
  );
}

export default Player;
