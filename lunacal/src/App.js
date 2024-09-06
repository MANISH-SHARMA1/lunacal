import Gallery from "./components/Gallery";
import Pages from "./components/Pages";

function App() {
  return (
    <div className="flex bg-gray-700 h-full">
      <div className="flex-1"></div>
      <div className="flex-1 flex flex-col gap-5 m-5">
        <Pages />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
