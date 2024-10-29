import { Student } from "./components/student.jsx";
import {ArraySample} from "./components/Arraysample";
import {OneOfSample} from './components/OneOfSample'
import {MultiType} from './components/MultiType';
import {Function} from './components/Function'
import'./css/app.css';
function App() {
  const items =[
    {id:1 , name:"item 1"},
    {id:2 , name:"item 2"},
    {id:3 , name:"item 3"}
  ];
  const handleClick= ()=>{
    alert("xxxxxx")
  }
  return (
    <>
    <div>
    <h1>React Tutorial </h1>

    <p>Lorem ipsum dolor sit amet.</p>
    </div>  
     <Student name="mari" age={24} isMarried={true} /> 
    <Student name="ram" age={24} isMarried={false} /> 
    <Student name="sam" age={44} isMarried={true} /> 
    <Student />  
    < ArraySample items={items}/>
    *
    < OneOfSample  color="Green" />
    <MultiType value="Hello"/>
    <MultiType value={10} />
    <MultiType value={true} /> 
    < Function handleClick={handleClick} />
   </>
  )
}

export default App;
