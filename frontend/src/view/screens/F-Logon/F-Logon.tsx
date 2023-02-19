import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { Title, Subtitle, Container } from '../../../../styles';

export default function Logon({navigation}: {navigation: any}) {
  return (
    <Container>
      <Title>Não perca tempo, </Title>
      <Subtitle>descubra conteúdo para assistir</Subtitle>
      <Image
        style={styles.logo}
        source={require('../../../static/logo.png')}
      />
      {/* <Button
        onPress={() => navigation.navigate('Signup')}
        title="Continue com Facebook"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />  */}
      <StatusBar style='auto' translucent />
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 52,
    width: 259,
    marginBottom: 33,
    fontSize: 20,
    lineHeight: 20
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'GothicA1_700Bold',
  },
  statusBar: {
    color: '#841584'
  }
});
