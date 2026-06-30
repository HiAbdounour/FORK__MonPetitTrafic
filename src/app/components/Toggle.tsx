import { useState } from 'react'
import { Pressable,View,StyleSheet } from 'react-native'

function StyleToggle(){
    return StyleSheet.create({
        toggle:{
            borderWidth: 5,
            borderRadius: '9999px',
            borderColor: 'grey',
            width: 100,
            height: 40,
            marginLeft: 10
        },

        boxOff:{
            backgroundColor: 'grey'
        },
        boxOn:{
            backgroundColor: 'lightgreen'
        },


        toggleCircle:{
            borderWidth: 5,
            borderRadius: '9999px',
            width: 32,
            height: 32
        },

        circleOff:{
            margin: 0,
            backgroundColor:'white',
            borderColor: 'black'
        },
        circleOn:{
            margin: 0,
            marginLeft: 60,
            backgroundColor: 'white',
            borderColor: 'grey'
        }
    })
}

function Toggle(){
    const [isActive,setIsActive] = useState<boolean>(false);
    const styles = StyleToggle();

    const handleSwitch = () => {
        setIsActive(!isActive);
    }

    return(
        <Pressable onPress={handleSwitch}>
            <View style={isActive ? [styles.toggle,styles.boxOn] : [styles.toggle,styles.boxOff]}>
                <View style={isActive ? [styles.toggleCircle,styles.circleOn] : [styles.toggleCircle,styles.circleOff]}></View>
            </View>
        </Pressable>
    )
}

export default Toggle