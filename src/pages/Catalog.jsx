
import './Catalog.css';
import Product from '../components/Product';

function Catalog(){
    const data = [
    {  
        title: "Dominaria United",
        price: 49.99,
        category: "Commander",
        image: "dominariaCommander.png",
        _id: "1"
    },
    {  
        title: "March of the Machine",
        price: 39.99,
        category: "Commander",
        image: "machineCommander.jpg",
        _id: "2"
    },
    {  
        title: "WarHammer",
        price: 100.99,
        category: "Commander",
        image: "warCommander.png",
        _id: "3"
    },
    {  
        title: "Ikoria Lair",
        price: 45.00,
        category: "Commander",
        image: "lkoriaLairCommander.jpg",
        _id: "4"
    },
    {  
        title: "Kamigawa Neo",
        price: 24.00,
        category: "Commander",
        image: "kamigawaCommander.jpg",
        _id: "5"
    },
    {  
        title: "Zendikar Rising",
        price: 25.00,
        category: "MTG Commander",
        image: "zendikarRisingCommander.jpg",
        _id: "6"
    },
    ];

    return(
        <div className="catalog page">
            <h2>Magic: The Gathering Commander</h2>

            {data.map(prod => (
            <Product key={prod._id} info={prod} />
            ))}
        </div>
    );
}

export default Catalog;