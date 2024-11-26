import {useState} from "react"
const GoogleTabs = () => {
// let tab ="all"
const [currentTab,setCurrentTab] = useState("all")

const changeToAll = () =>{
    setCurrentTab("image")
}
const changeToImages = () =>{
    setCurrentTab("all")
}
const changeToVideos = () =>{
    setCurrentTab("videos")
}
const changeToOthers = () =>{
    setCurrentTab("others")
}
    console.log("render - google tabs");
    

    return (
        <>
            <p>current tab: {currentTab}</p>
            <ul>
               
                <li onClick={changeToAll}>All</li>
                <li onClick={changeToImages}>images</li>
                <li onClick={changeToVideos}>videos</li>
                <li 
                onClick={() =>{
                setCurrentTab ("others")
                }}>others </li>
            </ul>
            <hr />
            {
                currentTab ==="all"
                && 
            
            <div>
                <h2> images</h2>
                <p>
                    images all Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur necessitatibus dolor
                    repellendus quisquam voluptatum perferendis vitae sunt recusandae, repudiandae corrupti praesentium
                    sint voluptate. Esse voluptatem facilis deserunt molestias voluptates.
                
                    images all Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur necessitatibus dolor
                    repellendus quisquam voluptatum perferendis vitae sunt recusandae, repudiandae corrupti praesentium
                    sint voluptate. Esse voluptatem facilis deserunt molestias voluptates.
               </p>
                </div>
                }
                
                <div>
                    
                    
                <h2>All</h2>
                <p>
                    all Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur necessitatibus dolor
                    repellendus quisquam voluptatum perferendis vitae sunt recusandae, repudiandae corrupti praesentium
                    sint voluptate. Esse voluptatem facilis deserunt molestias voluptates.
                    
                    all Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur necessitatibus dolor
                    repellendus quisquam voluptatum perferendis vitae sunt recusandae, repudiandae corrupti praesentium
                    sint voluptate. Esse voluptatem facilis deserunt molestias voluptates.
                </p>
               
            </div>
            
    </>
    )
}

export default GoogleTabs
