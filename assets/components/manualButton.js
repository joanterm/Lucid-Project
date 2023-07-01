import React from "react"
import { Button } from "@react-native-material/core"

const MyButton = () => {
  const handlePress = () => {
    alert("You pressed manual sleep")
  }
  return <Button onPress={handlePress} title="SLEEP"></Button>
}

export default MyButton
