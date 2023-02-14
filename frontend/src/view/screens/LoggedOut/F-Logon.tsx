import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function Logon({navigation}: {navigation: any}) {
  const [fonte]= useFonts({
    'Gothic': require("./assets/fonts/GothicA1-Regular.ttf")
  });
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../static/logo.png')}
      />
      <Text>Não perca tempo, </Text>
      <Text>descubra conteúdo para assistir</Text>
      <Button
        onPress={() => navigation.navigate('Signup')}
        title="Continue com Facebook"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar backgroundColor="#fff" style='auto' translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 52,
    width: 259,
    marginBottom: 33,
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'GothicA1',
  },
  statusBar: {
    color: '#841584'
  }
});
