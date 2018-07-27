import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { StyleSheet } from 'react-native';

class CastTab extends React.Component {
    componentDidMount() {
        this.props.loadCast();
    }

    render() {
        const styles = StyleSheet.create({
            castTitle: {
                fontWeight: 'bold',
            },
            castItem: {
                padding: 10
            }
        });
        return (
            <Container>
                <Content>
                    <List dataArray={this.props.cast} renderRow={(cast) =>
                        <ListItem avatar style={styles.castItem}>
                            <Left>
                                <Thumbnail source={{ uri: `${this.props.imageBaseURL}/${this.props.imageSize}/${cast.profile_path}` }} />
                            </Left>
                            <Body>
                                <Text style={styles.castTitle}>{cast.name}</Text>
                                <Text note>as {cast.character ? cast.character : '--'}</Text>
                            </Body>
                        </ListItem>
                    }>
                    </List>
                </Content>
            </Container>
        )
    }
}

CastTab.propTypes = {
    loadCast: PropTypes.func.isRequired,
    cast: PropTypes.array.isRequired,
    imageBaseURL: PropTypes.string.isRequired,
    imageSize: PropTypes.string.isRequired
}

CastTab.defaultProps = {
    cast: [],
    imageSize: '',
    imageBaseURL: ''
}
export default CastTab;