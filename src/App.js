import { ForecastContainer, FutureForecasts, Sidebar } from "./components";

function App() {
  return (
    <main className="h-screen w-full bg-slate-950 text-white flex flex-col gap-4 p-4 overflow-hidden">
      <div className="h-full w-full flex justify-center gap-x-6">
        <div className="w-[8%] rounded-xl bg-slate-800">
          <Sidebar />
        </div>
        <div className="w-[58%]">
          <ForecastContainer />
        </div>
        <div className="w-[32%] rounded-xl bg-slate-800 mt-20">
          <FutureForecasts />
        </div>
      </div>
    </main>
  );
}

export default App;
