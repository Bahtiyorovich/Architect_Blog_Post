import {Card} from '@material-tailwind/react';
import { AboutMe, Home, Services } from './pages';
import { Navbar } from './components';

const App = () => {
  return (
    <Card className="bg-fixed relative banner h-screen w-full rounded-none flex items-center justify-start">
      <Navbar/>
      <div className='bg-fixed author__fon w-full'>
        <Home/>
      </div>
      <AboutMe/>
      <Services/>
    </Card>
  )
}

export default App;