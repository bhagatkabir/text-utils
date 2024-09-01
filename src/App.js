
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
// import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light')// whether dark mode is enable or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  const toggleMode =()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor ='grey';
      showAlert("Dark mode has been enabled" , "success")
      document.title ="TextUtils-Dark Mode"

      // setInterval(() => {
      // document.title ="instal TextUtils Now"
        
      // }, 1500);
      // setInterval(() => {
      //   document.title =" TextUtils is amazing"
          
      //   }, 2000);

    }else{
      setMode('light')
      document.body.style.backgroundColor ='white';
      showAlert("light mode has been enabled" , "success")
      document.title ="TextUtils-Light Mode"

    }
  }
  return (
    <>
    <Navbar title = "TextUtils" aboutText="About" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    {/* <Navbar /> */}
    <div className='container'>
      <TextArea showAlert={showAlert} heading="Enter text to analyse" mode={mode}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
