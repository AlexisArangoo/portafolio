import { useDispatch, useSelector } from 'react-redux'
import './styles/Dark.css'
import { setOnDarkG } from '../../store/slices/onDark.slice'
import { useState } from 'react'

const Dark = () => {

    const onDark = useSelector(reducer => reducer.onDark)

    const dispatch = useDispatch()

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        const newCheckedValue = !isChecked;
        setIsChecked(newCheckedValue);

        // Despacha la acción para actualizar el valor en el estado global
        dispatch(setOnDarkG(newCheckedValue));
    };

  return (
    <label className="switch-button" htmlFor="switch">
        <div className="switch-outer">
            <input  id="switch" type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
            <div className="button">
                <span className="button-toggle"></span>
                <span className="button-indicator"></span>
            </div>
         </div>
    </label>
  )
}

export default Dark