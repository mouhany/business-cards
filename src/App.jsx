import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cards from "./components/Cards";
import "./App.css";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

function App() {
  const profiles = [
    {
      name: "Bowie",
      sex: "Male",
      dob: "2017·11·15",
      adopted: "2018·01·24",
      weight: "5.4kg",
      stats: {
        appetite: 9,
        speed: 6,
        sleep: 9,
        affection: 8,
      },
      pic: "assets/bowie.JPG",
    },
    {
      name: "Tombi",
      sex: "Male",
      dob: "Unknown (rescue)",
      adopted: "2019·10·07",
      weight: "5.5kg",
      stats: {
        appetite: 8,
        speed: 8,
        sleep: 7,
        affection: 10,
      },
      pic: "assets/tombi.JPG",
    },
    {
      name: "Miu",
      sex: "Female",
      dob: "Unknown (rescue)",
      adopted: "2020·01·27",
      weight: "3.8kg",
      stats: {
        appetite: 7,
        speed: 8,
        sleep: 9,
        affection: 9,
      },
      pic: "assets/miu.JPG",
    },
    {
      name: "Nana",
      sex: "Female",
      dob: "2020·03·18",
      adopted: "2020·03·18",
      weight: "3.4kg",
      stats: {
        appetite: 7,
        speed: 10,
        sleep: 7,
        affection: 7,
      },
      pic: "assets/nana.JPG",
    },
    {
      name: "Sapi",
      sex: "Male",
      dob: "2020·03·19",
      adopted: "2020·03·19",
      weight: "4.3kg",
      stats: {
        appetite: 8,
        speed: 7,
        sleep: 7,
        affection: 9,
      },
      pic: "assets/sapi.JPG",
    },
    {
      name: "Otam",
      sex: "Male",
      dob: "2020·03·19",
      adopted: "2020·03·19",
      weight: "4.9kg",
      stats: {
        appetite: 9,
        speed: 7,
        sleep: 7,
        affection: 9,
      },
      pic: "assets/otam.JPG",
    },
  ];

  return (
    <div className="snap-mandatory snap-y min-h-screen md:h-screen overflow-y-scroll flex flex-col md:flex-row md:flex-wrap items-center justify-center ">
      <div className="text-stone-600 opacity-50 flex flex-row justify-center gap-3 fixed top-2 text-xl md:text-2xl lg:text-3xl">
        <FontAwesomeIcon icon={faPaw} />
        Purrofessional Business Cards!
        <FontAwesomeIcon icon={faPaw} />
      </div>
      {profiles.map((profile, index) => (
        <Cards data={profile} key={index} />
      ))}
      <footer className="text-stone-600 opacity-20 fixed bottom-2 text-xs">
        Copyright © 2024, Mouhany.
      </footer>
    </div>
  );
}

export default App;
