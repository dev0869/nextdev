export type ChildProps={
    children:React.ReactNode
}


export type DataProps=Record<string,string|number|boolean|[]|object>

 
export interface ProductProps {
    specs: {
      Motor_Type_and_Power: string;
      Controller_Type: string;
      Speedo_Meter: string;
      Battery_Capacity: string;
      Tyre_Specification_F_and_R: string;
      Suspension_F_and_R: string;
      Break_F_and_R: string;
    };
    feature: {
      speed: string;
      Total_Range: string;
      Charging_Time: string;
    };
    _id: string;
    name: string;
    type: 'scooter' | 'bike'; 
    price: string;
    images: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    bannerimg: string;
  }