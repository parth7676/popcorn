import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { dateFormatter } from '../../common';
import ImageNotFound from '../../../assets/picture-not-available.jpg'

class SeasonsTab extends React.Component {
    render() {
        const styles = StyleSheet.create({
            primaryText: {
                fontWeight: 'bold',
                fontSize: 15
            },
            secondaryText: {
                color: 'grey',
                fontSize: 12,
                marginBottom: 5
            },
            posterStyle: {
                width: '100%',
                height: 200,
                marginBottom: 10
            }
        });
        const seasonCards = this.props.seasons.map(season => {
            return (
                <Card key={season.id} style={{ flex: 0 }}>
                    <CardItem>
                        <Body>
                            <Image style={styles.posterStyle} source={{ uri: `${this.props.imageBaseURL}/${this.props.imageSize}/${season.poster_path}` }} />
                            <Text style={styles.primaryText}>{season.name ? season.name : 'N/A'}</Text>
                            <Text style={styles.secondaryText}>Original Title</Text>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'flex-start', }}>
                                <View>
                                    <Text style={styles.primaryText}>{season.episode_count ? season.episode_count : 'N/A'}</Text>
                                    <Text style={styles.secondaryText}>Episodes </Text>
                                </View>
                                <View style={{ marginLeft: 100 }}>
                                    <Text style={styles.primaryText}>{season.air_date ? dateFormatter(new Date(season.air_date)) : 'N/A'}</Text>
                                    <Text style={styles.secondaryText}>Air Date</Text>
                                </View>
                            </View>

                            <Text>
                                {season.overview ? season.overview : 'Overview not availble.'}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            )
        }
        );
        return (
            <Container>
                <Content>
                    {seasonCards}
                </Content>
            </Container>
        )
    }
}

SeasonsTab.propType = {
    seasons: PropTypes.array.isRequired
};

SeasonsTab.defaultProps = {
    seasons: []
}

export default SeasonsTab;
