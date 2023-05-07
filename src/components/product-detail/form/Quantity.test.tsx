import { screen, fireEvent } from '@testing-library/react';

import { render } from '../../../test-helpers';

import Quantity from './Quantity';

const store = {
  quantity: 7,
  changeQuantity: jest.fn(),
};

jest.mock('../../../hooks/useProductFormStore', () => () => [store, store]);

const context = describe;

describe('Quantity', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders quantity', () => {
    render(<Quantity />);

    expect(screen.getByRole('textbox')).toHaveValue('7');
  });

  // TODO #1: + 버튼이 눌렸을 때

  // TODO #2: - 버튼이 눌렸을 때
});
