import { fireEvent, waitFor, render, screen } from '@testing-library/react';
import Form from './Form';
test('need to run the handler on button click', async () => {
  let handler = jest.fn();
  render(<Form prompt="Get Star Wars People" handler={handler} />);
  let button = screen.getByText('Get Star Wars People');
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  await waitFor(() => expect(handler).toHaveBeenCalled());
});
