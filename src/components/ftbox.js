
function Ftbox(props)
{ 
    let rec = {
        // width:"73px",
        // height:"5px",
        // borderRadius:"13px 0px 0px 0px",
        width:"70px",
        height:"5px",
        opacity:"12%",
        backgroundColor:"#00357B",
        display:"block",
        textAlign:"center"
        
    }
    let off = {
        // fontSize: "30px",
        // fontWeight: "500",
        // lineHeight: "30px",
        // letterSpacing: "0.03em",
        // margin:"2%"
        color: "#00357B",
        textAlign:"center",
        fontFamily: "Oswald"

    }

    let ty = {
        // fontSize: "16px",
        // fontWeight: "40px",
        // lineHeight: "16px",
        color: "#00357B",
        fontFamily: "Poppins",
        textAlign:"center"
    }
    return(
        <>
            <img src={props.img} alt="img" width="1%" height="1%"></img>
            {/* style={{display:"block",margin:"0px auto"}} */}
            <h4 style={ty}>{props.type}</h4>
            <h3 style={off}>{props.offer}</h3>
            <h6 style={{}}><span style={rec}></span></h6>
        </>
    );
}
export default Ftbox;