import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, ScrollView, Image, StyleSheet, Linking } from 'react-native';
import { Card, CardItem, Body, Container, Content } from 'native-base'
import { colorPellete, IMDB_URL } from '../../constants';
import { dateFormatter, moneyFormatter } from '../../common';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
var languages = require('language-list')();

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
            socialIconsContainer: {
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 20
            },
            socialIcons: {
                marginLeft: 10,
                marginRight: 10
            },
            linkStyle: {
                textDecorationLine: 'underline',
                color: colorPellete.lightBlue
            }
        });
        let productionCompanies = '';
        this.props.tvShowDetails.production_companies && this.props.tvShowDetails.production_companies.forEach(o => productionCompanies += `${o.name}, `);
        return (
            <ScrollView>
                <Content>
                    <Card transparent>
                        <CardItem>
                            <Body>
                                <Text>
                                    {this.props.tvShowDetails.overview}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <View style={styles.factsCard}>
                        <Text style={styles.factsTitle}>Facts</Text>
                        <Text style={styles.factsPrimaryText}>{this.props.tvShowDetails.original_name ? this.props.tvShowDetails.original_name : 'N/A'}</Text>
                        <Text style={styles.factsSecondaryText}>Original Title</Text>
                        <Text style={styles.factsPrimaryText}>{this.props.tvShowDetails.seasons ? this.props.tvShowDetails.seasons.length : 'N/A'}</Text>
                        <Text style={styles.factsSecondaryText}>Seasons</Text>
                        <Text style={styles.factsPrimaryText}>{this.props.tvShowDetails.original_language ? languages.getLanguageName(this.props.tvShowDetails.original_language) : 'N/A'}</Text>
                        <Text style={styles.factsSecondaryText}>Original Language</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'flex-start', }}>
                            <View>
                                <Text style={styles.factsPrimaryText}>{this.props.tvShowDetails.first_air_date ? dateFormatter(new Date(this.props.tvShowDetails.first_air_date)) : 'N/A'}</Text>
                                <Text style={styles.factsSecondaryText}>First Air Date </Text>
                            </View>
                            <View style={{ marginLeft: 80 }}>
                                <Text style={styles.factsPrimaryText}>{this.props.tvShowDetails.last_air_date ? dateFormatter(new Date(this.props.tvShowDetails.last_air_date)) : 'N/A'}</Text>
                                <Text style={styles.factsSecondaryText}>Last Air Date</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'flex-start', }}>
                            <View>
                                <Text style={styles.factsPrimaryText}>{this.props.tvShowDetails.type ? this.props.tvShowDetails.type : 'N/A'}</Text>
                                <Text style={styles.factsSecondaryText}>Type</Text>
                            </View>
                            <View style={{ marginLeft: 125 }}>
                                <Text style={styles.factsPrimaryText}>{this.props.tvShowDetails.status ? this.props.tvShowDetails.status : 'N/A'}</Text>
                                <Text style={styles.factsSecondaryText}>Status</Text>
                            </View>
                        </View>
                        {this.props.tvShowDetails.homepage ? <Text style={[styles.factsPrimaryText, styles.linkStyle]} onPress={() => Linking.openURL(`${this.props.tvShowDetails.homepage}`)}>{this.props.tvShowDetails.homepage}</Text> : <Text style={styles.factsPrimaryText}>N/A</Text>}
                        <Text style={styles.factsSecondaryText}>Official Site</Text>
                        <Text style={styles.factsPrimaryText}>{productionCompanies ? productionCompanies.substring(0, productionCompanies.length - 2) : 'N/A'}</Text>
                        <Text style={styles.factsSecondaryText}>Production Companies</Text>
                    </View>
                    <View style={styles.socialIconsContainer}>
                        {this.props.externalIds.imdb_id && <FontAwesome style={styles.socialIcons} name='imdb' color='#f5c518' size={30} onPress={() => Linking.openURL(`${IMDB_URL}${this.props.externalIds.imdb_id}`)} />}
                        {this.props.externalIds.facebook_id && <FontAwesome style={styles.socialIcons} name='facebook' color='#4267b2' size={30} onPress={() => Linking.openURL(`http://www.facebook.com/${this.props.externalIds.facebook_id}`)} />}
                        {this.props.externalIds.instagram_id && <FontAwesome style={styles.socialIcons} name='instagram' color='#000' size={30} onPress={() => Linking.openURL(`http://www.instagram.com/${this.props.externalIds.instagram_id}`)} />}
                        {this.props.externalIds.twitter_id && <FontAwesome style={styles.socialIcons} name='twitter' color='#1da1f2' size={30} onPress={() => Linking.openURL(`http://www.twitter.com/${this.props.externalIds.imdb_id}`)} />}
                    </View>
                </Content>
            </ScrollView>
        )
    }
}

InfoTab.propTypes = {
    tvShowDetails: PropTypes.object.isRequired,
    externalIds: PropTypes.object.isRequired,
}

InfoTab.defaultProps = {
    tvShowDetails: {},
    externalIds: {}
}

export default InfoTab;