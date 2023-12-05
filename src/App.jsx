import { HomeScreen } from './screens/HomeScreen'
import './App.css'
import "@fontsource/roboto-flex";
import "@fontsource/encode-sans";

function App() {

  return (
    <>
      <HomeScreen />
    </>
  )
}

export default App

// function App() {
//   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

//   return (
//     <div>
//       {isMobile ? (
//         <div>Estás usando un dispositivo móvil</div>
//       ) : (
//         <div>Estás usando un navegador de escritorio</div>
//       )}
//     </div>
//   );
// }