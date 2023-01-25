import { Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigate } from "react-router-dom";

function ArticleItem(props) {
  let item = props.data;

  const navigate = useNavigate();
  const onclicked = () => {
    navigate("/player", { state: { index: item.index } });
  };
  return (
    <View
      style={styles.itemBox}
      onClick={() => {
        onclicked();
      }}
    >
      {/* View for only box */}

      <View
        style={styles.onlybox}
        {...(styles.onlybox.backgroundColor = `orange`)}
      ></View>
      {/* View for only text */}
      <View>
        <Text style={styles.itemTitle}>
          {item.title} {item.color}
        </Text>
        <Text style={styles.itemSubTitle}>
          {item.chapters} Chapters · {item.hours} Hours
        </Text>
      </View>
    </View>
  );
}

export default ArticleItem;
