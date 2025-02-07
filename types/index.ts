interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

interface Order {
    id: string;
    status: 'pending' | 'processing' | 'shipped' | 'delivered';
    date: string;
    items: Product[];
    total: number;
    trackingNumber: string;
}