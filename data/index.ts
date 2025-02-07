const categories = [
    { name: "High-Tech", icon: "📱" },
    { name: "Mode", icon: "👗" },
    { name: "Maison", icon: "🏠" },
    { name: "Sport", icon: "🏀" },
];


const featuredProducts = [
    {
        id: "1",
        name: "Apple Watch Ultra",
        price: 5000,
        rating: 4.8,
        image: "https://www.ditur.fr/media/catalog/product/cache/072e8016279ede615a367e5d730a8c07/m/x/mx4p3dh-a_1.jpg",
    },
    {
        id: "2",
        name: "MacBook Pro 14\"",
        price: 6000,
        rating: 4.9,
        image: "https://www.numerama.com/wp-content/uploads/2023/01/macbook-001-scaled.jpg",
    },
    {
        id: "3",
        name: "Apple Watch Ultra",
        price: 7000,
        rating: 4.8,
        image: "https://www.ditur.fr/media/catalog/product/cache/072e8016279ede615a367e5d730a8c07/m/x/mx4p3dh-a_1.jpg",
    },
    {
        id: "4",
        name: "MacBook Pro 14\"",
        price: 8000,
        rating: 4.9,
        image: "https://www.numerama.com/wp-content/uploads/2023/01/macbook-001-scaled.jpg",
    },
];

const promotions = [
    {
        title: "Soldes High-Tech",
        subtitle: "Jusqu'à -50%",
        image: "https://www.01net.com/app/uploads/2020/01/168da4a682cbcce2abc44a0e6211b.jpeg",
    },
];

const userProfile = {
    name: "John Doe",
    membership: "Membre Premium",
    avatar: "https://randomuser.me/api/portraits/men/30.jpg",
    email: "john@example.com",

};

const menuItems = [
    {
        iconName: "user",
        title: "Profil",
        subtitle: "Modifier vos informations personnelles",
    },
    {
        iconName: "credit-card",
        title: "Paiement",
        subtitle: "Gérer vos moyens de paiement",
    },
    {
        iconName: "lock",
        title: "Sécurité",
        subtitle: "Modifier votre mot de passe",
    },
    {
        iconName: "help-circle",
        title: "Aide",
        subtitle: "FAQ et support",
    },
];



const order: Order = {
    id: '123456',
    status: 'shipped',
    date: '2025-02-07',
    items: [/* ... */],
    total: 100000,
    trackingNumber: 'TR123456789'
};

const steps = [
    { title: 'Commande confirmée', done: true },
    { title: 'En préparation', done: true },
    { title: 'Expédiée', done: true },
    { title: 'En livraison', done: false },
    { title: 'Livrée', done: false }
];

const welcomeSteps = [
    {
        title: "Découvrez l'Élégance du Shopping",
        subtitle: "Une expérience de shopping personnalisée et intuitive",
        image: 'https://omnitail.net/wp-content/uploads/2021/06/amazon-clothes-sm.png'
    },
    {
        title: "Les Meilleures Marques",
        subtitle: "Une sélection soigneusement choisie pour vous",
        image: 'https://img.grouponcdn.com/deal/49Js9bbWtLM2dcwJYrZEghwLKhg2/49-1000x600/v1/t600x362.jpg'
    },
    {
        title: "Livraison Rapide",
        subtitle: "Recevez vos produits en un temps record",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWLbAWKcBT-fModQLXMsxD1CkiTxFsjcyHw&s'
    }
];

export {
    categories,
    featuredProducts,
    promotions,
    userProfile,
    menuItems,
    order,
    steps,
    welcomeSteps

}