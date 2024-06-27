import "./styles/amt.css"
import Card from "./card"
import fp from "../images/pool.jfif"
import sp from "../images/sp.jfif"
import sf from "../images/sf.jfif"
import gym from "../images/gym.png"

function Amt() {
    return (
        <div id="second" style={{height:"610px"}}>
        <div class="row" style={{height:"35%"}}>
         <div class="col-12">
           <h1>HARBOUR  LIGHTS</h1>
           <h4 style={{ color: "var(--darkblue)", textAlign: "center", fontSize: "small", margin: "0px auto" }}>de GRISOGONA</h4>
           <h5 style={{ color: "var(--darkblue)", textAlign: "center", margin: "0px auto" }}>GENEVE</h5>
         </div>
         <div class="col-12">
            <h2 style={{textAlign:"center"}}>FEATURES & AMENITIES</h2>
            <div id="subhead">Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront lifestyle. Its maritime-inspired amenities provide an unmatched seaside experience, offering a life of tranquility and bliss.</div>
         </div>
         </div>
         <div class="row d-flex flex-row" style={{height:"40%"}}>
           <div class="col-sm-3 col-6">
           <Card text="Floating Pools" url={fp}></Card>
           </div>
           <div class="col-sm-3 col-6">
           <Card text="Spacious Cabin Like Rooms" url={sp}></Card>
           </div>
           <div class="col-sm-3 col-6">
           <Card text="Sea Facing Swimming Pools" url={sf}></Card>
           </div>
           <div class="col-sm-3 col-6">
           <Card text="Gymnasium & Fitness" url={gym}></Card>
           </div>
         </div>
         <div class="row mt-5" style={{height:"9%"}}>
           <div class="col-12">
           <div style={{ textAlign: "right", color: "#D9D9D9"}}>*T&Cs apply | ** Based on similar branded projects in the last 2 years. <span style={{ textDecoration: "underline" }}>Source 1</span> | <span style={{ textDecoration: "underline" }}>Source 2</span></div>
           </div>
         </div>
    </div>
    );
}
export default Amt;