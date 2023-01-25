import {  View} from "react-native";
import React from "react";
import Slider from "../Slider/Slider";

function Courses() {
  return (
    <View>
      <Slider
        title="Courses for you"
        subtitle="Listen to byte-sized audio courses from top thinkers"
        type = "courses"
      ></Slider>
    </View>
  );
}

export default Courses;
