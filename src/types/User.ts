export interface User {
    id: number;
    name: string;
    userName: string;
    email: string;
    address: Address;
    phone: string;
    website:  string;
    company: Company;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipCode: string;
    geo: Geo;
}

export interface Geo {
    lat: string;
    lng: number;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}