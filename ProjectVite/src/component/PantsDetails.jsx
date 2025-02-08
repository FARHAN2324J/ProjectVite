import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const PantsDetail = () => {
    const { id } = useParams();



    const items = [
        {id: 1, image: '/src/imgPants/6.jpg', title: 'Elastic Waist ', description: 'Turn It Up Pants', price: '$180'},
        {id: 2, image: '/src/imgPants/2.jpg', title: 'Tailored Stretch', description: 'Turn It Up Pants', price: '$150'},
        {id: 3, image: '/src/imgPants/3.jpg', title: 'High Tillie', description: 'Turn It Up Pants', price: '$130'},
        {id: 4, image: '/src/imgPants/4.jpg', title: 'Tailored Stretch', description: 'Turn It Up Pants', price: '$140'},
        {id: 5, image: '/src/imgPants/5.jpg', title: 'Casual wild leg', description: 'Turn It Up Pants', price: '$160'},
        {id: 6, image: '/src/imgPants/1.jpg', title: 'Linen wide leg', description: 'Turn It Up Pants', price: '$200'},
    ];


    const item = items.find(item => item.id === parseInt(id));



    if (!item) {
        return <div>No Item</div>;
    }

    return (
        <div>
            <Navbar/>
            <div className='flex px-10 py-5 gap-5'>
                <Link to="/"><span className='text-gray-700'>Home</span></Link>
                <span className='text-gray-700'>/</span>
                <Link to="/pants"><span className='text-gray-700'>Pants</span></Link>
                <span className='text-gray-700'>/</span>
                <Link><span className='text-gray-950'>{item.title}</span></Link>
            </div>
            <div className="p-10">
                <h1 className="text-3xl font-bold">{item.title}</h1>
                <img src={item.image} alt={item.title} className="my-5" />
                <p className="text-lg">{item.description}</p>
                <p className="text-xl font-bold">{item.price}</p>
            </div>
            <Footer/>
        </div>
        
    );
};

export default PantsDetail;
