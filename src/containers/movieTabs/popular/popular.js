import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Ionicons } from '@expo/vector-icons';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Spinner, Icon } from 'native-base';
import * as  popularActions from './actions';
import { API_KEY } from '../../../constants';
import { StyleSheet, Image, View, TouchableHighlight } from 'react-native';
import tmdbStacked from '../../../../assets/tmdbStacked.png';
import { dateFormatter } from '../../../common';

class Popular extends React.Component {

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
        this.props.actions.loadPopularMovies(API_KEY, this.state.pageIndex);
    }

    loadMore() {
        let totalPages = this.props.popularMovies.toJS().totalPages;
        let newPageIndex = this.state.pageIndex + 1;
        this.setState({ pageIndex: newPageIndex });
        if (newPageIndex <= totalPages) {
            this.setState({ dataLoading: false });
            this.props.actions.loadPopularMovies(API_KEY, newPageIndex);
        }
    }

    openDetails(movie) {
        this.props.navigation.navigate('MovieDetails', { movieId: movie.id, title: movie.title })
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
        let movies = this.props.popularMovies.toJS().popularMovies && this.props.popularMovies.toJS().popularMovies || [];
        let imageConfig = this.props.apiConfig.toJS().apiConfig.images;
        let imageBaseURL = imageConfig && imageConfig.base_url;
        let imageSize = imageConfig && imageConfig.poster_sizes[4];

        const listItems = movies && movies.map((movie) =>
            <ListItem thumbnail key={movie.id}>
                <Left>
                    <Thumbnail square source={{ uri: `${imageBaseURL}/${imageSize}/${movie.poster_path}` }} />
                </Left>
                <Body>
                    <Text note>{dateFormatter(new Date(movie.release_date))}</Text>
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
                    <List dataArray={movies} renderRow={(movie) =>
                        <TouchableHighlight key={movie.id}>
                            <ListItem button thumbnail onPress={() => this.openDetails(movie)}>
                                <Left>
                                    <Thumbnail square source={{ uri: `${imageBaseURL}/${imageSize}/${movie.poster_path}` }} />
                                </Left>
                                <Body>
                                    <Text note>{dateFormatter(new Date(movie.release_date))}</Text>
                                    <Text>{movie.title}</Text>
                                    <View style={styles.ratingContainer}>
                                        <Image source={tmdbStacked} style={styles.ratingImage} />
                                        <Text>{movie.vote_average}</Text>
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

Popular.propTypes = {
    actions: PropTypes.object.isRequired,
    popularMovies: PropTypes.object.isRequired,
    apiConfig: PropTypes.object.isRequired,
};

Popular.defaultProps = {
    actions: {},
    popularMovies: {},
    apiConfig: {},
}

const mapStateToProps = state => ({
    popularMovies: state.get('popularMovies'),
    apiConfig: state.get('globalState'),
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(popularActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular);