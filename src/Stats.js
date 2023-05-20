
const Stats = ({good, bad, neutral, total}) => {
    // if () {
    //   return (
    //     <div>
    //       the app is used by pressing the buttons
    //     </div>
    //   )
    // }
    return (
      <div>
      <h1>Statistics</h1>
  
        <p>good:{good}</p>
        <p>bad:{bad}</p>
        <p>neutral:{neutral}</p>
        <p>total:{total}</p>
  
      </div>
    )
  }

  export default Stats