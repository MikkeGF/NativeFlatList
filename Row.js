import React from 'react'
import { View, Text } from 'react-native'

const Row = ({ person }) => {
    return (
        <View>
            <Text>{person.lastname}</Text>
        </View>
    )
}

export default Row
