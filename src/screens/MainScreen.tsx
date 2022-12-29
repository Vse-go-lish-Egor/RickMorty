import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import React, {useCallback, useEffect} from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Image} from 'react-native-elements/dist/image/Image';
import styled from 'styled-components/native';
import {
  GenderText,
  InfoText,
  LocationText,
  NameText,
  Row,
  ShadowView,
  Spacer,
  StatusCircle,
} from '../components/styledComponents';
import {RootStackParamList} from '../navigation/MainNavigator';
import {incrementPage} from '../redux/characters/slice';
import {fetchCharacters} from '../redux/characters/thunk';
import {useAppDispatch, useAppSelector} from '../redux/hooks';

export const AppPricolScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const increment = useCallback(() => dispatch(incrementPage()), [dispatch]);
  const page = useAppSelector(state => state.character.page);
  const data = useAppSelector(state => state.character.results);
  useEffect(() => {
    dispatch(fetchCharacters(page));
  }, [dispatch, page]);
  console.log(page);
  return (
    <ImageBackground
      source={require('../assets/menuBackGround.jpg')}
      style={styles.backgrounds}>
      <ShadowView>
        <FlatList
          onEndReached={increment}
          data={data}
          keyExtractor={(item, index) => String(index) + String(item.id)}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CharacterFullInfoScreen', {...item})
              }>
              <CharacterInfoView>
                <CharacterNameView>
                  <NameText size={20} weight={600}>
                    {index + 1} {item.name}
                  </NameText>
                  <GenderText gender={item.gender}>
                    <InfoText size={15} weight={400}>
                      Gender:{' '}
                    </InfoText>
                    {item.gender.toLocaleUpperCase()}
                  </GenderText>
                  <Row>
                    <InfoText size={15} weight={400}>
                      Status: {item.status.toLocaleUpperCase()}
                    </InfoText>
                    <StatusCircle status={item.status} />
                  </Row>
                  <Spacer />
                  <LocationText size={15} weight={600}>
                    <InfoText size={15} weight={400}>
                      Location:{' '}
                    </InfoText>
                    {item.location.name}
                  </LocationText>
                </CharacterNameView>
                <Spacer />
                <Image source={{uri: item.image}} style={styles.image} />
              </CharacterInfoView>
            </TouchableOpacity>
          )}
        />
      </ShadowView>
    </ImageBackground>
  );
};
const CharacterNameView = styled.View`
  align-self: flex-start;
  width: 200px;
  flex-direction: column;
`;
const CharacterInfoView = styled.View`
  flex-direction: row;
  align-items: center;
  height: 200px;
  border-bottom-width: 3px;
`;
const styles = StyleSheet.create({
  backgrounds: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
});
