import {Image, StyleSheet} from 'react-native';
import {CharacterPreview} from '../model/character';
import {
  Column,
  GenderText,
  InfoText,
  NameText,
  Row,
  StatusCircle,
} from './styledComponents';
import React from 'react';
import styled from 'styled-components/native';

export const CharacterAvatar = ({character}: {character: CharacterPreview}) => {
  return (
    <Row>
      <Image source={{uri: character.image}} style={styles.image} />
      <Column>
        <InfoPreview>
          <NameText size={30} weight={600}>
            {character.name}
          </NameText>
          <GenderText gender={character.gender}>
            <InfoText size={15} weight={400}>
              Gender:{' '}
            </InfoText>
            {character.gender.toLocaleUpperCase()}
          </GenderText>
          <Row>
            <InfoText size={15} weight={400}>
              Status: {character.status.toLocaleUpperCase()}
            </InfoText>
            <StatusCircle status={character.status} />
          </Row>
        </InfoPreview>
      </Column>
    </Row>
  );
};
const InfoPreview = styled.View`
  align-items: center;
`;
const styles = StyleSheet.create({
  image: {
    width: 170,
    borderColor: '#2e364c',
    borderWidth: 3,
    height: 170,
    borderRadius: 100,
  },
});
