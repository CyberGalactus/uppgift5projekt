"use client"
import React, {useEffect, useState} from "react";

import axios from 'axios';
import Navbar from "@/app/components/navbar";

const Page = () => {
  const CLIENT_ID = "fb337f28fd9f4dcfb2430b7210766eab"
  const REDIRECT_URI = "https://uppgift5projekt.vercel.app/spotifyApi"
  const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")
  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    // getToken()

 console.log({ token})
    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setToken(token)

}, [])

const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
}

const searchArtists = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type: "artist"
        }
    })

    setArtists(data.artists.items)
}

const renderArtists = () => {
    return artists.map(artist => (
        <div key={artist.id}>
            {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
            {artist.name}
        </div>
    ))
}

  return (
    <main className="flex w-full flex-col items.center justify-center">
        <Navbar />
    <div className="p-4 bg-slate-800 h-screen text-white text-center">
        <header>
            <h1>Spotify Next</h1>
        {!token ?
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                to Spotify</a>
            : <button onClick={logout}>Logout</button>}

        {token ?
            <form onSubmit={searchArtists}>
                <input className="border border-2 border-black text-black" type="text" onChange={e => setSearchKey(e.target.value)}/>
                <button type={"submit"}>Search</button>
            </form>

            : <h2>Please login</h2>
        }

        {renderArtists()}

        </header>
    </div>
    </main>
  );
};

export default Page; 