import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../pages/About';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'services',
                element: <Services />
            },
            {
                path: 'projects',
                element: <Projects />
            },
            {
                path: 'resume',
                element: <Resume />
            },
            
        ]
    }
]);

export default routes;
