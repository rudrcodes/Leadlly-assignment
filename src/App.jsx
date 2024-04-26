import Navbar from "./components/Navbar";
import AllRoutes from "./AllRoutes";
function App() {

  return (
    <div className="h-screen w-screen overflow-x-hidden font-display ">
      <Navbar />
      {/* <Home /> */}
      <AllRoutes />
    </div>
  )
}

export default App
