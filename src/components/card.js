import "./styles/amt.css"
function Card(props)
{
    let sty = {
        // width:"230px",
        // height:"270px",
        // borderRadius:"20px",
        // boxShadow:"2px 2px 10px",
    }
    return(
    <div style={sty}>
        <div style={{margin:"0px auto"}}>
        {/* width:"200px",height:"200px", */}
        <img src={props.url}  alt="img"  width="50%" height="50%" style={{borderRadius:"50%",margin:"0px auto",display:"block"}}></img>
        {/* width="190px" height="190px" */}
        </div>
        <figcaption style={{textAlign:"center",color:"var(--darkblue)",margin:"0px auto"}}>{props.text}</figcaption>
        {/* ,width:"120px",height:"40px" */}
    </div>
    );

}
export default Card;