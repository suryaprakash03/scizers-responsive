
function Ftbox(props)
{ 
    let rec = {
        // width:"73px",
        // height:"5px",
        // borderRadius:"13px 0px 0px 0px",
        width:"20%",
        height:"5%",
        opacity:"12%",
        backgroundColor:"#00357B",
        display:"block",
        margin:"0px auto"
        
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
            <img src={props.img} alt="img" width="13%" height="30%" style={{display:"block",margin:"0px auto"}}></img>
            {/* style={{display:"block",margin:"0px auto"}} */}
            <h4 style={ty}>{props.type}</h4>
            <h3 style={off}>{props.offer}</h3>
            <span style={rec}></span>
        </>
    );
}
export default Ftbox;