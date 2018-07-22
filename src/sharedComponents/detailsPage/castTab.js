import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { StyleSheet } from 'react-native';

class CastTab extends React.Component {
    render() {
        const styles = StyleSheet.create({
            castTitle: {
                fontWeight: 'bold',
            }
        });
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://www.missmalini.com/wp-content/uploads/2015/09/hrithik.jpg' }} />
                            </Left>
                            <Body>
                                <Text style={styles.castTitle}>Kumar Pratik</Text>
                                <Text note>as pirate_pj</Text>
                            </Body>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://www.missmalini.com/wp-content/uploads/2015/09/hrithik.jpg' }} />
                            </Left>
                            <Body>
                                <Text style={styles.castTitle}>Kumar Pratik</Text>
                                <Text note>as pirate_pj</Text>
                            </Body>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://www.missmalini.com/wp-content/uploads/2015/09/hrithik.jpg' }} />
                            </Left>
                            <Body>
                                <Text style={styles.castTitle}>Kumar Pratik</Text>
                                <Text note>as pirate_pj</Text>
                            </Body>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://www.missmalini.com/wp-content/uploads/2015/09/hrithik.jpg' }} />
                            </Left>
                            <Body>
                                <Text style={styles.castTitle}>Kumar Pratik</Text>
                                <Text note>as pirate_pj</Text>
                            </Body>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://www.missmalini.com/wp-content/uploads/2015/09/hrithik.jpg' }} />
                            </Left>
                            <Body>
                                <Text style={styles.castTitle}>Kumar Pratik</Text>
                                <Text note>as pirate_pj</Text>
                            </Body>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://www.missmalini.com/wp-content/uploads/2015/09/hrithik.jpg' }} />
                            </Left>
                            <Body>
                                <Text style={styles.castTitle}>Kumar Pratik</Text>
                                <Text note>as pirate_pj</Text>
                            </Body>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://www.missmalini.com/wp-content/uploads/2015/09/hrithik.jpg' }} />
                            </Left>
                            <Body>
                                <Text style={styles.castTitle}>Kumar Pratik</Text>
                                <Text note>as pirate_pj</Text>
                            </Body>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://www.missmalini.com/wp-content/uploads/2015/09/hrithik.jpg' }} />
                            </Left>
                            <Body>
                                <Text style={styles.castTitle}>Kumar Pratik</Text>
                                <Text note>as pirate_pj</Text>
                            </Body>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://www.missmalini.com/wp-content/uploads/2015/09/hrithik.jpg' }} />
                            </Left>
                            <Body>
                                <Text style={styles.castTitle}>Kumar Pratik</Text>
                                <Text note>as pirate_pj</Text>
                            </Body>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: 'https://www.missmalini.com/wp-content/uploads/2015/09/hrithik.jpg' }} />
                            </Left>
                            <Body>
                                <Text style={styles.castTitle}>Kumar Pratik</Text>
                                <Text note>as pirate_pj</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }
}

export default CastTab;