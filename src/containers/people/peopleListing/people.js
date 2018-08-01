import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Ionicons } from '@expo/vector-icons';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon, Header } from 'native-base';
import * as  peopleActions from './actions';
import { API_KEY } from '../../../constants';
import { StyleSheet, Image, View, TouchableHighlight } from 'react-native';
import tmdbStacked from '../../../../assets/tmdbStacked.png';
import { dateFormatter } from '../../../common';

class People extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 1,
        }
        this.loadMore = this.loadMore.bind(this);
        this.openDetails = this.openDetails.bind(this);
    }

    componentDidMount() {
        this.props.actions.loadPeople(API_KEY, this.state.pageIndex);
    }

    loadMore() {
        let totalPages = this.props.people.toJS().totalPages;
        let newPageIndex = this.state.pageIndex + 1;
        this.setState({ pageIndex: newPageIndex });
        if (newPageIndex <= totalPages) {
            this.props.actions.loadPeople(API_KEY, newPageIndex);
        }
    }

    openDetails(person) {
        this.props.navigation.navigate('MovieDetails', { personId: person.id, title: person.title })
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
        let people = this.props.people.toJS().people && this.props.people.toJS().people || [];
        let imageConfig = this.props.apiConfig.toJS().apiConfig.images;
        let imageBaseURL = imageConfig && imageConfig.base_url;
        let imageSize = imageConfig && imageConfig.poster_sizes[4];

        return (
            <Container>
                <Content>
                    <List scrollEventThrottle={1} dataArray={people} renderRow={(person) =>
                        <TouchableHighlight key={person.id}>
                            <ListItem button thumbnail onPress={() => this.openDetails(person)}>
                                <Left>
                                    <Thumbnail circular source={{ uri: `${imageBaseURL}/${imageSize}/${person.profile_path}` }} />
                                </Left>
                                <Body>
                                    <Text>{person.name}</Text>
                                    <View style={styles.ratingContainer}>
                                        <Image source={tmdbStacked} style={styles.ratingImage} />
                                        <Text>{person.popularity}</Text>
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
            </Container>
        )
    }
}

People.propTypes = {
    actions: PropTypes.object.isRequired,
    people: PropTypes.object.isRequired,
    apiConfig: PropTypes.object.isRequired,
};

People.defaultProps = {
    actions: {},
    people: {},
    apiConfig: {},
}

const mapStateToProps = state => ({
    people: state.get('people'),
    apiConfig: state.get('globalState'),
});

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(peopleActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(People);