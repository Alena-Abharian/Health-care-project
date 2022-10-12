import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Loader from './Loader';
import NotFound from 'page/notFoundPage/NotFound';
// import Header from './header';
// import Footer from './footer';

import PublicRouter from '../utils/PublicRouter';
import PrivateRoute from '../utils/PrivateRoute';
import Layout from './layout/Layout';

const MainPage = lazy(() => import('page/mainPage'));
const DiaryPage = lazy(() => import('page/diaryPage'));
const CalculatorPage = lazy(() => import('page/calculatorPage'));
const LoginPage = lazy(() => import('page/loginPage'));
const RegistrationPage = lazy(() => import('page/registrationPage'));

export default function App() {
  return (
    <>
      {/* <Header /> */}

      {/* <Suspense fallback={<Loader />}> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRouter>
                <MainPage />
              </PublicRouter>
            }
          />
          <Route
            path="/diary"
            element={
              <PrivateRoute>
                <DiaryPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/calculator"
            element={
              <PrivateRoute>
                <CalculatorPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRouter restricted redirectTo="/calculator">
                <LoginPage />
              </PublicRouter>
            }
          />
          <Route
            path="/registration"
            element={
              <PublicRouter restricted redirectTo="/login">
                <RegistrationPage />
              </PublicRouter>
            }
          />
          <Route
            path="*"
            element={
              <PublicRouter>
                <NotFound />
              </PublicRouter>
            }
          />
        </Route>
      </Routes>
      {/* </Suspense> */}
      {/* <Footer /> */}
    </>
  );
}
