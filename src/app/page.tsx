import Slide from "./components/slide/Slide";
import BlogPost from "./components/blogPost/BlogPost";
import NewArival from "./components/newArival/NewArival";
import Social from "./components/social/Social";
import HomePage from "./components/homePage/HomePage";
import Products from "./components/products/Products";

export default function Home() {
  return (
    <main>
      <HomePage />
      <Slide
        buttonText={"View More"}
        pageName={"shop"}
        title="Top Picks For You"
        subtitle="Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights."
      >
        <Products numberOfProducts={4} />
      </Slide>
      <NewArival />
      <Slide
        buttonText={"View All Post"}
        title="Our Blog"
        subtitle="Find a bright ideal to suit your taste with our great selection"
      >
        <BlogPost />
      </Slide>
      <Social />
    </main>
  );
}
