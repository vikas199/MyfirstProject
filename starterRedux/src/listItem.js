import React, { Component } from 'react';
import { CardSection } from './common/Index'
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux'
import * as actions from './actions/index'

class ListItem extends Component {

componentWillUpdate(){
    LayoutAnimation.spring();
}
    renderDescription() {
        const { item, expanded } = this.props;
        if (expanded) {
            return (
                <CardSection>
                <Text style={{flex: 1}}>{item.description}</Text>
                </CardSection>
            )
        }
    }
    render() {
        const { textStyle } = styles
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.item.id)}>
                <View>
                    <CardSection>
                        <Text style={textStyle}>{this.props.item.title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>

        )
    }
}

const styles = {
    textStyle: {
        fontSize: 18,

    }
}
function mapStateToProps(state, ownProps) {
    const expanded = state.selectionReducer === ownProps.item.id;
    return {
        expanded
    }
}

export default connect(mapStateToProps, actions)(ListItem);