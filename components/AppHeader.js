import React from 'react';
import { Header } from 'react-native-elements';

// status functional component

const AppHeader = ({ headerText }) => ( // { headerText } === props.headerText
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: headerText, style: { color: 'white' } }}
          outerContainerStyles={{ backgroundColor: 'black' }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
    );
    
export default AppHeader;