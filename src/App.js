import Clock from "./components/clock/clock";
import Tooltip from "./components/tooltip/tooltip";
import { useTooltipStore } from "./stores/tooltip-store";

function App() {
  const { showTooltip } = useTooltipStore().tooltipState;

  return (
    <>
      <Clock />
      {showTooltip && <Tooltip />}
    </>
  );
}

export default App;
