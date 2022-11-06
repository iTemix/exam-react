import React from "react";
import circle from "./images/circle.png";

function Home() {
  return (
    <>
      <main>
        <div className="home-header header content">
          <h1> Welcome,</h1>
          <p> This is an examination project given at Altschool. </p>
          <p>
            {" "}
            Implement an API fetch of your GitHub portfolio, show a page with a
            list of all your repositories on GitHub(the page should implement
            pagination for the repo list), and create another page showing data
            for a single repo clicked from the list of repos using nested routes
            while using all the necessary tools in react. Implement the proper
            SEO, Error Boundary (show a page to test the error boundary) and 404
            pages. Good UI and Designs are important.{" "}
          </p>
          <button className="btns home-btn"> Get Started</button>
          <button className="btns home-btn2"> Learn More</button>
        </div>
        <div>
          <img src={circle} alt="circle" />
        </div>
      </main>
    </>
  );
}

export default Home;
