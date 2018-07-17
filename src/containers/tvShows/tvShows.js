import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { Ionicons } from '@expo/vector-icons';

class TVShows extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        drawerLabel: 'TV Shows',
        headerLeft: <Ionicons style={{ padding: 20 }} name="md-menu" size={35} color="white" onPress={() => navigation.toggleDrawer()} />,
    });

    render() {
        return (
            <View>
                <Text>I am TVShows page</Text>
            </View>
        )
    }
}

TVShows.propTypes = {
    actions: PropTypes.object.isRequired,
};

TVShows.defaultProps = {
    actions: {},
}

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TVShows);
