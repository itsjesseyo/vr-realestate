
import React, {useState} from 'react';
import './App.css';

import image_1 from "./assets/44_w_300_s_1901s/1.jpg"
import image_2 from "./assets/44_w_300_s_1901s/2.jpg"


import image_3 from "./assets/44_w_300_s_2201s/1.jpg"
import image_4 from "./assets/44_w_300_s_2201s/2.jpg"

import { Card, Container, Icon, Button} from 'semantic-ui-react';

import ReactPhotoSphereViewer from 'react-photo-sphere-viewer';

const print = console.log

const scenes = [
  {
    name: '44 w 300 s #1901s img 1',
    lat: -0.08843547113325334,
    lon: 3.253011497909238,
    zoom: 10,
    image: image_1,
  },
  {
    name: '44 w 300 s #1901s img 2',
    lat: -0.09012644757117227,
    lon: 2.8535978988091237,
    zoom: 10,
    image: image_2,
  },
  {
    name: '44 w 300 s #2201s img 1',
    lat: -0.1988220111923389 ,
    lon: 3.189461133882471,
    zoom: 10,
    image: image_3,
  },
  {
    name: '44 w 300 s #2201s img 2',
    lat: 0.030536799677433724,
    lon: 3.0357101196388667,
    zoom: 1,
    image: image_4,
  }
]

const list = (handleSelect) => {
  return scenes.map((scene, index) => {
    return (
      <Card centered>
        {/* <Image src={scene.image} wrapped ui={false} /> */}
        <Card.Content>
          <Card.Header>{scene.name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
        <Button onClick={handleSelect} data-index={index}>View</Button>
        </Card.Content>
      </Card>
    )
  })
}

function App() {
  const photoSphereRef = React.useRef();
  const [scene, setScene] = useState(null)

  const handlePan = (lat, lon) => {
    print(lat, lon)
  }
  const handleZoom = (zoom) => {
    print(zoom)
  }
  const handleSelect = (e) => {
    console.log(e.target.dataset.index)
    setScene(scenes[e.target.dataset.index])
  }

  const handleBack = () => {
    setScene(null)
  }

  if(scene === null){
    return (
      <div className="App">
        <Container className='wrapper' fluid>
          {list(handleSelect)}
        </Container>
      </div>
    );
  }

  return (
    <div className="App">
      <ReactPhotoSphereViewer
        defaultZoomLvl={scene.zoom}
        defaultLong={scene.lon}
        defaultLat={scene.lat}
        onZoomChange={handleZoom}
        ref={photoSphereRef}
        src={scene.image}
        height={'100vh'}
        width={"100%"}
        onPositionChange={handlePan}
      />
      <Button icon onClick={handleBack} className={'back-button'}><Icon name='backward' /> BACK</Button>
    </div>
  );
}

export default App;
