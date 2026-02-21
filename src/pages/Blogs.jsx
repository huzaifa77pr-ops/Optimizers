import BlogsFinalCTA from "../components/blogs/BlogsFinalCTA";
import BlogsGridSection from "../components/blogs/BlogsGridSection";
import BlogsHero from "../components/blogs/BlogsHero";
import BlogsNewsletterSection from "../components/blogs/BlogsNewsletterSection";
import FeaturedBlogSection from "../components/blogs/FeaturedBlogSection";
import Footer from "../components/Footer";

export default function Blogs() {
  return (
    <main className="w-full bg-white">
      <BlogsHero />
      <FeaturedBlogSection/>
      <BlogsGridSection/>
      <BlogsNewsletterSection/>
      <BlogsFinalCTA/>
      <Footer/>
    </main>
  );
}