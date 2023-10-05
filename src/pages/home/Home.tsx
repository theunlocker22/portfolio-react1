import Introduction from "../../components/introduction/Introduction";
import MySkill from "../../components/myskill/MySkill";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <div className="intro">
        <Introduction />
      </div>
      <MySkill />
    </div>
  );
}

export default Home;
