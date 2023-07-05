import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#676767',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titlecontainer:{
        backgroundColor: 'rgba(145,255,133,0.8)',
        paddingVertical: 15, 
        width: 400,
        borderRadius: 12,
        marginBottom: 32,
    },
    title:{
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    datecontainer:{
        alignSelf: 'center',
        flexDirection: 'row',
        gap: 1,
    },
    dateText:{
        fontSize: 18,
    },
    toContainer:{
        borderRadius: 12,
        width: 380,
        backgroundColor: 'rgba(210,135,255,0.9)',
    },
    titleto:{
        paddingLeft: 12,
        fontSize: 24,
    },
    inputContainer:{
        backgroundColor: 'rgba(210,135,255,0.5)',    },


});
export default styles;