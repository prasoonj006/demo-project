import { View, Image, Text } from "react-native";
import React from "react";
import productImage from "../../../assets/images/productImage.svg";
import styles from "./styles";

function ProductDisplay() {
  return (
    <View>
      <View>
        <Image
          style={styles.productImage}
          source={{
            uri: productImage,
          }}
          alt="Alternate Text "
        />
      </View>

      <View>
        <Text style={styles.titleText}>Fundamentals of Product Des..</Text>
        <Text style={styles.subtitleText}>
          Chapter 2 - What is Product Design?
        </Text>
      </View>

      <View style={styles.optionsView}>
        <View>
          <Text style={styles.viewChapterNotes}>View Chapter Notes</Text>
          <Text style={styles.viewChapterNotes}>Attemp Quiz</Text>
        </View>
      </View>
    </View>
  );
}

export default ProductDisplay;
