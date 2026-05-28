export default function Dashboard(){

  const username =
    localStorage.getItem("username") || "Traveler";

  const hour = new Date().getHours();

  let greeting = "Welcome";

  if(hour < 12){
    greeting = "Good Morning";
  }
  else if(hour < 18){
    greeting = "Good Afternoon";
  }
  else{
    greeting = "Good Evening";
  }

  return(

    <div>

      <h1>
        {greeting}, {username} 👋
      </h1>

      <div className="cards">

        <div className="card">
          <h2>Total Trips</h2>
          <p>12 Trips</p>
        </div>

        <div className="card">
          <h2>Total Expenses</h2>
          <p>₹45,000</p>
        </div>

        <div className="card">
          <h2>Insurance Status</h2>
          <p>Active</p>
        </div>

      </div>

      <div
        className="card"
        style={{marginTop:"20px"}}
      >

        <h2>Upcoming Trip</h2>

        <p>Goa Beach Vacation</p>

        <p>12 June 2026</p>

      </div>

      <footer
  style={{
    marginTop:"40px",
    textAlign:"center",
    opacity:"0.7"
  }}
>

  TravelMate © 2026

  <br/>

  Developed by Shivprasad Patil

</footer>

    </div>

    
  );
}