import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@mui/material';

import { BrowserRouter as Router } from 'react-router-dom';

import { store } from 'store/store';

import { Layout } from 'common/components/Layout/Layout';
import { darkTheme } from 'common/themes/dark';

import { CompanySentiment } from 'pages/CompanySentiment/CompanySentiment';

function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Provider store={store}>
          <Layout>
            <CompanySentiment />
            <ToastContainer />
          </Layout>
          <ToastContainer />
        </Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
