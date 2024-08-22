import VerticalSlider from 'rn-vertical-slider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BarStyles } from '../styles/BarStyles';
import * as Haptics from 'expo-haptics';


const BarGraph = ({ value, setValue }) => {
    const onValueChange = (v) => {
        Haptics.selectionAsync()
        setValue(v)
    }
    return (
        <GestureHandlerRootView style={{flexDirection: 'column', alignItems: 'flex-start' }}>
            <VerticalSlider
                value={value}
                onChange={(v) => onValueChange(v)}
                height={BarStyles.barGraph.height}
                width={500}
                step={1}
                min={0}
                max={100}
                borderRadius={5}
                containerStyle={{ backgroundColor: BarStyles.barGraph.backgroundColor, borderRadius: 10 }}
                sliderStyle={{ backgroundColor: BarStyles.barGraph.backgroundColor, borderRadius: 0 }}
                minimumTrackTintColor={BarStyles.barGraph.barColor}
                maximumTrackTintColor={BarStyles.barGraph.barColor}
            />
        </GestureHandlerRootView>
    )
}

export default BarGraph