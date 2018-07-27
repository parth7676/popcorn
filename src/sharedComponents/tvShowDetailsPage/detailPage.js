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
import { Tab, Tabs } from 'native-base';
import InfoTab from './infoTab';
import CastTab from './castTab';
import ReviewTab from './reviewsTab';
import SeasonsTab from './seasonTab';
import * as detailActions from './actions';
import { API_KEY, colorPellete } from '../../constants';
import { timeFormatter } from '../../common';

class DetailsPage extends React.Component {

    componentDidMount() {
        this.props.actions.loadTVShowDetails(API_KEY, this.props.navigation.state.params.tvShowId);
        this.props.actions.loadTVShowExternalIds(API_KEY, this.props.navigation.state.params.tvShowId);
    }

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
                backgroundColor: colorPellete.black,
                paddingTop: 15,
                paddingRight: 15,
                height: 120
            },
            descriptionDetails: {
                marginLeft: 135,
                fontSize: 12,
                color: colorPellete.grey
            },
            descriptionTitle: {
                marginLeft: 135,
                fontWeight: 'bold',
                fontSize: 20,
                color: colorPellete.white
            },
            badge: {
                marginLeft: 135,
                backgroundColor: 'green',
                alignSelf: 'flex-start',
                padding: 2,
                borderRadius: 5
            },
            badgeText: {
                fontSize: 12,
                color: colorPellete.white
            }

        });
        const tvShowDetails = this.props.tvShowDetails.toJS().tvShowDetails;
        let imageConfig = this.props.apiConfig.toJS().apiConfig.images;
        let imageBaseURL = imageConfig && imageConfig.base_url;
        let imageSize = imageConfig && imageConfig.poster_sizes[4];
        let genreString = '';
        tvShowDetails.genres && tvShowDetails.genres.forEach(o => genreString += `${o.name}, `);
        let externalIds = this.props.tvShowDetails.toJS().externalIds;
        let cast = this.props.tvShowDetails.toJS().tvShowCast;
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
                <Image style={styles.poster} source={{ uri: `${imageBaseURL}/${imageSize}/${tvShowDetails.poster_path}` }} />
                <View style={styles.descriptionContainer}>
                    <View style={{
                        flexDirection: 'row', flexWrap: 'wrap'
                    }}>
                        <Text style={styles.descriptionDetails}>PG-13 | {new Date(tvShowDetails.first_air_date).getFullYear()} | {timeFormatter(tvShowDetails.episode_run_time && tvShowDetails.episode_run_time[0])}</Text>
                        {/* <View style={styles.badge}><Text style={styles.badgeText}>{tvShowDetails.status}</Text></View> */}
                    </View>
                    <Text style={styles.descriptionTitle}>{tvShowDetails.original_name}</Text>
                    <Text style={{ color: '#fff', marginLeft: 135 }}>{genreString.substring(0, genreString.length - 2)}</Text>
                </View>
                <Tabs>
                    <Tab heading="INFO"
                        tabStyle={{ backgroundColor: colorPellete.black }}
                        textStyle={{ color: colorPellete.grey }}
                        activeTabStyle={{ backgroundColor: colorPellete.black }}
                        activeTextStyle={{ color: '#fff', fontWeight: 'normal' }}>
                        <InfoTab tvShowDetails={{ ...tvShowDetails }} externalIds={{ ...externalIds }} />
                    </Tab>
                    <Tab heading="CAST" tabStyle={{ backgroundColor: colorPellete.black }}
                        textStyle={{ color: colorPellete.grey }}
                        activeTabStyle={{ backgroundColor: colorPellete.black }}
                        activeTextStyle={{ color: '#fff', fontWeight: 'normal' }}>
                        <CastTab
                            cast={cast}
                            imageBaseURL={imageBaseURL}
                            imageSize={imageSize}
                            loadCast={() => this.props.actions.loadTVShowCast(API_KEY, this.props.navigation.state.params.tvShowId)} />
                    </Tab>
                    <Tab heading="SEASONS" tabStyle={{ backgroundColor: colorPellete.black }}
                        textStyle={{ color: colorPellete.grey }}
                        activeTabStyle={{ backgroundColor: colorPellete.black }}
                        activeTextStyle={{ color: '#fff', fontWeight: 'normal' }}>
                        <SeasonsTab
                            seasons={tvShowDetails.seasons}
                            imageBaseURL={imageBaseURL}
                            imageSize={imageSize} />
                    </Tab>
                    <Tab heading="REVIEWS" tabStyle={{ backgroundColor: colorPellete.black }}
                        textStyle={{ color: colorPellete.grey }}
                        activeTabStyle={{ backgroundColor: colorPellete.black }}
                        activeTextStyle={{ color: '#fff', fontWeight: 'normal' }}>
                        <ReviewTab />
                    </Tab>
                </Tabs>
            </SafeAreaView>
        );
    }
}

DetailsPage.propTypes = {
    actions: PropTypes.object.isRequired,
    tvShowDetails: PropTypes.object.isRequired,
    apiConfig: PropTypes.object.isRequired,
};

DetailsPage.defaultProps = {
    actions: {},
    tvShowDetails: {},
    apiConfig: {},
}

const mapStateToProps = state => ({
    tvShowDetails: state.get('tvShowDetails'),
    apiConfig: state.get('globalState'),
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(detailActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
