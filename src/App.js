import "./App.css";
import Block from "./Block";

function App() {
  const resources = [
    {
      title: "Trello",
      url: "https://trello.com/b/xHc099Z6/smart-city-java",
      urlName: "https://trello.com/b/xHc099Z6/smart-city-java",
    },
    {
      title: "Use Case",
      url: "https://lucid.app/lucidchart/4ed4837e-1a5f-410d-92d1-7ecc2bb554f8/edit?invitationId=inv_5d7275e4-5af1-4693-8b49-0be2ac3f842f&page=0_0#",
      urlName:
        "https://lucid.app/lucidchart/4ed4837e-1a5f-410d-92d1-7ecc2bb554f8/edit?invitationId=inv_5d7275e4-5af1-4693-8b49-0be2ac3f842f&page=0_0#",
    },
    {
      title: "Entity Relationship diagram",
      url: "https://lucid.app/lucidchart/b85b17cf-56e0-490b-afb1-d174045f86b2/edit?invitationId=inv_27ea1b54-e797-4c22-b901-e52548fa46ef&page=0_0#",
      urlName:
        "https://lucid.app/lucidchart/b85b17cf-56e0-490b-afb1-d174045f86b2/edit?invitationId=inv_27ea1b54-e797-4c22-b901-e52548fa46ef&page=0_0#",
    },

    {
      title: "Swagger",
      url: "http://housingsystembackend-env.eba-prmb6wib.eu-west-1.elasticbeanstalk.com/swagger-ui/index.html",
      urlName:
        "http://housingsystembackend-env.eba-prmb6wib.eu-west-1.elasticbeanstalk.com/swagger-ui/index.html",
    },

    {
      title: "Front End application",
      url: "https://main.d2x0nvrxovq979.amplifyapp.com/login",
      urlName: "https://main.d2x0nvrxovq979.amplifyapp.com/login",
    },

    {
      title: "Back End source code",
      url: "https://gitlab.com/smartcity-lab/housing-system/-/tree/master",
      urlName: "https://gitlab.com/smartcity-lab/housing-system/-/tree/master",
    },

    {
      title: "Front End source code",
      url: "https://github.com/JakhongirRasulov007/EPAM-training-Smart-City-Housing-System-Front-End",
      urlName:
        "https://github.com/JakhongirRasulov007/EPAM-training-Smart-City-Housing-System-Front-End",
    },
  ];

  return (
    <div className="App">
      {resources.map((resource) => (
        <Block
          title={resource.title}
          url={resource.url}
          urlName={resource.urlName}
        />
      ))}
    </div>
  );
}

export default App;
