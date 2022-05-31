export interface UserData {
    user: {
        email:string,
        firstName:string,
        lastName:string,
        address:string,
        phone:number | string
    },
    token:string
}

export interface LoginInterface {
    email:string,
    password:string
}

export interface UserInterface {
  
        email:string,
        firstName:string,
        lastName:string,
        address:string,
        phone:number | string
    
}