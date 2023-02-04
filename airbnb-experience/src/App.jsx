import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        openSpots={item.openSpots}
        img={item.img}
        rating={item.rating}
        reviewCount={item.reviewCount}
        country={item.country}
        title={item.title}
        price={item.price}
        location={item.location}
      />
    );
  });
  return (
    <div className="app bg-white rounded-lg">
      <Navbar />
      <Hero />
      <section className="cards flex ml-8 pb-6 space-x-5">{cards}</section>
    </div>
  );
}

export default App;
