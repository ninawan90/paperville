import React, { PropTypes } from "react"
import Radium from 'radium'


const ProgressBox = Radium((prop) => {
    
    let { groupName, minimum, maximum, ruleProgress } = prop

    let objective,
        
        overkill,
    
        objectiveWidth,
    
        overkillWidth,
        
        objectiveTotal,
        
        overkillTotal,
        
        objectiveBorder,
        
        overkillBorder
    
    if ( maximum && minimum ) {
        
        objective =  Math.min(minimum , ruleProgress)
        
        overkill =  Math.min(maximum - minimum, Math.max(ruleProgress - minimum , 0))
        
        objectiveWidth = 100 * objective/minimum
        
        overkillWidth = 100 * overkill/(maximum - minimum)
        
        objectiveTotal = 90 * minimum / maximum
        
        overkillTotal =  90 * (maximum - minimum) / maximum
        
        objectiveBorder = "2px 1px 2px 2px"
        
        overkillBorder = "2px 2px 2px 1px"
        
    }
    
    if (maximum && !minimum) {
        
        objective = 0
        
        overkill =  Math.min(maximum, ruleProgress)
        
        objectiveWidth = 0
        
        overkillWidth = 100 * overkill/maximum
        
        objectiveTotal = 0
        
        overkillTotal = 90
        
        objectiveBorder = "0"
        
        overkillBorder = "2px"
        
    }
    
    if (minimum && !maximum) {
        
        objective = Math.min(minimum , ruleProgress)
        
        overkill =  0
        
        objectiveWidth = 100 * objective/minimum
        
        overkillWidth = 0
        
        objectiveTotal = 90
        
        overkillTotal = 0
        
        objectiveBorder = "2px"
        
        overkillBorder = "0"
        
    }
    
    let boxStyle = {
        
        display: "inline-block",
        
        width: "18%",
        
        margin: "10px 1vh 1vh 1vh",
        
        lineHeight: "2vh"
        
    }
    
    let objectiveBorderStyle = {
        
        display: "inline-block",
        
        width: objectiveTotal + "%",
        
        height: "2px",
        
        borderWidth: objectiveBorder,
        
        borderStyle: "solid",
        
        borderColor: "black"
        
    }
    
    let overkillBorderStyle = {
        
        display: "inline-block",
        
        width: overkillTotal + "%",
        
        height: "2px",
        
        backgroundColor : "#EF4836",
        
        borderWidth: overkillBorder,
        
        borderStyle: "solid",
        
        borderColor: "black"
        
    }
    
    let objectiveStyle = {
        
        display: "block",
        
        width: objectiveWidth + "%",
        
        height: "100%",
        
        background: "black"
        
    }
    
    let overkillStyle = {
        
        display: "block",
        
        width: overkillWidth + "%",
        
        height: "100%",
        
        background: "black"
        
    }
    
    let indicatorStyle = {
        
        display: "inline-block",

        fontSize: "3vh"
        
    }
    
    let groupSymbleStyle = {
        
        display: "inline-block",
        
        width: "3vh",
        
        height: "3vh"
        
    }
    
    return (
        <span style={boxStyle}>
            <span style={groupSymbleStyle} className={groupName}>
            </span>
            
            <span style={indicatorStyle}>
                {ruleProgress}
                <span>{minimum ? "/" + minimum : ""}</span>
                <span style={{color: "#96281B"}}>{maximum ? "/" + maximum : ""}</span>
            </span>
            
            <br/>
            
            <span style={objectiveBorderStyle}>
                <span style={objectiveStyle}></span>
            </span>
            
            <span style={overkillBorderStyle}>
                <span style={overkillStyle}></span>
            </span>

        </span>
    )
})

ProgressBox.PropTypes = {

}

export default ProgressBox