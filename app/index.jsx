import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { useState } from 'react'
import { ViewStyles } from '../styles/ViewStyles'
import { TextStyles } from '../styles/TextStyles'
import BarGraph from '@/components/BarGraph'

const index = () => {
    const [value, setValue] = useState(50)
    return (
        <SafeAreaView style={ViewStyles.safeView}>
            <Text style={[TextStyles.primaryText, {marginTop: 50}]}>
                {value}
            </Text>
            <BarGraph value={value} setValue={setValue} />
        </SafeAreaView>
    )
}

export default index

const styles = StyleSheet.create({})