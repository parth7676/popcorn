import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, Button } from 'react-native'
import * as studentActions from './actions';
import { Ionicons } from '@expo/vector-icons';

class Movies extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft: <Ionicons style={{ padding: 20 }} name="md-menu" size={35} color="white" onPress={() => navigation.toggleDrawer()} />,
    });

    constructor(props) {
        super(props);
        this.loadStudents = this.loadStudents.bind(this);
    }

    componentDidMount() {
        // this.loadStudents();
    }
    loadStudents() {

        this.props.actions.loadStudents();
    }

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
                    Screen A
          </Text>
                <Text style={styles.instructions}>
                    This is great
          </Text>
                <Button onPress={() => this.props.navigation.navigate('TV Shows')} title="Button"></Button>
            </View >
        )
    }
}

Movies.propTypes = {
    students: PropTypes.array.isRequired,
    state: PropTypes.object.isRequired,
};

Movies.defaultProps = {
    students: [],
    actions: {},
}

const mapStateToProps = state => ({

});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(studentActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);