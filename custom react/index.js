
// react generate the tree like structure from tag which are returned 

// object like this is generated from the returned tag and then the render function invokes this object
 
const object1={
    type:'a',
    props:{
        href:"https://google.com",
        target:"#"
    },
    children:"this is some text"
}
let rootContainer=document.querySelector("#root");
customRender(rootContainer,object1)
function customRender(rootContainer,object1){
    let el=document.createElement(object1.type);
    el.setAttribute('href',object1.props.href);
    el.innerText=object1.children;
    rootContainer.append(el);
}