export interface allUsers{
    id:number,
    name:string,
    username:string,
    email:string,
    address:streeType,
    phone: string,
    website:string,
    company:companyType
}

interface streeType {
    street:string,
    suite:string,
    city:string,
    zipcode:string,
    geo: {
        lat:string,
        lng:string
    }
}

interface companyType{
    name:string,
    catchPhrase:string,
    bs:string
}