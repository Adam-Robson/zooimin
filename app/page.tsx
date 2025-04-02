import Buttoncard from "@/_components/_button-card/button-card";
import Footer from "@/_components/footer";
import Header from "@/_components/header";
import MainPage from "@/_components/main";

export default function HomePage() {
  return (
    <div className="root">
      <Header />
      <MainPage />
      <Buttoncard />
      <Footer />
    </div>
  );
}
