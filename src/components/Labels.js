import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';

 const Labels = () => {
  const {labels, updateLabel} = useContext(GlobalContext);
  console.log(labels);
  return (
    <React.Fragment>
        <p className='text-gray-500 font-bold mt-10'>
            Label
        </p>
        {labels.map((lbl, index)=>{
            const {label, checked} = lbl;
            return (
                <label key={index} className='items-center mt-3 block'>
                    <input type='checkbox' checked={checked} 
                    onChange={()=> updateLabel({label:label, checked: !checked})}
                    className={`form-checkbox h-5 w-5 text-${label}-400 rounded focus:ring-0 cursor-pointer`}/>
                    <span className='ml-2 text-gray-700 capitalize'>
                        {label}
                    </span>
                </label>
            )
        }
        )}
    </React.Fragment>
  )
}
export default Labels;
