import { render, screen } from '@testing-library/react';
import App from './components/App';
import { ReduxProvider } from './redux/provider';

test('renders learn react link', () => {
  render(
    <ReduxProvider>
      <App />
    </ReduxProvider>
  );
  const linkElement = screen.getByText(/ToDoS/i);
  expect(linkElement).toBeInTheDocument();
});
