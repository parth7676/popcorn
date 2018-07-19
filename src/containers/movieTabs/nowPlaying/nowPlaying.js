import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Ionicons } from '@expo/vector-icons';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Spinner, Icon } from 'native-base';
import * as  nowPlayingActions from './actions';
import { API_KEY } from '../../../constants';
import { StyleSheet, Image, View } from 'react-native';
import tmdbStacked from '../../../../assets/tmdbStacked.png';

class NowPlaying extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 1,
            dataLoading: true,
        }
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount() {
        this.props.actions.laodNowPlayingMovies(API_KEY, this.state.pageIndex);
    }

    loadMore() {
        let totalPages = this.props.nowPlayingMovies.toJS().totalPages;
        let newPageIndex = this.state.pageIndex + 1;
        this.setState({ pageIndex: newPageIndex });
        if (newPageIndex <= totalPages) {
            this.setState({ dataLoading: false });
            this.props.actions.laodNowPlayingMovies(API_KEY, newPageIndex);
        }
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

        });
        let movies = this.props.nowPlayingMovies.toJS().nowPlayingMovies && this.props.nowPlayingMovies.toJS().nowPlayingMovies || [];
        let imageConfig = this.props.apiConfig.toJS().apiConfig.images;
        let imageBaseURL = imageConfig && imageConfig.base_url;
        let imageSize = imageConfig && imageConfig.poster_sizes[4];

        const listItems = movies && movies.map((movie) =>
            <ListItem thumbnail key={movie.id}>
                <Left>
                    <Thumbnail square source={{ uri: `${imageBaseURL}/${imageSize}/${movie.poster_path}` }} />
                </Left>
                <Body>
                    <Text note>{new Date(movie.release_date).getFullYear()}</Text>
                    <Text>{movie.title}</Text>
                    <View style={styles.ratingContainer}>
                        <Image source={tmdbStacked} style={styles.ratingImage} />
                        <Text>{movie.vote_average}</Text>
                    </View>
                </Body>
                <Right>
                </Right>
            </ListItem>

        );
        return (
            <Container>
                <Content>

                    <List>
                        {listItems}
                        {(this.state.pageIndex <= this.props.nowPlayingMovies.toJS().totalPages && !this.state.dataLoading) &&
                            <ListItem style={styles.loadMore}>
                                <Button transparent onPress={() => this.loadMore()} >
                                    <Text>Load More</Text>
                                </Button>
                            </ListItem>}
                    </List>
                </Content>
                {this.state.dataLoading && <Spinner style={styles.spinnerStyle} color='red' />}
            </Container>
        )
    }
}

NowPlaying.propTypes = {
    actions: PropTypes.object.isRequired,
    nowPlayingMovies: PropTypes.object.isRequired,
    apiConfig: PropTypes.object.isRequired,
};

NowPlaying.defaultProps = {
    actions: {},
    nowPlayingMovies: {},
    apiConfig: {},
}

const mapStateToProps = state => ({
    nowPlayingMovies: state.get('nowPlayingMovies'),
    apiConfig: state.get('globalState'),
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(nowPlayingActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);