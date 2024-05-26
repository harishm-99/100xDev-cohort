import './App.css'

function App() {

  return (
    <>
      <div style={{display: "flex", justifyContent: "center" }}>
        <div style={{backgroundColor: "red"}}>Hi</div>
        <div style={{backgroundColor: "green"}}>Hi</div>
        <div style={{backgroundColor: "yellow"}}>Hi</div>
        <div style={{backgroundColor: "orange"}}>Hi</div>
        <div style={{backgroundColor: "violet"}}>Hi</div>
      </div>

      <div className='flex justify-between'>
        <div className='bg-red-500'>Hi</div>
        <div className='bg-blue-500'>Hi</div>
        <div className='bg-green-500'>Hi</div>
        <div className='bg-pink-500'>Hi</div>
        <div className='bg-orange-500'>Hi</div>
      </div>
    </>
  )
}

export default App
