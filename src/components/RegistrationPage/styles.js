import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    content: {
        flex: 1
    },
    logoContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    formContainer: {
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 20,
    },
    buttonContainer: {
        backgroundColor: "#2980b9",
        padding: 15
    },
    buttonText: {
        color: "#FFF",
        textAlign: "center"
    },
    notMemberButtonContainer:{
        padding:10,
        backgroundColor: '#3498db',
        borderRadius:5,
        opacity:0.5
    }
});
