import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from "./styles";
 
const FeedCard = ({ imageSource, title, author, date }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};



export default FeedCard;
