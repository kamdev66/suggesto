import React,{useState} from 'react';
import Header from '../Header/Header';
import ResultContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../Search/SearchBox';
import './App.css';
const name=require('@rstacruz/startup-name-generator');

const App=()=>{

    const [headerExpanded,setheaderExpanded]=useState(true);
    const [suggestedName,setsuggestedName]=useState([]);
    const handleInputChange=(inpText)=>{
        setheaderExpanded(!(inpText.length > 0) );
        setsuggestedName(inpText ? name(inpText): []);
    }
     return(
         <>
         <Header headerExpanded={headerExpanded}/>
         <SearchBox onInputChange={handleInputChange}/>
         <ResultContainer suggestedName={suggestedName}/>
         </>
     )
}
export default App;