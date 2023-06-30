import Navbar from "../components/navbar";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <main className="flex w-full flex-col items.center justify-center">
        <Navbar />
        <section className="p-4 bg-slate-800 h-screen text-white">
          
            <div className="contact-content">
              <h2>Contact Me</h2>
              <p>augue velit placerat ex vitae vestibulum tortor nunc at dui 
                Sed dignissim nibh at dui dictum ac porttitor metus hendrerit</p>
            </div>
            
                  <div className="text">
                    <h3>Address</h3>
                    <p>götgatan 26,<br />118 46 Stockholm</p>
                  </div>

                  <div className="text">
                    <h3>Phone</h3>
                    <p>0705362020</p>
                  </div>

                  <div className="text">
                    <h3>Email</h3>
                    <p>Edu.garma97@hotmail.com</p>
                  </div>
        </section>
      </main>
    </>
  );
}
