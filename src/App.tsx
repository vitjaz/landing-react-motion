import './App.scss'
import { ThreeDCardDemo } from './components/preview/3DCard/3DCardDemo'
import { TracingBeamDemo } from './components/preview/TracingBeam/TracingBeamDemo'
import { BackgroundBeamsDemo } from './components/preview/backgroundBeams/BackgroundBeamsDemo'
import { CardBackgroundGradient } from './components/preview/backgroundGradient/CardBackgroundGradient'
import { SpotlightDemo } from './components/preview/spotlight/SpotlightDemo'
import { TextGenerateEffectDemo } from './components/preview/textGeneration/TextGenerationDemo'
import { TextRevealCardDemo } from './components/preview/textRevealCard/TextRevealCardDemo'
import { BackgroundBeams } from './components/ui/BackgroundBeams'


function App() {
  return (
    <>
      {/* <SparklesUnderTitle /> */}
  
        {/* <CardBackgroundGradient /> */}
          <div className='h-screen'>
            <SpotlightDemo />
            {/* <BackgroundBeamsDemo /> */}
          </div>
          <TracingBeamDemo />
          {/* <TextGenerateEffectDemo /> */}
          {/* <ThreeDCardDemo /> */}
          {/* <div className='flex  items-center justify-center gap-2 flex-wrap'>
            <ThreeDCardDemo />
            <ThreeDCardDemo />
            <ThreeDCardDemo />
          </div>
          <div>
            <TextRevealCardDemo />
          </div> */}
          <BackgroundBeams />
    </>
  )
}

export default App
