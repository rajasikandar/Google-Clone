import React , {useState} from 'react'
import "./Search.css";
import MicOutlined from '@material-ui/icons/MicOutlined';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./reducer";

{/*inside of the Search() pass props called hideButtons*/}
function Search({ hideButtons = false}) {
    const [{},dispatch] = useStateValue();
    {/*Make Search Function for Button When Click*/}
    {/*Make a variable search and e for whenever it takes an event example onClick*/}
    const [input, setInput] = useState("");
    
    /*It returns us our browser history */
    const history = useHistory();

    const search = e =>{
        {/* method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form.*/}
        e.preventDefault();
        console.log("You Hit The Search Button", input)
        dispatch({
            /*Type Contain Whatever we search you can check in Google Inspect Console*/
            type: actionTypes.SET_SEARCH_TERM,
            /*For Tracking Input tag direct not the single term only*/
            term: input
        })
        /*Do something with the input... and comeback and fix*/
        
        /*After input on submit or onClick search button redirect to the Search Page using useHistory()*/
        history.push('./search');

    };
    {/* When Press Enter Key it will trigger Google Search Button */}
    return (
        <form className="search">
            <div className="search_input">
                {/*Search Icon*/}
             <SearchOutlined className="search_inputIcon"/>
                {/*Input field value={input} it maps the input with the input in const[input, setInput]*/}
                {/*For keep traking input onChange it fires an event setInput what ever a person types*/}
                <input value= {input} onChange={e => setInput(e.target.value)}/>
                {/*Mic Icon*/}
             <MicOutlined/>
                </div>
                
                {/*Using Ternary Operator*/}
                {/*If Search has hideButtons attribues it will show without buttons i.e display none and if it doesn;t have hideButtons attributes then show with buttons i.r <Search hideButtons/> use it in search page*/}
                {!hideButtons ? (
            <div className="search_buttons">
                {/**Buttons and Made by Material-ui PROP and also the variant attribute*/}
                <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
                ):(
                    <div className="search_buttons">
                {/**Buttons and Made by Material-ui PROP and also the variant attribute*/}
                <Button className="search_buttonsHidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                <Button className="search_buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
                </div>
                )}
        </form>
    )
}

export default Search
