import React,{useState} from 'react';

function ProjectSec() {
    const gradientStyle = {
        background: 'linear-gradient(to right, rgb(0, 0, 0), #343a40, #212529)'
    };

    const cards = [
        {
          title: "Wheather Forecast",
          subtitle: "A responsive web application that provides real-time weather forecasts for locations around the world. Users can enter a city name to view current weather conditions, temperature, humidity, and more.",
          tech: "HTML, CSS, JavaScript, OpenWeatherMap, API",
          git:"https://github.com/hack-09/WhetherForecast",
          demo:"https://hack-09.github.io/WhetherForecast/"
        },
        {
          title: "Recipe Sharing Platform (Web)",
          subtitle: "A web application that allows users to discover, share, and store their favorite recipes.",
          tech: "HTML CSS Node.js Express.js MongoDB",
          git:"https://github.com/hack-09/RecipeSharingPlatform",
          demo:"https://recipesharingplatform.onrender.com/"
        },
        {
          title: "Recipe Hub (Android App)",
          subtitle: "Welcome to Recipe Hub, where food enthusiasts come together to share and explore delicious recipes. Whether you're a seasoned chef or a home cook, this app is your go-to platform for discovering and sharing your favorite culinary creations.",
          tech: "Android Studio, Firebase, Java",
          git:"https://github.com/hack-09/Recipe-Hub",
        },
        {
          title: "Unit Convertor",
          subtitle: "UnitConvert Pro is a powerful and user-friendly mobile application designed for whether you're dealing with kilometers, meters, miles, inches, or feet, this app provides a seamless and efficient way to convert lengths with precision.",
          tech: "Android Studio, Java",
          git:"https://github.com/hack-09/Unit-Converter",
        },
      ];

    const [showAll, setShowAll] = useState(false);

    const visibleCards = showAll ? cards : cards.slice(0, 3);

    const handleShowMore = () => {
        setShowAll(true);
    };

    return (
    <div className="justify-content-between p-4" style={gradientStyle}>
        <h1 className="container fw-bolder my-4" style={{width:"100px"}}>Projects</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
            {visibleCards.map((card, index) => (
            <div className="col" key={index}>
                    <div className="card" style={{width: "28rem", minHeight:"17rem"}}>
                        <div className="card-body">
                            <h4 className="card-title fw-bolder">{card.title}</h4>
                            <h6 className="card-subtitle mb-2 text-body-secondary pb-2">{card.subtitle}</h6>
                            <h6>Technologies Used</h6>
                            <p className="card-text">{card.tech}</p>
                            <a href={card.git} className="card-link">Github Repo</a>
                            <a href={card.demo} className="card-link">{card.demo?"Live Demo":""}</a>
                        </div>
                    </div>
            </div>
            ))}
        </div>
        {!showAll && cards.length > 3 && (
            <div className="text-center mt-3">
                <button className="btn btn-primary" onClick={handleShowMore}>Show More</button>
            </div>
        )}
    </div>
  )
}

export default ProjectSec;
