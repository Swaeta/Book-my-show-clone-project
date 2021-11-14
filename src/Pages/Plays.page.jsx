import React,{useEffect,useState} from "react";
import axios from "axios";

//component
import Poster from "../components/Poster/Poster.Component";
import PlayFilters from "../components/PlayFilters/PlayFilters.Component";
//import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
const Plays = () => {
  const [popularMovies,setPopularMovies]=useState([])
  useEffect(()=>{
    const requestPopularMovies=async ()=>{
        const getPopularMovies=await axios.get("/movie/popular");
       
        setPopularMovies(getPopularMovies.data.results);

    }
    requestPopularMovies();
  },[]);
  return (

    
    <>
    {/* <div className="hidden lg:block">
          <HeroCarousel/>
    </div> */}
    <div className="container mx-auto px-4 my-10">
        <div className="w-full lg:flex lg:flex-row-reverse gap-2">
          <div className="lg:w-3/4 p-4 bg-white rounded">
              <h2 className="text-2xl font-bold mb-4">
                Plays in Chennai
              </h2>
            <div className="flex flex-wrap  ">

              {
                popularMovies.map((popularMovie)=>(
                  <div className="w-1/2 md:w-1/3 xl:w-1/4 my-3">
                  <Poster
                   {...popularMovie}
                  />
                </div>
                ))
              }
           
           
          </div>
          </div>
          

          <div className="lg:w-3/12 hidden lg:flex lg:flex-col">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlayFilters title="Date" tags={["Today", "Tommorow", "This Weekend"]} />
            </div>
            <div>
              <PlayFilters title="Language" tags={["English", "Hindi", "Tamil"]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;