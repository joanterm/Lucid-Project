import { useState, useEffect } from "react"
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from "react-native"
import { Button, Stack } from "@react-native-material/core"

const AutomaticPage = () => {
    const [countdown, setCountdown] = useState(3) // 3 minutes
    const [isRunning, setIsRunning] = useState(false)

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
                    } else {
                        return prev - 1
                    }                    
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
            setCountdown(6)
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