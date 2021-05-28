import React from 'react';
import './App.scss';
import logo from './assets/dt-logo-white.png';
import PlannerModal from './PlannerModal';
import PlanSection from './PlanSection';

function App(): JSX.Element {
  return (
    <div className="App">
     <header className="MuiPaper-root MuiAppBar-root MuiAppBar-positionFixed MuiAppBar-colorPrimary mui-fixed MuiPaper-elevation4" style={{height: "65px", zIndex: 1250}}>
       <div className="MuiToolbar-root MuiToolbar-regular MuiToolbar-gutters">
         <div className="MuiGrid-root MuiGrid-container" style={{display: "grid", gridTemplateColumns: "1fr 3fr 1fr", placeItems: "center"}}>
           <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-sm-true"></div><div className="MuiGrid-root MuiGrid-item MuiGrid-grid-sm-true">
             <img src={logo} alt="Logo" style={{height: "48px", display: "block", marginLeft: "auto", marginRight: "auto"}}/>
            </div>
             <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-sm-true">
               <button className="MuiButtonBase-root MuiButton-root MuiButton-contained" tabIndex={0} type="button" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true">
                 <span className="MuiButton-label">
                   <span className="MuiButton-endIcon MuiButton-iconSizeMedium">
                     <img className="icon-img" style={{height: "17.67px"}}src="https://img.icons8.com/material-sharp/24/000000/user-male-circle.png"/>
                   </span>
                 </span>
                 <span className="MuiTouchRipple-root"></span>
               </button>
             </div>
            </div>
          </div>
     </header>
     <body>
       <main className="app-main">
        <div className="p-m-wrapper">
          <PlannerModal/>
        </div>
        <div className="p-s-wrapper">
          <PlanSection />
        </div>
       </main>
     </body>
    </div>
  );
}

export default App;
