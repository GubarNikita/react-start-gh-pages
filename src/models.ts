export interface IBrand {
    id: number;
    title: string;
}

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    brand: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}
