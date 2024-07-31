import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Card from "./Card";
function App() {
  const cards = [
    {
      plan: "FREE",
      price: 0,
      features: [
        {
          name: "Single User",
          enable : true
        },
        {
          name: "50GB Storage",
          enable : true
        },
        {
          name: "Unlimited Public Projects",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        },
        {
          name: "Unlimited Private Projects",
          enable : false
        },
        {
          name: "Dedicated phone Support",
          enable : false
        },
        {
          name: "Free Subdomain",
          enable : false
        },
        {
          name: "Monthly Status Reports",
          enable : false
        },
      ],
    },
    {
      plan: "PLUS",
      price: 9,
      features: [
        {
          name: "5 Users",
          enable : true
        },
        {
          name: "50GB Storage",
          enable : true
        },
        {
          name: "Unlimited Public Projects",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        },
        {
          name: "Unlimited Private Projects",
          enable : true
        },
        {
          name: "Dedicated phone Support",
          enable : true
        },
        {
          name: "Free Subdomain",
          enable : true
        },
        {
          name: "Monthly Status Reports",
          enable : false
        },
      ],
    },
    {
      plan: "PRO",
      price: 49,
      features: [
        {
          name: "5 Users",
          enable : true
        },
        {
          name: "50GB Storage",
          enable : true
        },
        {
          name: "Unlimited Public Projects",
          enable : true
        },
        {
          name: "Community Access",
          enable : true
        },
        {
          name: "Unlimited Private Projects",
          enable : true
        },
        {
          name: "Dedicated phone Support",
          enable : true
        },
        {
          name: "Free Subdomain",
          enable : true
        },
        {
          name: "Monthly Status Reports",
          enable : true
        },
      ],
    },
  ];
  return (
    <div className="container">
      <Header />
      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center text-bg-primary p-3">
          {cards.map((card, index) => {
            return <Card key={index} card={card} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
