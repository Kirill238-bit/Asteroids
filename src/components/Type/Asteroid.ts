
export type AsteroidDATA={
    close_approach_date: string,
    close_approach_date_full: string,
    orbiting_body:string,
    relative_velocity:{
        kilometers_per_hour:string
    },
    miss_distance:{
        kilometers:string,
    }
}

export type Asteroid={
    name:string,
    estimated_diameter:{
        meters:{
            estimated_diameter_min:number
        }
    }
    close_approach_date:string,
    is_potentially_hazardous_asteroid:boolean,
    close_approach_data:[AsteroidDATA],
}