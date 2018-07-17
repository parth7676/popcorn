import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, Button } from 'react-native'

class Popular extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Popular</Text>
            </View >
        )
    }
}

Popular.propTypes = {
};

Popular.defaultProps = {
}

const mapStateToProps = state => ({

});

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular);