import { View } from "react-native";
import React from "react";
import MyStatusBar from "../StatusBar/StatusBar";
import Greeting from "../Greeting/Greeting";
import Courses from "../Courses/Courses";
import Articles from "../Articles/Articles";
import Tweets from "../Tweets/Tweets";

function Home() {
  return (
    <View>
      <MyStatusBar />
      <Greeting />
      <Courses />
      <Articles />
      <Tweets />
    </View>
  );
}

export default Home;
