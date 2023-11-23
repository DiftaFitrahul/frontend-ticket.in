import '@/styles/globals.css'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../redux/store.js';
import { LoadingContext, LoadingProvider } from "@/context/LoadingContext";
import { useContext } from "react";
import Loading from "@/components/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoadingWrapper({ children }) {
  const { isLoading } = useContext(LoadingContext);
  return (
      <>
          {isLoading && <Loading />}
          {children}
      </>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <LoadingProvider>
      <LoadingWrapper>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          	<ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </LoadingWrapper>
    </LoadingProvider>
  )
}
