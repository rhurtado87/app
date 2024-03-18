
import './Catalog.css';
import Product from '../components/Product';

function Catalog(){
    const data = [
    {  
        title: "Trading Cards",
        price: 33.34,
        category: "TCG",
        image: "img1.jpg",
        _id: "kaskdf"
    },
    {  
        title: "Games",
        price: 25.99,
        category: "Board Games",
        image: "img1.jpg",
        _id: "kaskdf"
    },
    {  
        title: "Toys",
        price: 159.35,
        category: "All ages",
        image: "img1.jpg",
        _id: "kaskdf"
    },
    {  
        title: "Anime",
        price: 45.00,
        category: "All ages",
        image: "img1.jpg",
        _id: "kaskdf"
    },
    {  
        title: "Accessorize",
        price: 24.00,
        category: "All ages",
        image: "img1.jpg",
        _id: "kaskdf"
    },
    {  
        title: "Accessorize",
        price: 24.00,
        category: "All ages",
        image: "img1.jpg",
        _id: "kaskdf"
    },
    ];
    return(
        <div className="catalog page">
            <h1>Our amazing catalog!!</h1>
            <Product info={data[0]} />
            <Product info={data[1]} />
            <Product info={data[2]} />
            <Product info={data[3]} />
            <Product info={data[4]} />
            <Product info={data[5]} />
        </div>
    );
}

export default Catalog;