import React from "react";
import { View, Pressable, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";

import globalStyle from '../../../Global.styles.js'
import styles from './Title.styles.js'

const Title = ({ title = 'Home', icon, refer }) => {
    return (
        <View>
            <View style={ { flexDirection: 'row', alignItems: 'center' } }>
                {
                    icon ?
                        <Pressable onPress={ () => { refer.current.openDrawer() } }>
                            <FontAwesome5 name={ icon } light style={ [globalStyle.textDark, styles.icon] } />
                        </Pressable> :
                        ''
                }
                <Text style={ [globalStyle.textDark, styles.title] }>{ title }</Text>
            </View>
        </View>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    isHome: PropTypes.bool,
}

export default Title