import { View } from "react-native";
import React from "react";
import Slider from "../Slider/Slider";

function Articles() {
  return (
    <View>
      <Slider
        title="Articles Read"
        subtitle="Listen to audio versions of top web articles"
        type="articles"
      ></Slider>
    </View>
  );
}

export default Articles;
