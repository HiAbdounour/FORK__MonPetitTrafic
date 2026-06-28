import { View,Text,Image } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from '@/styles';
import { logo } from '@/constants/logo';

function Home(){

    return(
        <SafeAreaView style={styles.bodyview}>

            <View style={styles.header}>
                <View style={styles.logoview}>
                    <Image
                        source={logo.logox}
                        style={styles.home_logo}
                    />
                </View>
                <Text style={styles.version_label}>
                    v0.0.1a
                </Text>
            </View>
            
        </SafeAreaView>
    )
}

export default Home