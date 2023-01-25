import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./styles";
import twtImage from "../../assets/images/image 29.svg";

function TweetItem(props) {
  let item = props.data;
  return (
    <View>
      {/* View for only box */}

      <View
        style={styles.onlybox}
        // {...(styles.onlybox.backgroundColor = `orange`)}
      >
        <View style={styles.twtPic}>
          <Image
            style={styles.twtImage}
            source={{
              uri: twtImage,
            }}
            alt="Alternate Text "
          />
        </View>
        <View style={styles.twtText}>
          <View style={{ width: "35%" }}>
            <Text style={styles.productTag}>{item.tag}</Text>
          </View>
          <Text style={styles.prodTitle}>{item.title}</Text>
          <Text style={styles.twtName}>{item.name}</Text>
        </View>
      </View>
    </View>
  );
}

export default TweetItem;
