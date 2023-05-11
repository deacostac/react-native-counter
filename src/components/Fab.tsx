import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native'

interface Props {
    title: string,
    position: 'left' | 'right',
    onPress: () => void
}

export const Fab = ( {title, onPress, position} :Props ) => {

    const ios = () => {
        return(
                <TouchableOpacity 
                    activeOpacity={ 0.8 }
                    onPress={ onPress }
                    style={ position == 'left' ? styles.fabLocationLeft : styles.fabLocationRight}
                >
                    <View style={ styles.fab }>
                        <Text style={ styles.fabText} >{ title }</Text>
                    </View>
                </TouchableOpacity>
        )      
    }

    const android = () => {
        return (
            <View style={ position == 'left' ? styles.fabLocationLeft : styles.fabLocationRight}>
                <TouchableNativeFeedback 
                    onPress={ onPress }
                    background={ TouchableNativeFeedback.Ripple('#28425B', false, 25)}
                >
                    <View style={ styles.fab }>
                        <Text style={ styles.fabText} >{ title }</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>    
      )
    }

    return Platform.OS === "ios" ? ios() : android()
}




const styles = StyleSheet.create({
    fabLocationLeft: {
        position: 'absolute',
        bottom: 30,
        left: 20
    },
    fabLocationRight:{
        position: 'absolute',
        bottom: 30,
        right: 20
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
