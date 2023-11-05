import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import EventBinding from './components/EventBinding';
import ConditionalRenderingFunctional from './components/ConditonalRenderingFunctional';
import ConditionalRenderingClass from './components/ConditonalRenderingClass';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingLists from './components/RenderingLists';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from "./components/LifeCyclesCDU";
import LifeCyclesCWU from "./components/LifeCyclesCWU";

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="nice to meet you!!" name="Mike" age="32" /> */}
      {/* <StatefulGreeting greeting="I'm a stateful class component" name="Mike" /> */}
      {/* <StatefulGreetingWithCallback greeting="I'm a stateful class component" name="Mike" /> */}
      {/* <StatefulGreetingWithPrevState greeting="I'm a stateful class component" name="Mike" /> */}
      {/* <EventsFunctional /> */}
      {/* <EventsClass /> */}
      {/* <EventBinding /> */}
      {/* <ConditionalRenderingFunctional connected={false} /> */}
      {/* <ConditionalRenderingClass /> */}
      {/* <NestingComponents /> */}
      {/* <MethodsAsPropsParent /> */}
      {/* <RenderingLists /> */}
      {/* <LifeCyclesCDM /> */}
      {/* <LifeCyclesCDU /> */}
      <LifeCyclesCWU />

      
    </div>
  );
}

export default App;
