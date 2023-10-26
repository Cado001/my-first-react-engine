const GrandChild = props => {
    console.log('props ->', props)

}

return(
    <div>
    I'm GrandKid {props.firstName} and I'm from {birthYear}
    </div>
  )


function ChildComponents(){
    return(
    <h2>Hi I'm Child</h2> ,
    <GrandChild firstName={'Joe'}    age={102}  pets={'🦁'}/>,
    <GrandChild firstName={'John'}    age={24}  pets={'🦈'}/>,
    <GrandChild firstName={'Rosie'}    age={50}  pets={'🦍'}/>,
    <GrandChild firstName={'Little T'}    age={4}  pets={'🐅'}/>
    )
}

export default ChildComponents