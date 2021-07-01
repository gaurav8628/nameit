import React from 'react'
import './App.css'
import SearchBox from '../SearchBox/SearchBox'
import Header from './../Header/Header';
import ResultContainer from '../ResultContainer/ResultContainer'

const name =  require('@rstacruz/startup-name-generator');

class App extends React.Component{
    state={
        headerText:"Name It!",
        headerExpanded: true,
        suggestedNames:[],
    };

    handleInputChange = (inputText)=>{
        // alert("I am called")
        // console.log(inputText)
        // this.setState({headerExpanded: inputText.length>0 ?false: true});
        this.setState({
            headerExpanded: !(inputText.length>0),
            suggestedNames: inputText ? name(inputText) : [],
            });
        
    }
    render()
    {
        // console.log(name('cloud'))
        return(
           <div>
               <Header headTitle={this.state.headerText} headerExpanded={this.state.headerExpanded}/>
               <SearchBox onInputChange={this.handleInputChange}/>
               <ResultContainer suggestedNames={this.state.suggestedNames}/>
            </div>
            )
    }
}
export default App