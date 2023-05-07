import Clock from "./components/clock/clock";
import TimeConfigMenu from "./components/time-config-menu/time-config-menu";
import Tooltip from "./components/tooltip/tooltip";
import { useTooltipStore } from "./stores/tooltip-store";

function App() {
  const { showTooltip } = useTooltipStore().tooltipState;

  return (
    <>
      <TimeConfigMenu />
      <Clock />
      {showTooltip && <Tooltip />}
    </>
  );
}

export default App;
