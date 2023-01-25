import { View, Image, Text } from "react-native";
import React from "react";
import chapterIcon from "../../../assets/images/chapter.svg";
import styles from "./styles";

function Chapter() {
  return (
    <View>
      <View style={styles.chapterView}>
        <Image
          style={styles.chapterIcon}
          source={{
            uri: chapterIcon,
          }}
          alt="Alternate Text "
        />
        <Text style={styles.chapterText}>Chapters</Text>
      </View>
    </View>
  );
}

export default Chapter;
