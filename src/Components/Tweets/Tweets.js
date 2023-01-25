import { View } from "react-native";
import React from "react";
import Slider from "../Slider/Slider";

function Tweets() {
  return (
    <View>
      <Slider
        title="Tweet Shorts"
        subtitle="Listen to audio versions of top web articles"
        type = "tweets"
      ></Slider>
    </View>
  );
}

export default Tweets;
