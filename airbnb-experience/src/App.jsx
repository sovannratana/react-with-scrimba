import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const data = [
    {
      id: 1,
      img: "card1.svg",
      rating: "5.0",
      reviewCount: 6,
      country: "USA",
      title: "Life lessons with Katie Zaferes",
      price: 136,
    },
    {
      id: 2,
      img: "card2.svg",
      rating: "5.0",
      reviewCount: 30,
      country: "USA",
      title: "Learn wedding photography",
      price: 125,
    },
    {
      id: 3,
      img: "card3.svg",
      rating: "4.8",
      reviewCount: 2,
      country: "USA",
      title: "Group Mountain Biking",
      price: 50,
    },
  ];
  return (
    <div className="app bg-white rounded-lg">
      <Navbar />
      <Hero />
      <Card data={data} />
    </div>
  );
}

export default App;
