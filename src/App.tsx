import { Menu } from "./component/Menu"
import config from "./menu.json";

function App() {
  return (
    <div className="container mx-auto">
      <div className="mb-5">
        <h1 className="text-center text-4xl">Test Chanel</h1>
      </div>
      <Menu config={config} />
    </div>
  )
}

export default App
