import React from 'react';
import styled from 'styled-components';
import { Field, reduxForm, getFormValues } from 'redux-form';
import { Toggle } from '../components';
import settings from '../constants/settings';

const Container = styled.div`
  height: 100vh;
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
  </Container>
)

export default reduxForm({
  form: 'settings'
})(Home);
