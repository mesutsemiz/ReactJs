import Inline from "./components/inline/Inline";
import StyleSheet from "./components/regular-style/StyleSheet"
// import Sassy from "./components/sassy/Sassy";
import './app.css'
import styles from './app.module.css';
import ModuleBtn from './components/moduleCss/ModuleBtn';

const App = () =>{
  return (
    <div>
      {/* <Inline/> */}
      {/* <StyleSheet primary={false}/> */}
      {/* <Sassy/> */}
      {/* <h1 className="error">Something went wrong</h1>
      <h1 className={styles["success-bracket--notation"]}>200 Ok success</h1> */}
      <ModuleBtn btnClass="primary" btnName="module" />
      <ModuleBtn btnClass="secondary" btnName="Css"/>
    </div>
  );
};

export default App;