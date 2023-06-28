import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Image } from "react-native"
import bg from "./assets/backgrounds/dreamBG.png"
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={bg} style={styles.backgroundImage} />
      <Text>Start</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
})
