import styled from 'styled-components/native';

export const Spacer = styled.View`
  flex: 1;
`;
export const GenderText = styled.Text<{gender: string; size?: number}>`
  color: ${props => {
    if (props.gender === 'Male') {
      return '#94c6ff';
    }
    if (props.gender === 'Female') {
      return '#f769d8';
    } else {
      return '#b7b4b4';
    }
  }};
  font-size: ${props => (props.size ? props.size : '15px')};
`;
export const StatusCircle = styled.View<{status: string}>`
  width: 12px;
  height: 12px;
  margin: 5px;
  border-radius: 100px;
  background-color: ${props => {
    if (props.status === 'Alive') {
      return '#00c50d';
    }
    if (props.status === 'Dead') {
      return '#a40404';
    }
    if (props.status === 'unknown') {
      return '#c7c7c7';
    }
  }};
`;
export const Column = styled.View`
  flex-direction: column;
  flex: 1;
  align-items: center;
`;
export const LocationText = styled.Text<{size: number; weight: number}>`
  color: #b8cab0;
  font-weight: ${props => props.weight};
  font-size: ${props => props.size + 'px'};
  margin-bottom: 10px;
`;
export const InfoText = styled.Text<{size: number; weight: number}>`
  color: #f8eaea;
  font-weight: ${props => props.weight};
  font-size: ${props => props.size + 'px'};
`;
export const NameText = styled.Text<{size: number; weight: number}>`
  font-weight: ${props => props.weight};
  font-size: ${props => props.size + 'px'};
  color: #f8eaea;
`;

export const ShadowView = styled.View`
  flex: 1;
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
  background: #57738cb5;
`;
export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
