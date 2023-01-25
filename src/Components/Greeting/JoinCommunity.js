import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./styles";
import discordIcon from "../../assets/images/Discord Icon.svg";

function JoinCommunity() {
  return (
    <View style={styles.joinCommView}>
      <View style={styles.joinustextView}>
        <Text style={styles.joinustext}>
          Join and help us in Building AirVoice!
        </Text>
      </View>
      <View style={styles.joinusButtonView}>
        <Image
          style={styles.discordImage}
          source={{
            uri: discordIcon,
          }}
          alt="Alternate Text "
        />
        <Text style={styles.btnFont}>Community</Text>
      </View>
    </View>
  );
}

export default JoinCommunity;
