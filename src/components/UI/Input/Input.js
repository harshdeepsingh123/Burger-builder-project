    import React from 'react'
import './input.css'
const input =(props)=>{
    let Inputelement=null;
    const inputclasses=["Inputelement"]
    if(props.invalid && props.shouldvalidate && props.touched){
        inputclasses.push('Invalid')
    }
    switch(props.elementType){
        case ('input'):
            Inputelement=<input className={inputclasses.join(' ')} {...props.elementConfig} value={props.value}
            onChange={props.changed}/>;
            break;
        case ('textarea'):
        Inputelement=<textarea className={inputclasses.join(' ')}  {...props.elementConfig} value={props.value}
            onChange={props.changed}/>;
            break;
         case ('select'):
            Inputelement=(<select className={inputclasses.join(' ')}  value={props.value}
            onChange={props.changed}>
            {props.elementConfig.options.map(option =>(
                <option key={option.value} value={option.value}>
                {option.displayValue}
                </option>
            ))}
            </select>
            );
            break;
        default:
            Inputelement=<input className={inputclasses.join(' ')} {...props.elementConfig} value={props.value}/>
    }
    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {Inputelement}
        </div>
    )
}
export default input