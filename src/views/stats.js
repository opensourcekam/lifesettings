import React from 'react';
import styled from 'styled-components';
import { Link as Lnk } from 'react-router-dom';

import defaultSettings from '../constants/settings';
const settings = localStorage.getItem('settings') || defaultSettings;

const Link = styled(Lnk)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: ${({theme}) => theme.colors.grey3};
`;
const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 300px;
`;

const SettingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 13px;
  span {
    font-size: 1.3rem;
  }
`;

const Stats = () => (
  <Container>
    <Link to="/">back</Link>
      {settings.map((s, i) => (
        <SettingWrapper key={s.title}>
          <span>{s.title}</span>
          <span>{s.count}</span>
        </SettingWrapper>
      ))}
  </Container>
)

export default Stats;
