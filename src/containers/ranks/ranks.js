import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { StyleSheet, Text, View, Button } from 'react-native'

class Ranks extends React.Component {
    static navigationOptions = {
        headerTitle: 'Ranks',
        drawerLabel: 'Ranks',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F5FCFF',
            },
            welcome: {
                fontSize: 20,
                textAlign: 'center',
                margin: 10,
            },
        });
        return (
            <View>
                <Text style={styles.welcome}>
                    Rank Screen
          </Text>
                <Text style={styles.instructions}>
                    This is great
          </Text>
                <Button onPress={() => this.props.navigation.navigate('Two')} title="Button"></Button>
            </View >
        )
    }
}

Ranks.propTypes = {
    Ranks: PropTypes.array.isRequired
};

Ranks.defaultProps = {
    Ranks: [],
}

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranks);