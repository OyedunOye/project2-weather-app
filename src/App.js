import ForecastContainer from "./components/ForecastContainer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="h-screen w-full bg-slate-950 text-white flex flex-col gap-4 p-4 overflow-hidden">
      <div className="h-full w-full flex justify-center gap-x-6">
        <div className="w-[8%] border">
          <Sidebar />
        </div>
        <div className="w-[58%] border">
          <ForecastContainer />
        </div>
        <div className="w-[32%] border">Hello</div>
      </div>
    </main>
  );
}

export default App;
