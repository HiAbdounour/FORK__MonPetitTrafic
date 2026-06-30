import { useState } from 'react'
import { Pressable,View,StyleSheet } from 'react-native'

function StyleToggle(){
    return StyleSheet.create({

    })
}

function Toggle(){
    const [isActive,setIsActive] = useState<boolean>(false);
    const styles = StyleToggle();

    const handleSwitch = () => {
        setIsActive(!isActive);
    }

    return(
        <Pressable
            onPress={handleSwitch}
        >
            <View>
                <View></View>
            </View>
        </Pressable>
    )
}

export default Toggle