import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import SubSider from "./components/SubSider";

function App() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <SubSider />
      <Content />
    </div>
  );
}

export default App;
