import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img_url={item.img_url}
        country={item.country}
        location={item.location}
        start_date={item.start_date}
        end_date={item.end_date}
        text={item.text}
      />
    );
  });

  return (
    <div className="App max-w-[550px] mx-auto bg-white">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
