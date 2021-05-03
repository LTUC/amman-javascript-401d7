import { render, screen } from '@testing-library/react';
import People from './People';
test('it should render star wars list', () => {
  const people = [
    {
      name: 'Luke Skywalker',
      url: 'http://swapi.dev/api/people/1/',
    },
    {
      name: 'Darth Vader',
      url: 'http://swapi.dev/api/people/4/',
    },
  ];
  render(<People people={people} />);
  const items = screen.getAllByRole('listitem');
  expect(items).toHaveLength(2);
  expect(items[0]).toHaveTextContent('Luke Skywalker');
  expect(items[0]).toContainHTML(
    '<a href="http://swapi.dev/api/people/1/">Luke Skywalker</a>'
  );

  expect(items[1]).toHaveTextContent('Darth Vader');
  expect(items[1]).toContainHTML(
    '<a href="http://swapi.dev/api/people/4/">Darth Vader</a>'
  );
});
