import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// react create a tree like structure of the return tags
// than these tree like structure is converted into object
// based on the object values tags are rendered
const object1={
  type:'a',
  props:{
      href:"https://google.com",
      target:"#"
  },
  children:"this is some text"
}

function MyFun(){
  return (
    <>
    <h1>This is custom !</h1>
    </>
  )
}
// we dont know what key are made when react object are made so rendering the object1 wont print anything
// so we create react element jus t by passing values(tag,props,innerText)

let ReactEl=React.createElement('a',{href:'https://google.com'},'this is some text')
// this ReactEl is inject by babel
// babel is transpiler which converts themodern es6 such as destructor,arrow function
// into older vesrion understand by the browse ` 
ReactDOM.createRoot(document.getElementById('root')).render(
  
    
  //  ReactEl
  <App/>
  
)
// ReactDom creates the virtual environment Dom for the react application
// and then the application is renderd
//  the <App/> is just afunction you can also call it as App() inside the render function
