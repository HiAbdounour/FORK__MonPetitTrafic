import { View,Text,Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import './index.css';

function Home(){

    return(
        <SafeAreaView className='bodyview'>

            <View className="header">
                <View className='logoview'>
                    <Image
                        source={require('../../assets/images/logo.png')}
                        className='home_logo'
                    />
                </View>
                <Text className='version_label'>
                    v0.0.1a
                </Text>
            </View>
            
        </SafeAreaView>
    )
}

export default Home