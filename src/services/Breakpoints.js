 


const breakpoints = () => {
 
    let screen = window.screen;
   

    console.log( window.innerWidth);

    if (screen.availWidth >=800){

        console.log("More THAN 500");
    }
    else{
        console.log("Less THAN 500");
    }
}

export default breakpoints;