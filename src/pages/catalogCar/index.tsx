
import {  useState } from "preact/hooks";
import CardCar from "../../features/card";
import useFetch from "../../shared/hook";
import { Car, SortCar } from "../../shared/types";
import arrowDown from '../../shared/assets/img/arrowDown.svg'
import MyMap from "../../entity/map";




export const CatalogCar = () => {
    const { data:cars, isLoading, error,setData } = useFetch<Car[]>('https://test.tspb.su/test-task/vehicles');
    const [sortField, setSortField] = useState<SortCar>({ desc: true, field: 'year' })

    const onChangeField=(changeCar:Car)=>{
        cars![cars!.findIndex(car=>car.id===changeCar.id)]=changeCar
        setData(s=>(s))
    }

    const deleteHandler=(id:number)=>{
       setData((s)=>s!.filter(carF=>carF.id!==id))
    }

    if (error) {
        return <div>Error: {error}</div>;
    }    
    return (
        <div className=' mx-auto'>
            {isLoading&&<div>Loading cars...</div>}
            <ul class='bg-blue-600  p-5 w-full text-white'>
                <li className='max-w-[1132px] mx-auto w-full text-nowrap'>
                    <ul className='flex gap-8 w-full font-semibold '>
                        <li className=' truncate flex-[10%]  flex-grow-0  flex-shrink-0'>Марка:</li>
                        <li className=' truncate flex-[10%] flex-grow-0  flex-shrink-0'>Модель: </li>
                        <li className=' truncate flex-[10%] flex-grow-0  flex-shrink-0'>Цвет: </li>
                        <li onClick={() => setSortField((s) => ({ field: 'year', desc: !s.desc }))} className=' truncate flex-[10%] flex items-center gap-[2px] cursor-pointer flex-grow-0  flex-shrink-0'>
                            <img className={`h-3 w-3 ${sortField.field === "year" && sortField.desc ? ' rotate-180' : 'rotate-0'}`} src={arrowDown} alt="" />Год выпуска:  </li>
                        <li onClick={() => setSortField((s) => ({ field: 'price', desc: !s.desc }))} className=' truncate flex-[10%] flex items-center gap-[2px] cursor-pointer flex-grow-0  flex-shrink-0'>
                            <img className={`h-3 w-3 ${sortField.field === "price" && sortField.desc ? ' rotate-180' : 'rotate-0'}`} src={arrowDown} alt="" />Цена:</li>
                    </ul>
                </li>
            </ul>
            <ul className='p-5 text-nowrap bg-blue-200 w-full flex gap-1 flex-col '>
                {cars?.sort((a, b) =>
                    sortField.desc
                        ? a[sortField.field] - b[sortField.field]
                        : b[sortField.field] - a[sortField.field])
                    .map((car,) => <CardCar   onChangeField={onChangeField} deleteCard={()=>deleteHandler(car.id)}  key={'key' + car.id} car={car} />)}
            </ul>
                    <MyMap placemarks={cars!} />
        </div>
    )
}
