import { Menu } from "./component/Menu"

const configExample = {
  name: "designplox",
  children: [
    { name: "artists", children: [{ name: "mickael jackson", children: [{ name: "britney spears" }, { name: "usher" }] }, { name: "kayne west" }, { name: "christophe mae" }] },
    { name: "albums", children: [{ name: "get your wings" }, { name: "hotel california" }, { name: "phisical graffiti", children: [{ name: "houses of the holy" }, { name: "in my time of dying" }] }] },
    { name: "songs", children: [{ name: "d" }, { name: "e" }] },
    { name: "genres", children: [{ name: "rock" }, { name: "rnb" }] },
    { name: "settings", children: [{ name: "name" }, { name: "i", children: [{ name: "2", children: [{ name: "3" }] }] }] },
  ]
}

function App() {
  return (
    <div className="container mx-auto">
      <div className="mb-5">
        <h1 className="text-center text-4xl">Test Chanel</h1>
      </div>
      <Menu config={configExample} />
    </div>
  )
}

export default App
