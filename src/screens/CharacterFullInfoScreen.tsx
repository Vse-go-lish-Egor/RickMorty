import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {RootStackParamList} from '../navigation/MainNavigator';
import {ImageBackground, ScrollView, StyleSheet} from 'react-native';
import {ShadowView} from '../components/styledComponents';
import {CharacterAvatar} from '../components/characterAvatar';
import {CharacterFullInfo} from '../components/characterFullInfo';

export const CharacterFullInfoScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList>>();
  // const navigation =
  //   useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const character = route.params!;
  console.log(character);
  return (
    <ImageBackground
      source={require('../assets/characterScreenBackGround.jpg')}
      style={styles.backgrounds}>
      <ShadowView>
        <ScrollView style={styles.backgrounds}>
          <CharacterAvatar character={character} />
          <CharacterFullInfo character={character} />
        </ScrollView>
      </ShadowView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgrounds: {
    flex: 1,
  },
  image: {
    width: 200,
    borderColor: '#2e364c',
    borderWidth: 3,
    height: 200,
    borderRadius: 100,
  },
});
