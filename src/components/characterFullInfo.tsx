import React from 'react';
import {CharacterPreview} from '../model/character';
import styled from 'styled-components/native';
import {Column, InfoText, Row} from './styledComponents';
import {StyleSheet, Touchable, TouchableOpacity} from 'react-native';
export const CharacterFullInfo = ({
  character,
}: {
  character: CharacterPreview;
}) => {
  return (
    <>
      <FullInfoContainer>
        <InfoText size={20} weight={600}>
          Created: {character.created}
        </InfoText>
        <InfoText size={15} weight={600}>
          Location: {character.location.name}
        </InfoText>
        <InfoText size={15} weight={600}>
          Origin: {character.origin.name}
        </InfoText>
        <InfoText size={15} weight={600}>
          Type: {character.type ? character.type! : '???'}
        </InfoText>
        <InfoText size={15} weight={600}>
          Species: {character.species}
        </InfoText>
      </FullInfoContainer>
      <EpisodesContainer>
        <Column>
          <InfoText size={15} weight={600}>
            EPISODES:
          </InfoText>
          <Row style={styles.row}>
            {character.episode.map(item => (
              <TouchableOpacity key={item}>
                <EpisodeView>
                  <EpisodeText>
                    Episode {item.replace(/[^0-9,\s]/g, '')}
                  </EpisodeText>
                </EpisodeView>
              </TouchableOpacity>
            ))}
          </Row>
        </Column>
      </EpisodesContainer>
    </>
  );
};
const EpisodeText = styled.Text`
  color: #1b1717;
`;
const EpisodeView = styled.View`
  padding: 2px;
  background: #020f9a60;
  margin: 4px;
  border-width: 1px;
  border-radius: 5px;
`;
const FullInfoContainer = styled.View`
  flex: 1;
  border-radius: 10px;
  margin-top: 10px;
  padding: 5px;
  background: #b1adadbb;
`;
const EpisodesContainer = styled.View`
  flex: 1;
  align-items: center;
  border-radius: 10px;
  margin-top: 10px;
  padding: 5px;
  background: #b1adadbb;
`;
const styles = StyleSheet.create({
  row: {
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
