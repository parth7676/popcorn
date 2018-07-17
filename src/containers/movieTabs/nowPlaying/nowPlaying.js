import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

class NowPlaying extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft: <Ionicons style={{ padding: 20 }} name="md-menu" size={35} color="white" onPress={() => navigation.toggleDrawer()} />,
    });

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Now Playing</Text>
            </View >
        )
    }
}

NowPlaying.propTypes = {
};

NowPlaying.defaultProps = {
}

const mapStateToProps = state => ({

});

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);