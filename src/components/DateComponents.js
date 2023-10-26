function DataComponents () {
  const myDate = new Date ()
  const today = myDate.getDate()
  // const week = myDate.getDate()
  const weekday = myDate.getDay()
  const year = myDate.getFullYear()
  const month = myDate.getMonth()




    return(
        <h2>this is date component</h2>
    )
}

export default DataComponents