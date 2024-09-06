import Gallery from "./components/Gallery";
import Pages from "./components/Pages";

function App() {
  return (
    <div className="flex bg-gray-700 h-full">
      <div className="flex-1"></div>
      <div className="flex-1 flex flex-col gap-5 m-5">
        <Pages />
        <div className="flex justify-center">
          <div className="w-[612px] h-1  bg-[linear-gradient(180deg,rgba(40,40,40,0.1)0%,rgba(248,248,248,0.1)100%),linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05))] rounded shadow-custom-6"></div>
        </div>
        <Gallery />
        <div className="flex justify-center">
          <div className="w-[612px] h-1  bg-[linear-gradient(180deg,rgba(40,40,40,0.1)0%,rgba(248,248,248,0.1)100%),linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05))] rounded shadow-custom-6"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
