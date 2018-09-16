export interface User {
    id:number;
    name:string;
    username:string;
    email:string;
    address:Address;
    phone:string;
    website:string;
    company:Company;
    posts:Post[];
}

export class TestUser implements User{
    id: number;  name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
    posts: Post[];
  }

export class Address {
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo:Geo;
}

export class Company {
    name:string;
    catchPhrase:string;
    bs:string;
}

export interface Geo {
    lat:string;
    lng:string;
}

export class Post{
    userId:number;
    id:number;
    title:string;
    body:string;
    comments:Comment[];
}

export interface Comment{
    postId:number;
    id:number;
    name:string;
    email:string;
    body:string;
}
