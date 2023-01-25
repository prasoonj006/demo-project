import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./styles";
import profilepic from "../../assets/images/image 1.svg";
import JoinCommunity from "./JoinCommunity";

function Greeting() {
  return (
    <View style={styles.greetingView}>
      <View style={styles.textimage}>
        <View style={styles.alltext}>
          <Text style={styles.whitetext}>
            Hey
            <Text style={styles.linearGrad}>Anirudh</Text>
          </Text>
          <Text style={styles.subtext}>
            It's nice day to learn something new
          </Text>
        </View>

        <View style={styles.imagebox}>
          <Image
            style={styles.profileImage}
            source={{
              uri: profilepic,
            }}
            width="10px"
            alt="Alternate Text "
          />
        </View>
      </View>
      <View>
        <JoinCommunity />
      </View>
    </View>
  );
}

export default Greeting;
