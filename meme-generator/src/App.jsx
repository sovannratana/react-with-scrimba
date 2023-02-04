import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App max-w-[550px] mx-auto">
      <Navbar />
      <section>
        <Form />
      </section>
    </div>
  );
}

export default App;
