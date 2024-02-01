import React from "react";
import "./upcomingEvents.css";

const upcomingEvents = [
  {
    date: "Feb 6th-Feb 9th",
    location: "Atlanta Apparel Market",
    address: "AmericasMart",
    street: "250 Spring St NW, BLDG #3 8104B",
    city: "Atlanta, GA",
    image:
      "https://footwearnews.com/wp-content/uploads/2023/08/atlanta-apparel-1.jpg",
  },
  {
    date: "Feb 13th-Feb 15th",
    location: "Las Vegas MAGIC Footwear",
    address: "Las Vegas Convention Center, Las Vegas NV",
    street: "3150 Paradise Rd, Las Vegas, NV 89109",
    city: "Las Vegas, NV",
    image:
      "https://preview.thenewsmarket.com/Previews/LVVA/StillAssets/960x540/531899.jpg",
  },
  {
    date: "Feb 13th-Feb 15th",
    location: "Womens Wear In Nevada",
    address: "The Expo At The World Market Center, Booth #1804",
    street: "435  S Grand Central Pkwy, Las Vegas, NV 89106",
    city: "Las Vegas, NV",
    image:
      "https://www.shelterrealty.com/wp-content/uploads/2019/12/world_market_center.jpg",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="upcoming-container">
      <div>
        <h1>Upcoming Shows</h1>
      </div>
      <div className="events-container">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.image} alt={`Event ${index + 1}`} />
            <div className="event-info">
              <p>{event.date}</p>
              <h3>{event.location}</h3>
              <p>{event.address}</p>
              <p>
                {event.street}, {event.city}
              </p>
            </div>
            <div className="button-container">
              <button className="learn-more-button">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
