import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Router } from './routes/Router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from 'styled-components';
import { DefaultLayout } from './layout/DefaultLayout';

export function App() {
  return (
    <ThemeProvider theme={<DefaultLayout />}>
      <BrowserRouter>
        <AuthProvider>
          <Router />

          <ToastContainer />
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}