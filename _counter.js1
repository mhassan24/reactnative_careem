import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class CounterApp extends Component {

    // constructor(props) {
    //     super(props)
    // }

    state = {count:0}

    incrementState = () => {
      this.setState({ count: this.state.count + 1})
   }

   decrementState = () => {
    this.setState({ count: this.state.count - 1})
 }

    render() {
        return (
            <View style={styles.container}>

            <Text >
            {this.state.count}
            </Text>

                <Button
                    onPress = {this.incrementState}
                    title="Increase Count"
                    color="#841584"
                    accessibilityLabel="Increase Count"
                />

                <Text>{this.props.count}</Text>

                <Button
                    onPress = {this.decrementState}
                    title="Decrease Count"
                    color="#841584"
                    accessibilityLabel="Decrease Count"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});