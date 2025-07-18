import { useState } from "react";
import "./Toggle Switch.css";
export const ToggleSwitch = () => {

    const [isOn, setIsOn] = useState(false)

    const toggleSwitchHandler = () => {
        setIsOn(!isOn)
    }

    const clickIsOn = isOn? "on" : "off";
    const toggleBgColor = {backgroundColor: isOn? "#4caf50": ""}

    return(
        <>
            <div className="toggle-switch" style={toggleBgColor} onClick={toggleSwitchHandler}>
                <div className={`switch ${clickIsOn}`}>
                    <span className="switch-state">{clickIsOn}</span>
                </div>
            </div>
        </>
    )
}