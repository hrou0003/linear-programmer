import { useState } from "react";
import styled from "styled-components";
import Creator from "../creator/Creator";
import Info from "./Info";
import Plotter from "../plotter/Plotter";


const Wrapper = styled.div`
  background-color: black;
`


const Tab = styled.div`
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
  `

const TabButton = styled.div`
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;

    &:hover {
        background-color: #ddd;
    }

    &.active {
        background-color: #ccc;
    }
`
const TabContent = styled.div`
    display: none;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
`

const Tabbed = () => {

  const [active, setActive] = useState('create');

  function renderSwitch() {
    switch(active) {
      case 'create':
        return <Creator />;
      case 'plot':
        return <Plotter />;
      case 'info':
        return <Info/>;
      default:
        return <Creator />;
    }
  }

  return (
    <div>
    {renderSwitch()}
    </div>
  )
}

export default Tabbed;