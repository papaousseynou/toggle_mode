import styled from "styled-components";
import {MoonIcon} from "@heroicons/react/16/solid/index.js";
import ThemeContext from "./ThemeContext.js";
import {useContext} from "react";
const StyledLabel = styled.label `
    input{
        position: fixed;
        left: -990999px
    }
    input ~ div{
        width:30px;
        height:16px;
        background: #eee;
        border-radius: 8px;
        position: relative;
            
    }
        svg{
            height:14px;
            color:#fff;
            background-color: #ccc;
            border-radius: 7px;
            position: absolute;
            top: 1px;
            left: 1px;
            transition: all .4s ease;
        }
        input:checked ~ div{
            background-color: #668;
            svg{
                background-color: #224;
                left:15px
            }
        }
    `

const Toggler = () => {


    const theme = useContext(ThemeContext);
    return (
        <StyledLabel>
            <label>
                Dark Mode
                <input type="checkbox" checked={theme.darkMode} onChange={()=>theme.setDarkMode(oldValue=>!oldValue)} />
                <div>
                    <MoonIcon/>
                </div>  {/* this is the checkbox state */}
            </label>
        </StyledLabel>
    )
}
export default Toggler
