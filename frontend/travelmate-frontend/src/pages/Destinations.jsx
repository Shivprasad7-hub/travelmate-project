export default function Destinations(){

  const destinations = [

    {
      name:"Goa",
      image:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
      description:"Best beaches and nightlife"
    },

    {
      name:"Dubai",
      image:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      description:"Luxury city experience"
    },

    {
      name:"Kerala",
      image:"https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
      description:"Nature and backwaters"
    },

    {
      name:"Manali",
      image:"https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
      description:"Mountain adventures"
    }

  ];

  return(

    <div>

      <h1>Popular Destinations 🌍</h1>

      <div className="cards">

        {destinations.map((place,index)=>(

          <div className="card" key={index}>

            <img
              src={place.image}
              alt={place.name}
              className="destination-img"
            />

            <h2>{place.name}</h2>

            <p>{place.description}</p>

          </div>

        ))}

      </div>

    </div>
  );
}