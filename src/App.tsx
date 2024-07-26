import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import Layout from './layouts/Layout';
import NotFoundPage from './pages/error/NotFoundPage';
import SignupPage from './pages/auth/SignupPage';
import { AxiosConfig } from './configs/AxiosConfig';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContextProvider } from './contexts/ToastContext';
import { AuthenticationContextProvider } from './contexts/AuthenticationContext';
import LoginCallbackPage from './pages/auth/LoginCallbackPage';
import Private from './components/route/Private';
import HomePage from './pages/home/HomePage';
import SubjectListPage from './pages/subject/SubjectListPage';
import SubjectAddPage from './pages/subject/SubjectAddPage';
import SubjectUpdatePage from './pages/subject/SubjectUpdatePage';
import QuestionListPage from './pages/question/QuestionListPage';
import QuestionAddPage from './pages/question/QuestionAddPage';
import QuestionSubmitPage from './pages/question/QuestionSubmitPage';
import ExplainPage from './pages/question/ExplainPage';
import SubjectManagePage from './pages/subject/SubjectManagePage';
import QuestionEditPage from './pages/question/QuestionEditPage';
import MyPage from './pages/mypage/MyPage';
import ProfileEditPage from './pages/mypage/ProfileEditPage';
import SettingPage from './pages/setting/SettingPage';

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
                  <Route path="/setting" element={<SettingPage />} />
                  <Route path="/mypage" element={<MyPage />} />
                  <Route path="/mypage/edit" element={<ProfileEditPage />} />
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
                  <Route
                    path="/subjects/:subjectId/questions/add"
                    element={<QuestionAddPage />}
                  />
                  <Route
                    path="/subjects/:subjectId/manage"
                    element={<SubjectManagePage />}
                  />
                  <Route
                    path="/subjects/:subjectId/questions/:questionId"
                    element={<QuestionSubmitPage />}
                  />
                  <Route
                    path="/subjects/:subjectId/questions/:questionId/explain"
                    element={<ExplainPage />}
                  />
                  <Route
                    path="/subjects/:subjectId/questions/:questionId/edit"
                    element={<QuestionEditPage />}
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
