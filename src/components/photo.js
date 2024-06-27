import g1 from "../images/g1.jfif"
import g2 from "../images/g2.jfif"
import g3 from "../images/g3.jfif"
import g4 from "../images/g4.jfif"
import g5 from "../images/g5.jfif"
import "./styles/amt.css"
import { useState } from "react"
function Photos()
{
  let ft = {
        // width:"1440px",
        // height:"108px",
        // fontSize:"14px",
        // fontWeight:"400",
        // lineHeight:"20px",
        // paddingTop:"5%",
        textAlign:"center",
        color:"#FCFCFC",
        backgroundColor:"#091D41",
        fontFamily:"Poppins"
    }
  let btn =
  {
    // width:"150px",
    // height:"45px",
    // borderRadius:"5px",
    // border:"1px solid var(--darkblue)",
    // marginRight:"1%",
    fontWeight:"bold"
  }
  let ar = [g1,g2,g3,g4,g5];
  const [st,setst] = useState(0);
  function more()
  {
     if(st<4)
     {
        setst(st+1);
     }
     else
     {
       setst(0);
     }
  }
  function less()
  {
    if(st > 0)
    {
       setst(st-1);
    }
    else
    {
      setst(4);
    }
  }
   return(
    <div id="third" style={{height:"800px"}}>
      <div class="row mb-3" style={{height:"5%"}}>
       <div class="col-12" id="btnpht" style={{textAlign:"right"}}>
        <button style={{...btn,backgroundColor:"#00357B",color:"white"}}>EXTERIORS</button>
        <button style={{...btn,color:"#00357B",backgroundColor:"white"}}>INTERIORS</button>
       </div>
      </div>
    <div class="row" style={{height:"60%"}}>
       <div class="col-12"  style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <span style={{color:"blue"}} onClick={less}>&lt;&lt;&lt;</span>
        <div style={{margin:"0px auto",width:"1120px",height:"500px"}}>
        {/* , */}
            <img class="img-fluid" src={ar[st]} alt="img" style={{margin:"0px auto",width:"1120px",height:"500px"}}></img>
            {/* width="1120px" height="500px"  borderRadius:"14px"*/}
        </div>
        <span style={{color:"blue"}} onClick={more}>&gt;&gt;&gt;</span>
       </div>
    </div>
    <div class="row" style={{height:"20%"}}>
       <div class="col-sm-3 d-sm-block d-none">
       <img src={g2}  alt="img" style={{borderRadius:"14px"}} class="img-fluid"></img>
       </div>
       <div class="col-sm-3 d-sm-block d-none">
       <img src={g3}  alt="img" style={{borderRadius:"14px"}} class="img-fluid"></img>
       </div>
       <div class="col-sm-3 d-sm-block d-none">
       <img src={g4}  alt="img" style={{borderRadius:"14px"}} class="img-fluid"></img>
       </div>
       <div class="col-sm-3 d-sm-block d-none ">
       <img src={g5}  alt="img" style={{borderRadius:"14px"}} class="img-fluid"></img>
       </div>
    </div>
    <div class="row" style={{height:"12%"}}>
    <div class="col-12" style={ft}>© DAMAC Copyright 2024 All rights reserved.
    </div>
    </div>
</div>






    // ------------------
//     <div style={{width:"100%",height:"800px"}}>
//         <div id="btnpht" style={{textAlign:"right"}}>
//           <button style={{...btn,backgroundColor:"#00357B",color:"white"}}>EXTERIORS</button>
//           <button style={{...btn,color:"#00357B",backgroundColor:"white"}}>INTERIORS</button>
//         </div>
//         <br></br>

//         <br></br>
//         <div>
//             <div style={{display:"flex",justifyContent:"space-between",margin:"0px auto"}}>
//             {/* ,width:"1120px",height:"220px", */}
           
            
            
            
//             {/* width="270px" height="170px"
// width="270px" height="170px"
// width="270px" height="170px"
// width="270px" height="170px" */}
   );
}
export default Photos;