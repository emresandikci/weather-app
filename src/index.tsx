import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from './app';

import { ToastContainer } from 'react-toastify';
import dayjs from 'dayjs';

import 'dayjs/locale/tr';
import 'dayjs/locale/en';

import localizedFormat from 'dayjs/plugin/localizedFormat';

import 'utils/localization';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { MainLayout } from 'containers';
import i18n from 'utils/localization';
import { AppContextProvider } from 'context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AppContextProvider>
        <MainLayout>
          <App />
        </MainLayout>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnHover
          theme="light"
        />
      </AppContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

//dayjs plugin
dayjs.extend(localizedFormat);
i18n.on('languageChanged', (lang) => {
  dayjs.locale(lang);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
