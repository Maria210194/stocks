import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "@/src/components/Themed";
import top5 from "@/assets/data/top5.json";
import StockListItem from "@/src/components/StockListItem";

export default function TabOneScreen() {
  const stocks = Object.values(top5);
  return (
    <View style={styles.container}>
      <FlatList
        data={stocks}
        renderItem={({ item }) => <StockListItem stock={item} />}
        contentContainerStyle={{ gap: 15, padding: 15 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
