import "./introduction.scss";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="intro-left">
        <div className="text">
          <div className="up-text">
            <h3>Hi there, I am Nnquan </h3>
          </div>
          <div className="mid">
            <h1> A Learner of </h1>
            <div className="mid2-text">
              <div className="fullstack-text">
                <h1>Fullstacks</h1>
                <div className="underline"></div>
              </div>
              <div className="developer-text">
                <h1>Developer</h1>
                <div className="underline"></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="bot-text">
              <p>
                I am on a mission to revolutionize web experiences, one line of
                code at a time. My journey is fueled by an unquenchable thirst
                for knowledge and a burning passion for innovation.
              </p>
            </div>
          </div>
        </div>
        <div className="buttons">
          <div className="btn-mywork">
            <span> My Work </span>
          </div>
          <div className="btn-copyemail">
            <input
              type="text"
              placeholder="nguyennamquan@gmail.com"
              value="nguyennamquan@gmail.com"
            ></input>
            <button>DO</button>
          </div>
        </div>
      </div>

      <div className="intro-video">
        <img src="avatar.jpg" alt=""></img>
      </div>
    </div>
  );
};

export default Introduction;
