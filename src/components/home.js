import homeimg from "../images/home.jpg"
import "./styles/home.css"
import Ftbox from "./ftbox";
import bank from "../images/bank.png"
import percent from "../images/percentage.jfif"
import handover from "../images/handover1.jfif"
import area from "../images/area1.png"
function Home() {
  let obj = {
    // width: "305px",
    // height: "40px",
    // top: "470px",
    // left: "160px",
    // position: "absolute",
    // width:"40%",
    // height:"3%",
    boxSizing:"border-box",
    backgroundColor:"rgba(0,0,0,0.26)"
  }
  let obj1 = {
    // position: "absolute",
    // top: "470px",
    // left: "157px",
    // width: "3px",
    // height: "38px",
    // width:"3px",
    // height:"38px",
    zIndex: "2",
    display: "inline-block",
    width:"0.25%",
    height:"38px",
    backgroundColor: "#17ABFF"
  }
  let obj2 = {
    // fontSize: "16px",
    // fontWeight: "600",
    // lineHeight: "15px"
    fontFamily: "Poppins",
  }
  let txt = {
    // fontSize: "13px",
    // fontWeight: "400",
    // lineHeight: "17px",
    fontFamily: "Poppins",
    textAlign: "left"
  }
  let instxt = {
    // fontSize: "15px",
    // fontWeight: "400",
    // height: "20px",
    // margin: "10px auto"
    margin:"0px",
    textAlign: "left",
    color: "white",
    fontFamily: "Poppins",
  }
  return (
    <div id="first" style={{height:"830px"}}>   
        <div style={{width: "100%", height: "650px", backgroundImage: `linear-gradient(90deg, rgba(6, 35, 73, 0.64) 10%, rgba(24, 141, 249, 0) 60%,rgba(6, 35, 73, 0.2) 10%),url(${homeimg})`, backgroundSize: "cover"}}>

        <nav class="navbar navbar-expand-sm">
          <a id="logo" class="navbar-brand">
            DAMAC
          </a>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#cn">
           <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="cn">
         <ul class="navbar-nav">
            <li class="navbar-item">
              <button class="navbar-link" id="en">ENQUIRE NOW</button>
            </li>
          </ul>
        </div>
      </nav>
        
        <div class="row mt-1" style={{height:"50%"}}>
            <div class="col-sm-6">
              <div class="w-75 mx-auto mt-3" style={{height:"60%"}}>
                 <h2 style={{margin:"0px",color:"white"}}>HARBOUR LIGHTS<br></br>
                 <b style={{ color: "#17ABFF" }}>DE GRESOGONO</b></h2>
                 <span style={{ fontFamily: "sans-serif",color:"white"}}>1, 2 & 3 Bedrooms Seaside Apartments<br></br>in Dubai Maritime City</span>
              </div>
            </div>
            <div class="col-sm-6">
              <div id="card" class="w-50 mx-auto mt-2" style={{height:"90%"}}>
                <small style={{ color: "white", fontFamily: "sans-serif"}}>PRICING STARTS FROM</small>
                <h1 style={{ color: "white", fontFamily: "sans-serif", boxSizing: "border-box", padding:"0px", margin: "0px",textAlign:"left"}}>$ 425,000</h1>
                <h2 style={{ color: "white", fontFamily: "sans-serif" }}>AED 1.3 Million</h2>
                <button id="bluebtn">GET A PRESENTATION</button>
                <div style={{ ...txt, color: "rgb(215 233 247)", textAlign: "center",backgroundColor: "#3d83bdda", fontWeight: "bold" }}><br></br>Get an Expert’s Presentation of Real Estate in Dubai for Life and investment</div>
              </div>
              </div>
            </div>
            <div class="row mt-5" style={{height:"13%"}}>
            <div class="col-12" style={obj}>
            <p style={instxt}><span style={obj1}></span> Rental Returns of <span style={obj2}>UPTO 11%**</span></p>
            </div>
            <div class="col-12" style={obj}>
            <p style={instxt}><span style={obj1}></span> Capital Appreciation of <span style={obj2}>UPTO 32%**</span></p>
            </div>
        </div>
        </div>
        <div class="row mt-2 d-flex flex-row" style={{height:"20%"}}>
            <div class="col-sm-3 col-6">
            <Ftbox img={bank} type="BOOK WITH" offer="ONLY 20%"></Ftbox>
            </div>
            <div class="col-sm-3 col-6">
            <Ftbox img={percent} type="PAYMENT PLAN" offer="EASY 70/30"></Ftbox>
            </div>
            <div class="col-sm-3 d-sm-block d-none">
            <Ftbox img={handover} type="HANDOVER ON" offer="Q2 2027"></Ftbox>
            </div>
            <div class="col-sm-3 d-sm-block d-none">
            <Ftbox img={area} type="AREA STARTS FROM" offer="700 SQMT"></Ftbox>
            </div>
        </div>
        </div>
  );
}
export default Home;