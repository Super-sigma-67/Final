import Card from "../components/Card";
import Footer from "../components/Footer";
import mypicture from "../assets/dramatione.png";
import ImageCard from "../components/imgg";
import Food from "../components/Food";
const food1 = "Allows you to see how much you are spending on subscriptions each month";
const food2 = "Shows what subscriptions you have";
const food3 = "A helpful visual to show you how much you are spending on subscriptions each month!";
function Profile() {
  return ( 
  <> 
    <h1>Profile Page</h1> 
    <h1> Why a subscription helper is important:</h1>
    <Food food1={food1} food2={food2} food3={food3} />

  </>
)
};

export default Profile;
