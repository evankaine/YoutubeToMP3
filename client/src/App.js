import './App.css';
import { useEffect, useState } from "react"
import DownloadButton from './DownloadButton';

function App() {

  const [videoUrl, setVideoUrl] = useState("")
  const [id, setId] = useState("")

  useEffect(() => {
    const id = videoUrl.replace('https://www.youtube.com/watch?v=', '')
    setId(id)
  }, [videoUrl])
  
  return (
    <div className="App">

      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            onChange={e => setVideoUrl(e.target.value)}
            value={videoUrl}
            type="text"
            placeholder="paste youtube url">
          </input>
        </form>
      </div>

      <div>
        <DownloadButton />
      </div>

    </div>
  );
}

export default App;
