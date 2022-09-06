import { useEffect } from "react";

const Filter = ({movies, setFiltered, activebutton, setActivebutton}) => {
  useEffect(() => {
    if (activebutton === 0) {
        setFiltered(movies)
        return;
    }
    const filtered = movies.filter(m=> m.genre_ids .includes(activebutton))
    setFiltered(filtered)
  }, [activebutton]);

  return (
    <div className="flex justify-around items-center text-xl italic m-5 text-black">
      <button onClick={()=> setActivebutton(0)} className={`bg-gray-200 px-5 py-1 rounded-2xl ${activebutton === 0 ? 'bg-blue-500' : ''}`}>All</button>
      <button onClick={()=> setActivebutton(35)} className={`bg-gray-200 px-5 py-1 rounded-2xl ${activebutton === 35 ? 'bg-blue-500' : ''}`}>Comedy</button>
      <button onClick={()=> setActivebutton(28)} className={`bg-gray-200 px-5 py-1 rounded-2xl ${activebutton === 28 ? 'bg-blue-500' : ''}`} >Action</button>
    </div>
  );
};

export default Filter;
