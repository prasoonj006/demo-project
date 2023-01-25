import { View } from "react-native";
import React from "react";
import MyStatusBar from "../StatusBar/StatusBar";
import TopBar from "./ProductDesc/TopBar";
import ProductDisplay from "./ProductDesc/ProductDisplay";
import Player from "./Player/Player";
import audios from "../../utils/audio";
import Chapter from "./Chapters/Chapter";
import { useLocation } from "react-router-dom";

function PlayerPage() {
  const location = useLocation();
  let index = location.state.index;
  return (
    <View style={{ width: "100%" }}>
      <MyStatusBar />
      <TopBar />
      <ProductDisplay  />
      <Player
        audios={audios}
        title={audios[index].title}
        artist={audios[index].artist}
        audioSrc={audios[index].audioSrc}
        length={audios.length}
      />
      <Chapter />
    </View>
  );
}

export default PlayerPage;
