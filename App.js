import { StyleSheet, Text, View, Image, StatusBar } from "react-native"
import { Button, Stack } from "@react-native-material/core"
import bg from "./assets/backgrounds/dreamBG.png"
import AutomaticPage from "./AutomaticPage"

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={bg} style={styles.backgroundImage} />
      <Text style={styles.title}>Dream Nav</Text>
      <View style={styles.buttonsDiv}>
        <Stack fill in center spacing={20}>
          <Button
            title="SETTINGS"
            onPress={() => {
              alert(
                "You pressed settings, this button should take you to another page where you can choose how you want your app to work"
              )
            }}
          />
          <Button
            title="START"
            onPress={() => {
              alert(`You pressed start! This button should start the program `)
            }}
          />
          <Button
            title="CUSTOM"
            onPress={() => {
              alert(
                `This button should let you upload your own sound to the app`
              )
            }}
          />
          <AutomaticPage />
        </Stack>
      </View>
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
  title: {
    color: "white",
    marginTop: 150,
    marginRight: 200,
    fontSize: 28,
    fontWeight: 600,
  },
  buttonsDiv: {
    borderColor: "red",
    marginTop: 100,
  },
})
