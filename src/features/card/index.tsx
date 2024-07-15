import { useRef, useState } from "preact/hooks"
import { Car } from "../../shared/types"

interface CardCar{
  car:Car
	deleteCard:()=>void
  onChangeField:(changeCAr:Car)=>void
}


const CardCar = ({car,deleteCard,onChangeField}:CardCar) => {

  const [isChange, setIsChange] = useState(false)
  const [carChange, setCarChange] = useState(car)

  const onChangeHandler=()=>{
    setIsChange(!isChange)
    onChangeField(carChange)
  }
  return (
		<>
    <li className=' max-w-[1132px] mx-auto w-full'  >
        <ul   className='flex cursor-pointer gap-8 w-full'>
            <li  className='truncate flex-[10%] flex-grow-0 flex-shrink-0'>{!isChange? carChange.name: <input onChange={(e)=>setCarChange((s)=>({...s,name:e.currentTarget.value}))} type='text' value={carChange.name}/>}</li>
            <li className='truncate flex-[10%] flex-grow-0 flex-shrink-0'>{!isChange? carChange.model: <input onChange={(e)=>setCarChange((s)=>({...s,model:e.currentTarget.value}))}  type='text' value={carChange.model}/>} </li>
            <li className='truncate flex-[10%] flex-grow-0 flex-shrink-0'>{!isChange? carChange.color: <input onChange={(e)=>setCarChange((s)=>({...s,color:e.currentTarget.value}))}  type='text' value={carChange.color}/>}</li>
            <li className='truncate flex-[10%] flex-grow-0 flex-shrink-0'>{!isChange? carChange.year:  <input  onChange={(e)=>setCarChange((s)=>({...s, year:Number(e.currentTarget.value)}))}  type='number' value={carChange.year}/>}</li>
            <li className='truncate flex-[10%] flex-grow-0 flex-shrink-0'>{!isChange? carChange.price: <input onChange={(e)=>setCarChange((s)=>({...s, price:Number(e.currentTarget.value)}))}  type='number' value={carChange.price}/>}</li>
						<li  ><button onClick={()=>deleteCard()}> удалить </button> <button onClick={()=>onChangeHandler()}> {!isChange?'Редактировать':'Завершить'}  </button></li>
        </ul>	
    </li>
		</>
  )
}

export default CardCar
