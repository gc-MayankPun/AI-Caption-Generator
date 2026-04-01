// import Logo from "./components/Logo";
import CaptionUploader from "./components/CaptionUploader";
import CaptionLogs from "./components/CaptionLogs";
import { ToastContainer, Slide } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Logo from "./components/ui/Logo";

const queryClient = new QueryClient();

const App = () => {
  const [captionLogs, setCaptionLogs] = useState([]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-bg">
        {/* Ambient blobs */}
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />

        <main className="app-main">
          <Logo />

          <div className="app-card">
            <CaptionUploader setCaptionLogs={setCaptionLogs} />

            <div className="divider" />

            <CaptionLogs captionLogs={captionLogs} />
          </div>

          <p className="app-footer">Made with ♥ by GC_Mayank</p>
        </main>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={1800}
        limit={1}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        closeButton={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </QueryClientProvider>
  );
};

export default App;
