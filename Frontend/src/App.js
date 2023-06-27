import React , {useState} from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import './rootstyles.css';

import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/brands.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";


import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Signup from './pages/signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Handwritten from "./pages/handwritten";
import Download from "./pages/downloadpage";
import PreviewImages from "./pages/imagepreview";
import Allowread from "./pages/allowread";
import ReferenceSearchOne from "./pages/rs1";
import ReferenceSearchtwo from "./pages/rs2";
import Save from "./pages/saving";
import Finalized from "./pages/finalized";
import Addabbreviations from "./pages/addAbb";
import AddabbreviationsTwo from "./pages/addAbb2";
import Addreferences from "./pages/addRef";
import Info from "./pages/info";
import Conclusiongen from "./pages/conclusiongen";
import Addconclusion from "./pages/addConclusion";
import AddVoiceconclusion from "./pages/addVoiceText";
import HandwrittenConversion3 from "./pages/handwrittenP3";
import ReferencesAddPage from "./pages/addRef2";
import AddImagespagetwo from "./pages/addImagespagetwo";
import AddImagespagethree from "./pages/addImagespagethree";
import AddReferenceLink from "./pages/addReferenceLink";



function App()
{

    return (

        <div>
            <Navbar />
            
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='Signup' element={<Signup/>} />
                    <Route path='Login' element={<Login/>} />
                    <Route path='Handwritten' element={<Handwritten/>} />
                    <Route path='Download' element={<Download />} />
                    <Route path='PreviewImages' element={<PreviewImages />} />
                    <Route path='Allowread' element={<Allowread />} />
                    <Route path='ReferenceSearchOne' element={<ReferenceSearchOne />} />
                    <Route path='ReferenceSearchtwo' element={<ReferenceSearchtwo />} />
                    <Route path='Save' element={<Save />} />
                    <Route path='Finalized' element={<Finalized />} />
                    <Route path='Addabbreviations' element={<Addabbreviations />} />
                    <Route path='AddabbreviationsTwo' element={<AddabbreviationsTwo />} />
                    <Route path='Addreferences' element={<Addreferences />} />
                    <Route path='Info' element={<Info />} />
                    <Route path='Conclusiongen' element={<Conclusiongen/>} />
                    <Route path='Addconclusion' element={<Addconclusion/>} />
                    <Route path='AddVoiceconclusion' element={<AddVoiceconclusion/>} />
                    <Route path='HandwrittenConversion3' element={<HandwrittenConversion3/>} />
                    <Route path='ReferencesAddPage' element={<ReferencesAddPage/>} />
                    <Route path='AddImagespagetwo' element={<AddImagespagetwo/>} />
                    <Route path='AddImagespagethree' element={<AddImagespagethree/>} />
                    <Route path='AddReferenceLink' element={<AddReferenceLink/>} />
                </Routes>
            </BrowserRouter>

            <Footer />
      
        </div>
        
    )
}


export default App;