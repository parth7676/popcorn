import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, Button } from 'react-native'

class Upcoming extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Upcoming</Text>
            </View >
        )
    }
}

Upcoming.propTypes = {
};

Upcoming.defaultProps = {
}

const mapStateToProps = state => ({

});

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming);