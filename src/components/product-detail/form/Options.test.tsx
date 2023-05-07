import { screen, fireEvent } from '@testing-library/react';

import { render } from '../../../test-helpers';

import Options from './Options';

import fixtures from '../../../../fixtures';

const [product] = fixtures.products;
const { options } = product;

const store = {
  product,
  selectedOptionItems: options.map((i) => i.items[0]),
  quantity: 1,
  changeOptionItem: jest.fn(),
};

jest.mock('../../../hooks/useProductFormStore', () => () => [store, store]);

const context = describe;

describe('Options', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders comboboxes', () => {
    render(<Options />);

    expect(screen.getAllByRole('combobox')).toHaveLength(options.length);
  });

  // TODO: 선택이 바뀌었을 때(힌트: changeOptionItem 호출 여부를 이용)
});
