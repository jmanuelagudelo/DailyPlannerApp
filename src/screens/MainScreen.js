import React, {useState,useEffect} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    SafeAreaView,

} from 'react-native';
import {Slider, Icon} from '@rneui/themed';


import styles from '../styles/mainStyles'
import Colors1 from '../styles/constColors'



const getMoodInfo = moodValue => {
    let moodText = '';
    let moodColor = '';

    if (moodValue < 20) {
        moodText = 'Very Unsatisfied';
        moodColor = Colors1.veryBad;
    } else if (moodValue >= 20 && moodValue < 40) {
        moodText = 'Unsatisfied';
        moodColor = Colors1.bad;
    } else if (moodValue >= 40 && moodValue < 60) {
        moodText = 'Neutral';
        moodColor = Colors1.neutral;
    } else if (moodValue >= 60 && moodValue < 80) {
        moodText = 'Satisfied';
        moodColor = Colors1.good;
    } else if (moodValue >= 80) {
        moodText = 'Very Satisfied';
        moodColor = Colors1.veryGood;
    }
    return { moodText, moodColor };
};


export default MainScreen = () => {

    //states

    const [moodValue, setmoodValue] = useState(50);
    const { moodText, moodColor } = getMoodInfo(moodValue);

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: moodColor,
            }}>
        <View style={styles.container}>
            <View style={styles.tittlecontainer}>
              
                <Text style={styles.tittle}>How are you?</Text>
            </View>
            <View style={styles.currentmoodcontainer}>
                <Text style={styles.currentmText}>{moodText}</Text>
            </View>

            <View style={styles.slidercontainer}>
                <Slider
                    value={moodValue}
                    onValueChange={value => setmoodValue(value)}
                    onSlidingComplete={setmoodValue}
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    allowTouchTrack={true}
                    minimumTrackTintColor={moodColor}
                    maximumTrackTintColor={moodColor}
                    trackStyle={{
                        height: 40,
                        width: 300,
                        borderRadius: 20,
                        backgroundColor: "transparent",
                        bordercolor: '#000000',
                        borderWidth: 1,
                    }}
                    thumbProps={{
                        children: (
                            <Icon
                            name="circle"
                            type="font-awesome"
                            size={22}
                            reverse
                            containerStyle={{ bottom: 11, right: 12 }}
                            />
                        ),
                    }}
                />
            </View>
            <TouchableOpacity style={{}}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>    
        </SafeAreaView>
    );
}
