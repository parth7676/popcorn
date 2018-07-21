import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import { createStructuredSelector } from 'reselect';
import { Ionicons } from '@expo/vector-icons';
import { Tab, Tabs } from 'native-base';

class TVShows extends React.Component {

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
            },
            slider:
            {
                height: 200
            },
            poster: {
                width: 100,
                height: 150,
                marginLeft: 20,
                position: 'absolute',
                marginTop: 150,
                zIndex: 1,
            },
            descriptionContainer: {
                backgroundColor: '#2A3131',
                paddingTop: 15,
                paddingRight: 15,
                height: 120
            },
            descriptionDetails: {
                marginLeft: 135,
                fontSize: 12,
                color: '#bbbcbc'
            },
            descriptionTitle: {
                marginLeft: 135,
                fontWeight: 'bold',
                fontSize: 25,
                color: '#fff'
            }

        });

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.slider}>
                    <ImageSlider images={[
                        'http://placeimg.com/640/480/any',
                        'http://placeimg.com/640/480/any',
                        'http://placeimg.com/640/480/any'
                    ]} />
                </View>
                {/* <View style={styles.poster}></View> */}
                <Image style={styles.poster} source={{ uri: 'http://www.media.glamsham.com/download/poster/images/kaabil/07-kaabil.jpg' }} />
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionDetails}>PG-13 | 2018 | 1 hr 13 mins</Text>
                    <Text style={styles.descriptionTitle}>Kaabil</Text>
                    <Text style={{ color: '#fff', marginLeft: 135 }}>Drama, Action, Horror</Text>
                </View>
                <Tabs>
                    <Tab heading="INFO" tabStyle={{ backgroundColor: '#2A3131' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#2A3131' }} activeTextStyle={{ color: '#fff', fontWeight: 'normal' }}>
                    </Tab>
                    <Tab heading="CAST" tabStyle={{ backgroundColor: '#2A3131' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#2A3131' }} activeTextStyle={{ color: '#fff', fontWeight: 'normal' }}>
                    </Tab>
                    <Tab heading="REVIEWS" tabStyle={{ backgroundColor: '#2A3131' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#2A3131' }} activeTextStyle={{ color: '#fff', fontWeight: 'normal' }}>
                    </Tab>
                </Tabs>
            </SafeAreaView>
        );
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
