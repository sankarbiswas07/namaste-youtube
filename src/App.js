import "./App.css"
import { Provider } from "react-redux";

import Head from "./components/Head";
import Body from "./components/Body"
import store from './utils/store/index';

function App() {
  return (
    <Provider store={store}>
      <div className="App ">
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

/**
 * Head
 * Body
 *  SideBar
 *    MenuItems
 *  MainContainer
 *    ButtonsList
 *    VideoContainer
 *      VideoCard
 * 
 */

export default App;
