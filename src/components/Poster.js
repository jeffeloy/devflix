import React from "react";
import { Dimensions } from "react-native";

import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import Hero from "../components/Hero";

const PosterImg = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get("window").height * 40) / 100}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const PosterBottom = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  max-width: 90%;
  font-weight: 700;
  font-size: 18px;
  margin-top: 10px;
  text-transform: capitalize;
  text-align: center;
  line-height: 18px;
  color: #e9ecef;
`;

const TagMenu = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  flex-direction: row;
`;

const Tag = styled.Text`
  font-size: 13px;
  color: #03ca6f;
`;

const Separator = styled.View`
  width: 3px;
  height: 3px;
  background-color: #e9ecef;
  margin: 0px 8px;
  border-radius: 3px;
`;

const Poster = ({ url, content, title, tags }) => {
  return (
    <>
      <PosterImg source={{ uri: url }} resizeMode="stretch">
        <Gradient
          Location={[0, 0.3, 0.6, 0.93]}
          colors={[
            "rgba(0,0,0,0.3)",
            "rgba(0,0,0,0.5)",
            "rgba(0,0,0,0.5)",
            "rgba(0,0,0,1)",
          ]}
        >
          {content}
        </Gradient>
      </PosterImg>
      <PosterBottom>
        <Title>{title}</Title>
        <TagMenu>
          <Tag>{tags[0]}</Tag>
          <Separator />
          <Tag>{tags[1]}</Tag>
        </TagMenu>
      </PosterBottom>
      <Hero />
    </>
  );
};

export default Poster;
