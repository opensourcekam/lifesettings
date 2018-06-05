import React from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import { Toggle } from '../components';
import settings from '../constants/settings';
import {createEventHandlerWithConfig} from 'recompose'

const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.form`
  min-width: 200px;
  max-width: 400px;
`;

const SettingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 13px;
`;

const Credit = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: ${({ theme }) => theme.colors.grey4};
  p {
    font-size: 0.8rem
    margin: 0;
  }
`;

const Home = () => (
  <Container>
    <Form>
      {settings.map((s, i) => (
        <SettingWrapper key>
          <span>{s.title}</span>
          <Field
            component={Toggle}
            name={s.title}
            checked={s.checked}
          />
        </SettingWrapper>
      ))}
    </Form>
    <Credit>
      <p>Designed by Robert Gallardo - @robertgallardo</p>
      <p>Coded by Kameron Robinson - @kam.ofthefuture</p>
    </Credit>
  </Container>
)

export default reduxForm({
  form: 'settings'
})(Home);
