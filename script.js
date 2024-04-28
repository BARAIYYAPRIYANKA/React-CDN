const Title = ()=>{

    const titleStyle = {
        // color: 'blue',
        fontSize: '40px',
        
      };

    return(
        <h1 className="title" style={titleStyle}>Learn Web Development</h1>
    );
};
const Para1 = () =>{

    const container = {
        fontSize: '1rem' ,
        
    }
    return(
        <div className="paragraph" style={container}>
            <p>Welcome to the MDN learning area. This set of articles aims to provide complete beginners to web development with fundamental skills for coding websites.</p>

            
            <p>The aim is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from <a href="/en-US/">the rest of MDN</a>, and other intermediate to advanced resources that assume a lot of previous knowledge.</p>

            <p>If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.</p>
        </div>
    )
}

const MainContainer = () =>{

    const containerStyle = {
        width: '45%', // Set width to 80% of the parent container
        height: '400px', // Set height to 400px
        margin: '30px auto', // Center the container horizontally
        textAlign: 'left', // Center content within container
        border: '1px solid #ccc', // Optional border for visualization
        padding: '20px' ,
        fontFamily: 'Courier New, Courier, monospace' ,
      };
    
    return(
       <div className="Main-container" style={containerStyle}>
        <Title/>
        <Para1/>
       </div>
    );
};
   
ReactDOM.render(<MainContainer/>,document.querySelector("#root"));

