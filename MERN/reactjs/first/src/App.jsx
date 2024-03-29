// Component
function App(props) {

  const boxCSS = {
    color: props.age > 35 ? 'red' : 'blue'
  }
  return (
    <>
      <div className="demo" style={boxCSS}>
        Hello <i> {props.name} </i> - <b> {props.age} </b>
      </div>
    </>
  )
}

export default App;