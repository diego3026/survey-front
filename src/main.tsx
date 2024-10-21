import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "@routes";
import { SnackbarProvider } from "notistack";
import {SnackbarUtilsConfigurator} from "./components/snackbar/SnackbarUtils";
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import {AxiosInterceptor} from "./interceptor";

AxiosInterceptor();

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <SnackbarProvider maxSnack={3}>
              <SnackbarUtilsConfigurator />
              <RouterProvider />
          </SnackbarProvider>
      </QueryClientProvider>
  </StrictMode>,
)
