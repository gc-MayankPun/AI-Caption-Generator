import Logo from "./components/Logo";
import CaptionUploader from "./components/CaptionUploader";
import CaptionLogs from "./components/CaptionLogs";
import { ToastContainer, Slide } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const App = () => {
  const [captionLogs, setCaptionLogs] = useState([]);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className="h-[100dvh] py-[2rem] px-[1rem] lg:px-[2rem]">
        <Logo />
        <div className="border-[.1rem] border-[var(--secondary-text-color)] mt-3 rounded-2xl bg-[white]/10 backdrop-blur-xs px-[1rem] lg:px-[2rem] py-[2rem] lg:w-[55%] m-auto">
          <CaptionUploader setCaptionLogs={setCaptionLogs} />
          <CaptionLogs captionLogs={captionLogs} />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
        />
      </main>
    </QueryClientProvider>
  );
};

export default App;
