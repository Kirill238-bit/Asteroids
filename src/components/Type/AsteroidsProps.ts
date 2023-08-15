export type AsteroidsMassive={
    id: string,
    name: string,
    estimated_diameter: {
        meters:{
            estimated_diameter_min:number,
        }
    },
    is_potentially_hazardous_asteroid: boolean,
    close_approach_data: [DATA],
}

export type DATA ={
    close_approach_date: string,
    close_approach_date_full: string,
    orbiting_body:string,
    miss_distance:{
        lunar:string,
        kilometers:string
    }
}

export type AsteroidsMassProps={
    AsteroidsList:AsteroidsMassive[],
}