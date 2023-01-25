import { View, Image } from "react-native";
import React from "react";
import styles from "./styles";
import downArrow from "../../../assets/images/downArrow.svg";
import shareIcon from "../../../assets/images/shareIcon.svg";

function TopBar() {
  return (
    <View style={styles.topBarView}>
      <View style={styles.topBarLeft}>
        <Image
          style={styles.iconImage}
          source={{
            uri: downArrow,
          }}
          alt="Alternate Text "
        />
      </View>

      <View style={styles.topBarRight}>
        <Image
          style={styles.iconImage}
          source={{
            uri: shareIcon,
          }}
          alt="Alternate Text "
        />
      </View>
    </View>
  );
}

export default TopBar;
