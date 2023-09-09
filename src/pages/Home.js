import Hero from "../components/Hero";
import Special from "../components/Special";
import brus from "../images/specials/bruschetta.jpg";
import greek from "../images/specials/greekSalad.jpg";
import dessert from "../images/specials/dessert.jpg";
import Testimonials from "../components/Testimonials";

// TODO: Try using public APIs
const data = [
  {
    name: "Greek Salad",
    price: "$9.99",
    image: greek,
    description: "Lettuce, peppers, olives and feta cheese, garnished with garlic and croutons.",
  },
  {
    name: "Bruschetta",
    price: "$19.99",
    image: brus,
    description: "Grilled bread smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    name: "Lemon Special",
    price: "$14.99",
    image: dessert,
    description: "This comes straight from grandma's recipe book.",
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <Special data={data} />
      <Testimonials />
    </>
  );
};

export default Home;