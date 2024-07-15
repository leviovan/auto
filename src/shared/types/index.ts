
type ModelCar=string
type NameCar=string

export interface Car{
 id: number,
 name: NameCar,
 model: ModelCar,
 year: number,
 color: string,
 price: number,
 latitude: number,
 longitude: number
}
export interface SortCar{
    field :'year'|'price',
    desc:boolean
}