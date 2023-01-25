import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import mobileSignal from "../../assets/images/Mobile Signal.svg";
import battery from "../../assets/images/Battery.svg";
import wifi from "../../assets/images/Wifi.svg";

function MyStatusBar() {
  const STYLES = ["default", "dark-content", "light-content"];
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[2]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} barStyle={statusBarStyle} hidden="false" />
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>9:41</Text>
        <Image
          style={styles.statusImage}
          source={{
            uri: mobileSignal,
          }}
          width="10px"
          alt="Alternate Text "
        />
        <Image
          style={styles.statusImage}
          source={{
            uri: wifi,
          }}
          width="10px"
          alt="Alternate Text "
        />
        <Image
          style={styles.statusImage}
          source={{
            uri: battery,
          }}
          width="10px"
          alt="Alternate Text "
        />
      </View>
    </SafeAreaView>
  );
}

export default MyStatusBar;
