import Clock from "./components/clock/clock";
import Tooltip from "./components/tooltip/tooltip";
import { useTooltipStore } from "./stores/tooltip-store";

function App() {
  const { showTooltip, left, top } = useTooltipStore().tooltipState;

  console.log(showTooltip, left, top);

  return (
    <>
      <Clock />
      {showTooltip && <Tooltip position={{ left, top }} />}
    </>
  );
}

export default App;
