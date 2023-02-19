import * as Font from 'expo-font';

const useFonts = async () => {
  await Font.loadAsync({
    black: require('../fonts/GothicA1-Black.ttf'),
    bold: require('../fonts/GothicA1-Bold.ttf'),
    extrabold: require('../fonts/GothicA1-ExtraBold.ttf'),
    semibold: require('../fonts/GothicA1-SemiBold.ttf'),
    medium: require('../fonts/GothicA1-Medium.ttf'),
    regular: require('../fonts/GothicA1-Regular.ttf'),
    thin: require('../fonts/GothicA1-Thin.ttf'),
    light: require('../fonts/GothicA1-Light.ttf'),
    extralight: require('../fonts/GothicA1-ExtraLight.ttf'),
  });
};

export default useFonts;