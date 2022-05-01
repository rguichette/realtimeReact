
import Video from './components/Video'
import Controls from './components/controls'

function App() {
 
  return (
    <div className="App">
     <Video/>
     <Video controls={false}/>

    </div>
  )
}

export default App
