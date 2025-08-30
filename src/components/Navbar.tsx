/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useContext, useState } from "react"
import logo from "../assets/logo.png"
import Genres from "./Genres"
import { Input } from "./ui/input"
import ThemeToggle from "./ThemeToggle"
import { IoLogoGithub } from 'react-icons/io5';
import { Link, useNavigate  } from "react-router"
import { SearchResultContext } from "@/context/searchResult.context"

const Navbar = () => {
  const navigate = useNavigate();
  const {searchText, setSearchText} = useContext(SearchResultContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    navigate(`/search/${e.target.value}`);

    if (e.target.value.length === 0) {
      navigate(`/`)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchText}`);
  }
  return (
    <div className="flex items-center justify-between gap-3 px-5 my-3 text-xl md:px-10 sm:px-5">
      <img 
      src={logo}
      alt="logo"
      className="cursor-pointer md:h-14 sm:h-9 h-9 hover:opacity-80"
      onClick={() => {
        navigate("/")
      }}
      />
      <h2 className="text-3xl font-bold">UHD Movies</h2>
      <div className="flex items-center gap-3">
        <form action="">
            <Input 
            placeholder="Search Your Movies, TV Shows and Anime...." 
            className="border-gray-500 rounded-2xl md:w-fit sm:w-[30vw]" 
            value={searchText}
            onChange={handleChange}
            />
        </form>
        <div className="hidden md:block sm:hidden">
            <div className="flex items-center gap-6">
                <Genres />
            <Link to={"/Movies"}>
            <div>Movies</div>
            </Link>
            <Link to={"/TVShows"}>
            <div>TV Shows</div>
            </Link>
            </div>
        </div>
        <a href="https://github.com/Piyush0692/Movie-App" target="_blank" rel="noopener noreferrer">
          <IoLogoGithub size={30} />
        </a>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Navbar
