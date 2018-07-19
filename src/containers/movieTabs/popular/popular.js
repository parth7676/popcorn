import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Header, Content, Text, Button, Toast } from "native-base";

class Popular extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        };
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Button
                        onPress={() =>
                            Toast.show({
                                text: "Wrong password!",
                                buttonText: "Okay"
                            })}
                    >
                        <Text>Default Toast</Text>
                    </Button>
                    <Button success
                        onPress={() =>
                            Toast.show({
                                text: "Wrong password!",
                                buttonText: "Okay",
                                type: "success"
                            })}
                    >
                        <Text>Success Toast</Text>
                    </Button>
                    <Button warning
                        onPress={() =>
                            Toast.show({
                                text: "Wrong password!",
                                buttonText: "Okay",
                                type: "warning"
                            })}
                    >
                        <Text>Warning Toast</Text>
                    </Button>
                    <Button danger
                        onPress={() =>
                            Toast.show({
                                text: "Wrong password!",
                                buttonText: "Okay",
                                type: "danger"
                            })}
                    >
                        <Text>Danger Toast</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

Popular.propTypes = {
};

Popular.defaultProps = {
}

const mapStateToProps = state => ({

});

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular);