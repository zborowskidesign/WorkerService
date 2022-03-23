import React, { useState, useEffect } from 'react';
import globalFn from '../globalFn';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Worker from '../../images/worker.png';
import axios from 'axios';
import * as Styled from './styled';
import './style.css';

const SearchBar=()=>{

    const [test, setTest] = useState([]);
    const [filteredData,setFilteredData] = useState(test);
    const [value, setValue] = useState("");
    const [info, setInfo] = useState("");
    
    useEffect(() => {
        axios
          .get("http://localhost:3000/companies.json")
          .then((res) => {
            setTest(res.data.items);
            setFilteredData(res.data.items);
          })
          .catch((err) => console.log(err));
      }, []);


    const handleSearch = (event) => {
      let value = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1).toLowerCase();
      let result = [];
      setValue(value);
      console.log(value);
      result = test.filter((data) => {
      return data.name.search(value) !== -1; 
      });
      setFilteredData(result);
      }

    const showMessage = () => {
      setInfo('Tylko dla zalogowanych użytkowników');
    }

    const showCompany = filteredData.map((items) => (
      <div key={items.id}>{items.name}  <Styled.Image src={Worker} alt="worker"/> {items.workers} <Styled.SeeMore onClick={showMessage}>Zobacz więcej</Styled.SeeMore> <Styled.SeeMore>{info}</Styled.SeeMore> </div>
    ))
    
   
  return(
    <>
      <Styled.Wrapper>
          <Styled.Form id="form-search" className={'show' ? 'show' : 'hide'} >
            <Styled.Input
              type="text"
              name="text"
              value={value}
              className="inputSearch"
              placeholder="search companies"
              onChange={(event) =>handleSearch(event)}
            />
              <Tooltip title="Sii | Volvo | Nokia etc.">
              <IconButton>
                <InfoIcon />
              </IconButton>
            </Tooltip>
              <div>
                {
                  value.length < 1 ? '' : showCompany
                }  
              </div>
          </Styled.Form>
        </Styled.Wrapper>
      </>
  )
}


export default SearchBar;