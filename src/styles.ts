import { StyleSheet } from "react-native";

export default StyleSheet.create({

    // App Background color
    bodyview:{
        backgroundColor: '#ffdfae'
    },


    // =========== Main page (index.tsx) ===========
    header:{ // logo + version container
        flexDirection: 'row',
        justifyContent: 'center'
    },

    logoview:{ // logo container
        marginTop: 20,
        marginBottom: 20        
    },

    home_logo:{
        width: 300,
        height: 300,
        borderRadius: '24px'
    },

    version_label:{
        fontSize: 12,
        color: 'gray',
        verticalAlign: 'bottom'
    },

    body:{ // home_icons + button container
        margin: 10
    },

    home_prbs:{ // home_icons container (with labels)
        borderWidth: 2,
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: '36px',
        marginBottom: 20,
        height: 250
    },

    last_modif_title:{
        fontSize: 18,
        fontWeight: 600,
        textAlign: 'center'
    },

    last_modif_date:{
        fontSize: 20,
        fontWeight: 700,
        textAlign: 'center',
        marginBottom: 10
    },

    home_alert_icons:{ // home_icons container (without labels)
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },

    line_icon:{ // NB : Use only for lines displayed on Home page
        width: 45,
        height: 45
    },

    button_container:{

    },


    // =========== Preferences page (settings.tsx) ===========
    toggle_container:{
        flexDirection: 'row',
        margin: 10
    },

    toggle_text:{
        fontSize: 12.5,
        fontWeight: 500,
        marginVertical: 8.5
    },
    
    checkbox_line:{ // checkbox + line icon container
        flexDirection:'row',
        margin: 2.5,
        marginLeft: 10
    },
    

    // =========== FOR EVERYTHING ===========
    title:{ // h1 tag equivalent
        fontSize: 50,
        textAlign: 'left',
        marginTop: 10,
        marginLeft: 10,
        fontWeight: 600
    },


    // =========== USED ONLY FOR DEV PHASES ===========
    // Should all start by DEV_ to be easily identifiable
    DEV_to_complete:{
        color: 'red',
        fontStyle: 'italic'
    }

})