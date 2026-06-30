import { View,Text,Image,FlatList } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from '@/styles';
import { get_lines_data } from '@/app/lines_data';
import CheckBox from '../components/CheckBox';
import Toggle from '../components/Toggle';

function Preferences(){

    return(
        <SafeAreaView style={styles.bodyview}>

            <FlatList
                ListHeaderComponent={() => (
                    <View>
                        <View>
                            <Text style={styles.title}>
                                Préférences
                            </Text>
                        </View>
                        <View style={styles.toggle_container}>
                            <Text style={styles.toggle_text}>
                                (Dé)Activer les notifications
                            </Text>
                            <Toggle/>
                        </View>
                    </View>
                )}
                data={get_lines_data()}
                renderItem={({ item }) => (
                    <View style={styles.checkbox_line}>
                        <CheckBox line_name={item.name}/>
                        <Image
                            source={item.icon}
                            style={styles.line_icon}
                        />
                    </View>
                )}
                keyExtractor={(item)=>item.name}
                ItemSeparatorComponent={() => <View style={{marginTop:2.5,marginBottom:2.5}}/>}
            />

        </SafeAreaView>
    )
}

export default Preferences