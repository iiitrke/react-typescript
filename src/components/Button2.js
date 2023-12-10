import PropTypes from 'prop-types';

// function Button2({ label="Click Me", backgroundColor = "red", size="md", onClick}){
 

const Button2 = ( props )=>{  

    const { size, backgroundColor, children} = props;
    
    
let scale= 1;
if(size === "sm") scale = 0.75;
if(size === "lg") scale = 1.5;


const style={
    backgroundColor,
    border: "none",
}
    return(
        <button style={style} >
            {children}
        </button>  
    );
}

 

export default Button2;