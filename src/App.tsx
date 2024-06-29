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
import LoginCallbackPage from './pages/LoginCallbackPage';
import Private from './components/route/Private';
import HomePage from './pages/HomePage';
import SubjectListPage from './pages/SubjectListPage';
import SubjectAddPage from './pages/SubjectAddPage';
import SubjectUpdatePage from './pages/SubjectUpdatePage';
import QuestionListPage from './pages/QuestionListPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContextProvider>
          <AuthenticationContextProvider>
            <AxiosConfig />
            <BrowserRouter>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route
                    path="/login-callback"
                    element={<LoginCallbackPage />}
                  />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>

                <Route
                  element={
                    <Private>
                      <Layout />
                    </Private>
                  }
                >
                  <Route path="/" element={<HomePage />} />
                  <Route path="/subjects" element={<SubjectListPage />} />
                  <Route path="/subjects/add" element={<SubjectAddPage />} />
                  <Route
                    path="/subjects/:subjectId/edit"
                    element={<SubjectUpdatePage />}
                  />
                  <Route
                    path="/subjects/:subjectId"
                    element={<QuestionListPage />}
                  />
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
