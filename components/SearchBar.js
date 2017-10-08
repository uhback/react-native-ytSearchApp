import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class SearchBar extends Component {
    state = { term: '' }

    render() {
        const { 
            containerStyle,
            searchTextStyle, 
            buttonStyle
          } = styles;

        return (           
            <View style={containerStyle}>
            <TextInput 
                style={searchTextStyle}
                onChangeText={term => this.setState({ term })} //{ term } == { term: term }
                value={this.state.term}
            />
            <Button 
                buttonStyle={buttonStyle}
                title={this.props.loading ? 'Loading...' : 'Search'}
                onPress={() => this.props.onPressSearch(this.state.term)}
            />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
      flexDirection: 'row', 
      marginTop: 75,
      marginLeft: 10,
      marginRight: 10
    },
    searchTextStyle: {
      flex: 1
    },
    buttonStyle: {
      height: 40,
      marginButton: 8,
      backgroundColor: 'black'
    }
  };

export default SearchBar;