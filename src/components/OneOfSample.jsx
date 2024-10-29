import PropTypes from 'prop-types'
export const OneOfSample =(props) =>{
    const {color}=props
    return(
        <div style={{background: color  ,padding: "10px" ,color:"white"}}>
            <p style={{color:"white"}}>Lorem ipsum dolor sit amet.{color}</p>
        </div>
    )
}

OneOfSample.propTypes={
    color:PropTypes.oneOf(["Red","Green","Blue"]).isRequired
};