import propTypes from 'prop-types'

export const MultiType= (props)=>{
    const {value}=props
    return(
        <div>
            <p>The Value is {value}</p>
        </div>
    )
}

MultiType.propTypes={
    value:propTypes.oneOfType([propTypes.string, propTypes.number ,propTypes.bool])
    .isRequired
};