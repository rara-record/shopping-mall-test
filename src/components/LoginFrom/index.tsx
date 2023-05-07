import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import TextBox from '../TextBox';
import useLoginForm from '../../hooks/useLoginForm';
import useAccessToken from '../../hooks/useAccessToken';
import { TextField, withError, withLabel } from '../ui/TextField';

const TextFieldWithLabel = withError(withLabel(TextField));

const Container = styled.div`
  h2 {
    margin-bottom: 1rem;
    font-size: 4rem;
  }

  button {
    margin-left: 10.5rem;
  }

  p {
    margin-block: 1rem;
  }
`;

const TextFieldContainer = styled.div`
  margin-block: .5rem;

  label {
    display: inline-block;
    width: 10rem;
    margin-right: .5rem;
    text-align: right;
    vertical-align: middle;
  }

  input {
    width: 20rem;
  }
`;

function LoginForm() {
  const { setAccessToken } = useAccessToken();

  const [{
    email, password, error, valid, accessToken,
  }, store] = useLoginForm();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    store.login();
  };

  useEffect(() => {
    setAccessToken(accessToken);
  }, [accessToken, setAccessToken]);

  return (
    <Container>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <TextFieldContainer>
          <TextFieldWithLabel
            id="email"
            placeholder="tester@example.com"
            value={email}
            onChange={(value) => store.changeEmail(value)}
            error={!valid}
          >
            이메일 (composition)
          </TextFieldWithLabel>
        </TextFieldContainer>

        <TextBox
          label="E-mail"
          placeholder="tester@example.com"
          value={email}
          onChange={(value) => store.changeEmail(value)}
        />
        <TextBox
          label="Password"
          type="password"
          value={password}
          onChange={(value) => store.changesetPassword(value)}
        />
        <Button type="submit" disabled={!valid}>
          로그인
        </Button>
        {error && (
          <p>로그인 실패</p>
        )}
      </form>
    </Container>

  );
}

export default LoginForm;
