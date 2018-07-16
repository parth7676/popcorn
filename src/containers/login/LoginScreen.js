import React from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import makeSelectLoginPage from './selector';
import { createStructuredSelector } from 'reselect';

class LoginScreen extends React.Component {
  render() {
    console.log(this.props);
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
          Screen A
      </Text>
        <Text style={styles.instructions}>
          This is great
      </Text>
        <Button onPress={() => this.props.navigation.navigate('Two')} title="Button"></Button>
      </View >
    )
  }
}

LoginScreen.propTypes = {
  LoginPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);