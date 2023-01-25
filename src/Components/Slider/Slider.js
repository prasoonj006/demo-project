import { Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import { NativeBaseProvider, ScrollView } from "native-base";

import allData from "../../utils/db.json";
import ArticleItem from "../Articles/ArticleItem";
import CourseItem from "../Courses/CourseItem";
import TweetItem from "../Tweets/TweetItem";

function Slider(props) {
  let data = allData[props.type];

  return (
    <View>
      <NativeBaseProvider>
        <Text style={styles.titleText}>{props.title}</Text>
        <Text style={styles.subtitleText}>{props.subtitle}</Text>
        <ScrollView horizontal={true}>
          {data &&
            data.map((item, index) =>
              props.type === "courses" ? (
                <CourseItem key={index} data={item} />
              ) : props.type === "articles" ? (
                <ArticleItem key={index} data={item} />
              ) : props.type === "tweets" ? (
                <TweetItem key={index} data={item} />
              ) : (
                <></>
              )
            )}
        </ScrollView>
      </NativeBaseProvider>
    </View>
  );
}

export default Slider;
