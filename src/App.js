import React from "react";
import './App.css';
class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      'https://fakestoreapi.com/products')
      .then((res) => res.json())
      ///.then(json => console.log(json))
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div>;

    return (
      <div className="">
        <div style={{ display: "flex", alignItems: "left", justifyContent: "space-between" }}>
          <h1 > Fetch data from an api in react </h1> </div>
        <div className="productwrapper">
          {
            items?.map((item) => (
              <div >
                <div className="main" style={{ margin: "0.5rem", border: "1px solid trasparent", width: "17rem", textAlign: "center", backgroundColor: "white" }}>
                  <img src={item.image} style={{ width: "10rem", height: "10rem", padding: "20px" }} />
                  {/* <div className="card">User_Id: {item.id},</div> */}
                  <div className="card1">{item.title.slice(0, 25)} </div>
                  <div className="card2"> {item.price}  $</div>
                  <div className="card3">{item.category}</div>
                  <div className="card4"> {item.description.slice(0, 40)}.....<span>Read more</span></div>

                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;

