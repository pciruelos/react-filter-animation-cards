import { useEffect, useState } from "react";
import Card from "./Card";
import Filter from "./Filter";
import "./index.css";
import {motion,AnimatePresence} from 'framer-motion'

function App() {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activebutton, setActivebutton] = useState(0)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=a4a9fe435be6c6824b17faae220428fe&language=en-US&page=1"
    );
    const data = await response.json();
    setMovies(data.results);
    setFiltered(data.results);
  };

  console.log(movies);

  return (
    <div className="bg-gray-800 w-full h-screen text-white">
      <div className="w-[80%] mx-auto py-20">
        <h1 className="text-2xl font-bold">The most Popular movies are:</h1>
        <Filter movies={movies} setFiltered={setFiltered} activebutton={activebutton} setActivebutton={setActivebutton} />
        <motion.div layout className="grid md:grid-cols-4 gap-4">
            <AnimatePresence>
          {filtered.map((m) => {
            return <Card key={m.id} movies={m} />;
          })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
