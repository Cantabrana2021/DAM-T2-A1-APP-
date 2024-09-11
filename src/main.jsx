import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MyFunctions from './functions/MyFunctions.jsx'
import Promesa1 from './functions/Promesa.jsx'
import MyPromises from './functions/MyPromises.jsx'
import MyPromisesAll from './functions/MyPromisesAll.jsx'
import MyPromisesRace from './functions/MyPromisesRace.jsx'
import MyFetchAPIs from './functions/MyFetchAPIs.jsx'
import MyFetchPOST from './functions/MyFetchPOST.jsx'
import MyFetchPUT from './functions/MyFetchPUT.jsx'
import MyFetchBlob from './functions/MyFetchBlob.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<MyFunctions />*/}
    {/*<App/>*/}
    {/*<Promesa1/>*/}
    {/*<MyPromises/>*/}
    {/*<MyPromisesAll/>*/}
    {/*<MyPromisesRace/>*/}
    {/*<MyFetchAPIs/>*/}
    {/*<MyFetchPUT/>*/}
    <MyFetchBlob/>
  </StrictMode>,
)

