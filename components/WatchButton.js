import React from 'react';
import { Linking } from 'react-native';
import { Button } from 'react-native-elements';

const WatchButton = ({ videoId }) => (
    <Button
        raised
        title="Watch on YouTube"
        icon={{ name: 'play-arrow' }}
        containerViewStyle={{ marginTop: 10 }}
        backgroundColor="#E62117"
        onPress={() => {
            Linking.openURL(`https://m.youtube.com/watch?v=${videoId}`);
            }}
    />
);

export default WatchButton;