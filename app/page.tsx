import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import AnnouncementsPreview from "@/components/AnnouncementsPreview";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProjectsSection />
        <AnnouncementsPreview />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
