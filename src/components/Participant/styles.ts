import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    name: {
        flex: 1,
        fontSize: 16,
        color: '#FFF',
        marginLeft: 16,
    },
    buttonText: {
        fontSize: 24,
        color: '#FFF',
      },
      button: {
        backgroundColor: '#E23C44',
        width: 56,
        height: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
})