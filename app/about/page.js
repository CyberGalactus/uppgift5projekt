import Navbar from "../components/navbar";
import Image from "next/image";

const About = () =>  {
    return (
        <>
        <main className="flex w-full flex-col items.center justify-center">
            <Navbar />
            <section className="p-4 bg-slate-800 h-screen text-white">

            <h1 className="">about our company</h1>
            <div className="grid w-full grid-cols-8 gap-16">
                <div className="col-span-3 flex flex-col items-start justify-start">
                    <h2 className="mb-4 text-lg font hold uppercase text-dark/75">Spotify</h2>
                    <p className="font-medium">Quisque blandit, tellus ac placerat dictum, 
          mi diam placerat nulla, non vehicula felis 
          diam aliquam diam. Curabitur lorem felis, iaculis 
          sit amet ligula ut, luctus finibus odio. Nullam lacinia, 
          mi blandit convallis auctor, augue velit placerat ex, 
          vitae vestibulum tortor nunc at dui. Sed dignissim nibh 
          at dui dictum, ac porttitor metus hendrerit. Donec vitae 
          sem sit amet lacus molestie faucibus at in lorem. Praesent</p>
                    <p className="my-4 font-medium"> Quisque blandit, tellus ac placerat dictum, 
          mi diam placerat nulla, non vehicula felis 
          diam aliquam diam. Curabitur lorem felis, iaculis 
          sit amet ligula ut, luctus finibus odio. Nullam lacinia, 
          mi blandit convallis auctor, augue velit placerat ex, 
          vitae vestibulum tortor nunc at dui. Sed dignissim nibh 
          at dui dictum, ac porttitor metus hendrerit. Donec vitae 
          sem sit amet lacus molestie faucibus at in lorem. Praesent</p>
                    <p className="font-medium"> Quisque blandit, tellus ac placerat dictum, 
          mi diam placerat nulla, non vehicula felis 
          diam aliquam diam. Curabitur lorem felis, iaculis 
          sit amet ligula ut, luctus finibus odio. Nullam lacinia, 
          mi blandit convallis auctor, augue velit placerat ex, 
          vitae vestibulum tortor nunc at dui. Sed dignissim nibh 
          at dui dictum, ac porttitor metus hendrerit. Donec vitae 
          sem sit amet lacus molestie faucibus at in lorem. Praesent</p>
                </div>
            </div>
            </section>
        </main>
        </>
    )
}

export default About;