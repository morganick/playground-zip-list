import Layout from './components/Layout';
import OnBoarding from './components/OnBoarding';
import { Step } from './types';
import './App.css'

function App() {
  let steps = [
    {
      name: "Overview",
      buttonText: "Begin Setup",
      imageUrl: "/overview.svg",
      description: "With Publishing, you can create custom content for your congregation and manage Church Center, the mobile app, and web experience for your congregation. Let's get you set up!",
      completed: false
    } as Step,
    {
      name: "App",
      buttonText: "Next",
      description: "Do you want to set up your Church Center app?",
      completed: false
    } as Step,
    {
      name: "Web",
      buttonText: "Next",
      description: "You're all set to use Church Center Web!",
      completed: false
    } as Step,
    {
      name: "Features",
      buttonText: "Next",
      description: "Which Planning Center features do you want to publish now?",
      completed: false
    } as Step,
    {
      name: "Home Page",
      buttonText: "Let's do it!",
      description: "With Publishing, your church will have a single, unified home page across Church Center App and Church Center Web. Let's get you started with a sample one—you can make any edits you'd like before publishing the page to your congregation.",
      completed: false
    } as Step,
  ];


  return (
    <Layout>
      <OnBoarding steps={steps} />
    </Layout>
  )
}

export default App
