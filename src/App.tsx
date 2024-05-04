import "./App.css";
import AvgTable from "./components/AvgTable";
import "@mantine/core/styles.css";
import MaxMinTable from "./components/MaxMinTable";

function App() {
  return (
    <div className="App">
      <MaxMinTable />
      <AvgTable />
    </div>
  );
}

export default App;
