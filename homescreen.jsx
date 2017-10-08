import OutsideText from './outside_text.js';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


class HomeScreen extends Component <{}> {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is my first app!
        </Text>
        <Text style={styles.bigblue}>Hello</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <View style={styles.blueSquare} />
        <OutsideText/>
      </View>
    );
  }
}

export default HomeScreen
