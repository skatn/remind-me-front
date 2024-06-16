import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Layout from './layouts/Layout';
import NotFoundPage from './pages/NotFoundPage';
import SignupPage from './pages/SignupPage';
import { AxiosConfig } from './configs/AxiosConfig';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContextProvider } from './contexts/ToastContext';
import { AuthenticationContextProvider } from './contexts/AuthenticationContext';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <AxiosConfig />
      <QueryClientProvider client={queryClient}>
        <ToastContextProvider>
          <AuthenticationContextProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
            <ReactQueryDevtools />
          </AuthenticationContextProvider>
        </ToastContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
