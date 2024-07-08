import PropTypes from 'prop-types';
import './globals.css';

// PROJECT IMPORTS
import ProviderWrapper from 'store/ProviderWrapper';

export const metadata = {
  title: 'Minamas - Fuel Management System',
  description: 'This is Minamas Fuel Dashboard Management Systems .'
};

// ==============================|| ROOT LAYOUT ||============================== //

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node
};
