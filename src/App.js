import './App.css';
import ChildComponents from './components/ChildComponents';
import DataComponents from './components/DateComponents';
// import ChildComponents from './components/ChildComponents';



// function GrandChild(props){
//   console.log('props ->', props.firstName)

// const birthYear = 2023 - props.age

//   return(
//     <div>
//     I'm GrandKid {props.firstName} and I'm from {birthYear}
//     </div>
//   )
// }
function ChildComponent(){
  return(
    <div>
    {/* <h2>Hi I'm Child</h2>
    <GrandChild firstName={'Joe'}    age={102}  pets={'🦁'}/>
    <GrandChild firstName={'John'}    age={24}  pets={'🦈'}/>
    <GrandChild firstName={'Rosie'}    age={50}  pets={'🦍'}/>
    <GrandChild firstName={'Little T'}    age={4}  pets={'🐅'}/> */}
    </div>
  )
}

function App() {
  // // all javascript world
  // console.log('test')
  // const myDate = new Date ()
  // const today = myDate.getDate()
  // // const week = myDate.getDate()
  // const weekday = myDate.getDay()
  // const year = myDate.getFullYear()
  // const month = myDate.getMonth()
  // console.log(today)

  // in return only jsx lives
  return (
    <>
    <div className="App">
      <header className="App-header">
       {/* Today is day: {today}
       <br />
       WeekDay: {weekday}
       <br />
       Year: {year}
       <br />
      { `${month}/${today}/${year}`} */}
      {/* <ChildComponent />  */}
      <DataComponents />
      <ChildComponents />
      </header>
    </div>
    </>
  );
}

export default App;
