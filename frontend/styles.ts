
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.background };
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.color.title };
  text-align: center;
  font-size: ${({theme}) => theme.font.title.size };
  font-family: ${({theme}) => theme.font.title.family };
`;

export const Subtitle = styled.Text`
  color: ${({theme}) => theme.color.subtitle };
  text-align: center;
  font-size: ${({theme}) => theme.font.subtitle.size };
  font-family: ${({theme}) => theme.font.subtitle.family };
`;