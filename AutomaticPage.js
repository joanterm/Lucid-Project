import { useState, useEffect } from "react"
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from "react-native"
import { Button, Stack } from "@react-native-material/core"
import { Audio } from 'expo-av'

const AutomaticPage = () => {
    const [countdown, setCountdown] = useState(20) // 3 seconds
    const [isRunning, setIsRunning] = useState(false)
    const [sound, setSound] = useState()

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync( require('./soundtest.mp3'))
        setSound(sound);
        await sound.playAsync()
    }

    //COUNTDOWN HAPPENS HERE
    useEffect(() => {
        let interval
        if (isRunning === true) {
            console.log("it's counting")
            interval = setInterval(() => {
                setCountdown((prev) => {
                    if (prev === 0) {
                        clearInterval(interval)
                        setIsRunning(false)
                        return 0
                    } 
                    if (prev % 5 === 0 && prev !== 20) {
                        console.log("music here")
                        playSound()              
                    }
                    else {
                        return prev - 1
                    }     
                    return prev - 1               
                })
            }, 1000)
        } else {
            console.log("it's NOT counting")
        }
        return () => clearInterval(interval)
    }, [isRunning]);
    console.log("countdown", countdown)

    //TOGLING BETWEEN START/STOP -> TOGGLING BETWEEN TRUE/FALSE,
    //IF COUNTDOWN REACHES 0, RESET IT TO ORIGINAL VALUE
    const handleStartStop = () => {
        setIsRunning(!isRunning)
        if (countdown === 0) {
            setCountdown(20)
        }
    };

    // 180 SECONDS BECOMES VISIBLE AS 03:00
    // const formatTime = () => {
    //     const minutes = Math.floor(countdown / 60);
    //     const seconds = countdown % 60;
    //     console.log(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`)
        
    //     return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    //   };
    // console.log(formatTime());   

    return ( 
        <View>
            {/* <Text style={styles.timer}>{formatTime()}</Text> */}
            <TouchableOpacity style={styles.button} onPress={handleStartStop}>
                <Text style={styles.buttonText}>{isRunning ? 'STOP' : 'START'}</Text>
            </TouchableOpacity>
            {/* <Button title="PLAY" onPress={playSound}/> */}
        </View>
     );
}

const styles = StyleSheet.create({
    timer: {
      fontSize: 48,
      marginBottom: 20,
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 24,
    },
  });

 
export default AutomaticPage;