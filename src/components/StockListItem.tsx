import React from "react";
import { Text, View } from "./Themed";
import { Link } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MonoText } from "./StyledText";
import Colors from "../constants/Colors";

type Stock = {
  name: string;
  symbol: string;
  percent_change: string;
  close: string;
};

interface StockListItem {
  stock: Stock;
}

export default function StockListItem({ stock }: StockListItem) {
  const change = Number.parseFloat(stock.percent_change);

  function greenOrRedColor(change: number) {
    if (change > 0) {
      return Colors.verdeNeon.text;
    } else {
      return Colors.pink.text;
    }
  }

  return (
    <Link
      href={`/${stock.symbol}`}
      asChild
      style={{
        borderColor: greenOrRedColor(change),
        borderWidth: 2,
        borderRadius: 10,
      }}
    >
      <Pressable style={styles.container}>
        {/* Left container */}
        <View
          style={{
            flex: 1,
            gap: 5,
          }}
        >
          <Text
            style={{
              color: greenOrRedColor(change),
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {stock.symbol}{" "}
            <AntDesign
              onPress={() => console.log("start pressed")}
              name="staro"
              size={15}
              color="white"
            />
          </Text>
          <Text style={{ color: "#c0c0c0" }}>{stock.name}</Text>
        </View>
        {/* Right container */}
        <View style={{ alignItems: "flex-end" }}>
          <MonoText style={styles.price}>
            ${Number.parseFloat(stock.close).toFixed(1)}
          </MonoText>
          <MonoText
            style={{
              color: greenOrRedColor(change),
            }}
          >
            {change > 0 ? "+" : ""}
            {change.toFixed(1)}%
          </MonoText>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  price: {
    color: "white",
  },
});
