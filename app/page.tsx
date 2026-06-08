import Hero from "@/components/sections/Hero";
import Experiences from "@/components/sections/Experiences";
import Gamessection from "@/components/sections/Gamessection";
import Whychooseus from "@/components/sections/Whychooseus";
import Gallery from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import Instagramgrid from "@/components/sections/Instagramgrid";

export default function Home() {
  return (
    <>
      <Hero />
      <Experiences />
      <Gamessection />
      <Whychooseus />
      <Gallery />
      <Testimonials />
      <Instagramgrid />
    </>
  );
}