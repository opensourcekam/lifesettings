import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form';

import { Toggle } from '../components';
import defaultSettings from '../constants/settings';
const settings = defaultSettings;

const Button = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: ${({ theme }) => theme.colors.grey3};
`;

const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.form`
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

const Credit = styled.div`
  position: absolute;
  bottom: 1rem;
  color: ${({ theme }) => theme.colors.grey4};
  p {
    font-size: 0.8rem
    margin: 0;
    a {
      color: ${({ theme }) => theme.colors.grey3};
    }
  }
`;

function saveSettings(form) {
  console.log('hey')
  console.log(form);
}

const Home = ({ submit, ...props }) => (
  <Container>
    <Form
      handleSubmit={saveSettings}
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <Button type="submit">
        sub
      </Button>
      <Link to="/stats">stats</Link>
      {settings.map((s, i) => (
        <SettingWrapper key={s.title}>
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
      <p>Art by Robert Gallardo - <a href="//instagram.com/robertgallardo">@RobertGallardo</a></p>
      <p>Code by Kam - <a href="//instagram.com/kam.ofthefuture">@Kam.ofTheFuture</a></p>
    </Credit>
  </Container>
)

export default reduxForm({
  form: 'settings'
})(Home);
