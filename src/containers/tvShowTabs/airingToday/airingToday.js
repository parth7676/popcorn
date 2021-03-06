import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Ionicons } from '@expo/vector-icons';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Spinner, Icon } from 'native-base';
import * as  airingTodayActions from './actions';
import { API_KEY } from '../../../constants';
import { StyleSheet, Image, View, TouchableHighlight } from 'react-native';
import tmdbStacked from '../../../../assets/tmdbStacked.png';
import { dateFormatter } from '../../../common';

class AiringToday extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 1,
            dataLoading: true,
        }
        this.loadMore = this.loadMore.bind(this);
        this.openDetails = this.openDetails.bind(this);

    }

    componentDidMount() {
        this.props.actions.laodAiringTodayTVShows(API_KEY, this.state.pageIndex);
    }

    loadMore() {
        let totalPages = this.props.airingTodayTVShows.toJS().totalPages;
        let newPageIndex = this.state.pageIndex + 1;
        this.setState({ pageIndex: newPageIndex });
        if (newPageIndex <= totalPages) {
            this.setState({ dataLoading: false });
            this.props.actions.loadAiringTodayTVShows(API_KEY, newPageIndex);
        }
    }

    openDetails(tvShow) {
        this.props.navigation.navigate('TVShowDetails', { tvShowId: tvShow.id, title: tvShow.name })
    }

    componentWillReceiveProps() {
        this.setState({ dataLoading: false });
    }

    render() {
        const styles = StyleSheet.create({
            loadMore: {
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
            },
            spinnerStyle: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            },
            ratingContainer: {
                marginTop: 5,
                flexDirection: 'row',
                flexWrap: 'wrap',
            },
            ratingImage: {
                width: 20,
                height: 20,
                marginRight: 5
            },
            listFooter: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10
            }
        });
        let tvShows = this.props.airingTodayTVShows.toJS().airingTodayTVShows && this.props.airingTodayTVShows.toJS().airingTodayTVShows || [];
        let imageConfig = this.props.apiConfig.toJS().apiConfig.images;
        let imageBaseURL = imageConfig && imageConfig.base_url;
        let imageSize = imageConfig && imageConfig.poster_sizes[4];

        return (
            <Container>
                <Content>
                    <List dataArray={tvShows} renderRow={(tvShow) =>
                        <TouchableHighlight key={tvShow.id}>
                            <ListItem button thumbnail onPress={() => this.openDetails(tvShow)}>
                                <Left>
                                    <Thumbnail square source={{ uri: `${imageBaseURL}/${imageSize}/${tvShow.poster_path}` }} />
                                    {/* <Image source={{ uri: `${imageBaseURL}/${imageSize}/${tvShow.poster_path}` style= }} /> */}
                                </Left>
                                <Body>
                                    <Text note>{dateFormatter(new Date(tvShow.first_air_date))}</Text>
                                    <Text>{tvShow.name}</Text>
                                    <View style={styles.ratingContainer}>
                                        <Image source={tmdbStacked} style={styles.ratingImage} />
                                        <Text>{tvShow.vote_average}</Text>
                                    </View>
                                </Body>
                                <Right>
                                </Right>
                            </ListItem >
                        </TouchableHighlight>}
                        renderFooter={() =>
                            <View style={styles.listFooter}>
                                <Button transparent onPress={() => this.loadMore()}><Text>Load More</Text></Button>
                            </View>}>
                    </List>
                </Content>
                {this.state.dataLoading && <Spinner style={styles.spinnerStyle} color='red' />}
            </Container>
        )
    }
}

AiringToday.propTypes = {
    actions: PropTypes.object.isRequired,
    airingTodayTVShows: PropTypes.object.isRequired,
    apiConfig: PropTypes.object.isRequired,
};

AiringToday.defaultProps = {
    actions: {},
    airingTodayTVShows: {},
    apiConfig: {},
}

const mapStateToProps = state => ({
    airingTodayTVShows: state.get('airingTodayTVShows'),
    apiConfig: state.get('globalState'),
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(airingTodayActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AiringToday);