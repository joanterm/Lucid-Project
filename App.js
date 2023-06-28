import { StyleSheet, Text, View, Image, StatusBar } from "react-native"
import { Button } from "@react-native-material/core"
import bg from "./assets/backgrounds/dreamBG.png"

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={bg} style={styles.backgroundImage} />
      <Button title="SETTINGS" />
      <Button title="START" />
      <Button title="CUSTOM" />

      <StatusBar
        barStyle="light-content" // Set the desired status bar style
      />
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
