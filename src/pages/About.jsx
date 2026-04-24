import Card from "../components/Card";
import Footer from "../components/Footer";
import mypicture from "../assets/dramatione.png";
import ImageCard from "../components/imgg";

function About() {
  return ( 
  <> <div className = "bg-cyan-400">
    <h1>About Page</h1> 
    <Card myTitle="About Us" mySubtitle="Our Mission:" myBlurb="The goal of my project is to help you save money on your subscriptions by inputing them into a table which shows how much you are spending each month on subscriptions!" ></Card>

    <ImageCard myImage={mypicture}></ImageCard>
</div>
  </>
)
};

export default About;
