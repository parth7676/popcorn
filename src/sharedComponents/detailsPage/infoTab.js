import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import { Card, CardItem, Body, Container, Content } from 'native-base'
import { colorPellete } from '../../constants';
import { dateFormatter, moneyFormatter } from '../../common';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

class InfoTab extends React.Component {
    render() {
        const styles = StyleSheet.create({
            factsCard: {
                backgroundColor: colorPellete.grey,
                padding: 10
            },
            factsTitle: {
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 10
            },
            factsPrimaryText: {
                fontWeight: 'bold',
                fontSize: 15
            },
            factsSecondaryText: {
                color: 'grey',
                fontSize: 12,
                marginBottom: 5
            },
            socialIcons: {
                flex: 1,
                flexDirection: 'row'
            }
        });
        return (
            <ScrollView>
                <Content>
                    <Card transparent>
                        <CardItem>
                            <Body>
                                <Text>
                                    {this.props.movieDetails.overview}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <View style={styles.factsCard}>
                        <Text style={styles.factsTitle}>Facts</Text>
                        <Text style={styles.factsPrimaryText}>{this.props.movieDetails.original_title ? this.props.movieDetails.original_title : 'N/A'}</Text>
                        <Text style={styles.factsSecondaryText}>Original Title</Text>
                        <Text style={styles.factsPrimaryText}>{this.props.movieDetails.tagline ? this.props.movieDetails.tagline : 'N/A'}</Text>
                        <Text style={styles.factsSecondaryText}>Original Title</Text>
                        <Text style={styles.factsPrimaryText}>{this.props.movieDetails.release_date ? dateFormatter(new Date(this.props.movieDetails.release_date)) : 'N/A'}</Text>
                        <Text style={styles.factsSecondaryText}>Release Date</Text>
                        <Text style={styles.factsPrimaryText}>{this.props.movieDetails.original_language ? this.props.movieDetails.original_language : 'N/A'}</Text>
                        <Text style={styles.factsSecondaryText}>Original Language</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'flex-start', }}>
                            <View>
                                <Text style={styles.factsPrimaryText}>{`$ ${moneyFormatter(this.props.movieDetails.budget, 2)}`}</Text>
                                <Text style={styles.factsSecondaryText}>Budget</Text>
                            </View>
                            <View style={{ marginLeft: 100 }}>
                                <Text style={styles.factsPrimaryText}>{`$ ${moneyFormatter(this.props.movieDetails.revenue, 2)}`}</Text>
                                <Text style={styles.factsSecondaryText}>Revenue</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.socialIcons}>
                        <FontAwesome name='imdb' color='#f5c518' size={25} />
                        <FontAwesome name='facebook' color='#4267b2' size={25} />
                        <FontAwesome name='instagram' color='#000' size={25} />
                        <FontAwesome name='twitter' color='#1da1f2' size={25} />
                    </View>
                </Content>
            </ScrollView>
        )
    }
}

InfoTab.propTypes = {
    movieDetails: PropTypes.object.isRequired,
}

InfoTab.defaultProps = {
    movieDetails: {}
}

export default InfoTab;