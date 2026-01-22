import { createRoot } from "react-dom/client";
import App from "./App";

const el = document.getElementById("root");
const root = createRoot(el);

function Main() {
  return (
    <div>
      <App />
    </div>
  );
}

root.render(<Main />);
