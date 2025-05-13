import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  const placeholder = 'Select an option';
  const onChangeMock = jest.fn();

  it('renders the dropdown with placeholder text', () => {
    render(
      <Dropdown
        options={options}
        placeholder={placeholder}
        onChange={onChangeMock}
        value=''
      />
    );

    expect(screen.getByText(placeholder)).toBeInTheDocument();
  });

  it('displays the options when clicked', () => {
    render(
      <Dropdown
        options={options}
        placeholder={placeholder}
        onChange={onChangeMock}
        value=''
      />
    );

    fireEvent.click(screen.getByText(placeholder));

    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it('calls onChange with the correct value when an option is selected', () => {
    render(
      <Dropdown
        options={options}
        placeholder={placeholder}
        onChange={onChangeMock}
        value=''
      />
    );

    fireEvent.click(screen.getByText(placeholder));

    fireEvent.click(screen.getByText('Option 2'));

    expect(onChangeMock).toHaveBeenCalledWith('2');
  });

  it('displays the selected option label when a value is provided', () => {
    render(
      <Dropdown
        options={options}
        placeholder={placeholder}
        onChange={onChangeMock}
        value='2'
      />
    );

    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('toggles the dropdown open and close state', () => {
    render(
      <Dropdown
        options={options}
        placeholder={placeholder}
        onChange={onChangeMock}
        value=''
      />
    );

    fireEvent.click(screen.getByText(placeholder));
    expect(screen.getByText('Option 1')).toBeInTheDocument();

    fireEvent.click(screen.getByText(placeholder));
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });
});
