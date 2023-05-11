import React, {useState} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab'

export const CounterScreen = () => {

    const [contador, setContador] = useState(0)

    const handleCounter = (value: number) => {
        setContador(contador+value)
    }

  return (
    <View style={styles.container}>
        <Text  style={styles.title}>
            Contador: {contador}
        </Text>
        <Fab 
            title='-1'
            onPress={() => handleCounter(-1)}
            position="left"
        />
         <Fab 
            title='+1'
            onPress={() => handleCounter(+1)}
            position="right"
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
    }
})