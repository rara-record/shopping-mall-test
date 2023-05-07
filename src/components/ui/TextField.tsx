import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledErrorText = styled.div`
  color: red;
  font-size: 12px;
`;

type TextFieldProps = {
  id: string;
  // eslint-disable-next-line react/require-default-props
  placeholder?: string;
  // eslint-disable-next-line react/require-default-props
  type?: 'text' | 'number' | 'password';
  value: string;
  onChange: (value: string) => void;

}

type TextFieldWithProps = TextFieldProps & {
  children: ReactNode;
  // eslint-disable-next-line react/require-default-props
  error?: boolean;
};

export function TextField({
  id, value, onChange, type = 'text', placeholder = '',
}: TextFieldProps) {
  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChangeValue}
    />
  );
}

export function withLabel(
  TextFieldComponent: React.ComponentType<TextFieldProps>,
) {
  return function WithLabel(props: TextFieldWithProps) {
    const { children, ...rest } = props;

    return (
      <>
        <label htmlFor={rest.id}>{children}</label>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <TextFieldComponent {...rest} />
      </>
    );
  };
}

export function withError(
  TextFieldComponent: React.ComponentType<TextFieldWithProps>,
) {
  return function WithError(props: TextFieldWithProps) {
    const { error = false, ...rest } = props;

    return (
      <>

        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <TextFieldComponent {...rest}>{rest.children}</TextFieldComponent>
        {error && <StyledErrorText>다시 입력해주세요</StyledErrorText>}
      </>
    );
  };
}

TextField.defaultProps = {
  placeholder: '',
  type: 'text' as const,
};
