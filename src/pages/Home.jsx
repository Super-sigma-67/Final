
import Card from "../components/Card";
import Footer from "../components/Footer";
import mypicture from "../assets/antoine.png";
import ImageCard from "../components/imgg";


function Home() {
  return ( 
  <> 
  <div class name = "bg-amber-500">
    <h1>Home Page</h1> 
    <Card myTitle="Welcome to my project!" mySubtitle="Helping you save money on subscriptions!" myBlurb="By Coyo Tena"></Card>

    <ImageCard myImage={mypicture}></ImageCard>
</div>
  </>
)
};

export default Home;
