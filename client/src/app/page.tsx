import Banner from "../components/PageComponents/Home/Banner";
import Category from "../components/PageComponents/Home/Category";
import FlashSale from "../components/PageComponents/Home/FlashSale";
import JustForYou from "../components/PageComponents/Home/JustForYou";

export default function Home() {
  return (
    <section className="">
      <Banner />
      <FlashSale />
      <Category />
      <JustForYou />
    </section>
  );
}
