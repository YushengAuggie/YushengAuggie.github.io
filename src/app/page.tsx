import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import RecentPosts from "@/components/home/RecentPosts";
import PhotoTeaser from "@/components/home/PhotoTeaser";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FeaturedProjects />
      <RecentPosts />
      <PhotoTeaser />
    </>
  );
}
