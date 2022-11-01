import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
} from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer, toast } from "react-toastify";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: any) => {
      toast("Error: " + error.message);
    },
  }),
});

const Root = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
        <ToastContainer />
      </QueryClientProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Root />
);
