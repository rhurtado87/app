
import './Catalog.css';
import Product from '../components/Product';

function Catalog(){
    const data = [
    {  
        title: "Pokemon",
        price: 33.34,
        category: "TCG",
        image: "pokemon_collectorChest.jpg",
        _id: "kaskdf"
    },
    {  
        title: "Games",
        price: 25.99,
        category: "Board Games",
        image: "dnd_starterSet.jpg",
        _id: "kaskdf"
    },
    {  
        title: "Toys",
        price: 159.35,
        category: "All ages",
        image: "toy_90s.jpg",
        _id: "kaskdf"
    },
    {  
        title: "Anime",
        price: 45.00,
        category: "All ages",
        image: "anime_80s.jpg",
        _id: "kaskdf"
    },
    {  
        title: "Accessorize",
        price: 24.00,
        category: "All ages",
        image: "key_bleach.jpeg",
        _id: "kaskdf"
    },
    {  
        title: "Books & Comics",
        price: 25.00,
        category: "All ages",
        image: "popular_manga.png",
        _id: "kaskdf"
    },
    {  
        title: "Manga",
        price: 25.00,
        category: "All ages",
        image: "popular_manga.png",
        _id: "kaskdf"
    },
    ];

    return(
        <div className="catalog page">
            <h1>Our amazing catalog!!</h1>

            {data.map(prod => (
            <Product key={prod._id}info={prod} />
            ))}
        </div>
    );
}

export default Catalog;