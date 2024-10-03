
import "./css/CardStyle.css";

/* fotos tintas */
import diatex from './imgs/diatex.png'
import SuperLavavel from './imgs/SuperLavavel.png'
import Classica from './imgs/SuvinilClassica.png'
import coralDi from './imgs/CoralDiamante.png'
import DecoraFosco from './imgs/DecoraFosco.png'
import DecoraSeda from './imgs/DecoraSeda.png'
import SemiBrilho from './imgs/SemiBrilho.png'
import SuperPremium from './imgs/SuperPremium.png'
import SuvFc from './imgs/SuvFc.png'
import SuvFcCompleto from './imgs/SuvFcCompleto.png'
import SuvMulti from './imgs/SuvMulti.png'


export default function Card() {

  interface Product {
    title: string;
    description: string;
    image: string;
    price: string;
  }


  const products: Product[] = [
    {
      title: 'Tinta Sela & pinta Iquine',
      description: 'Tinta acrílica fosca, com rendimento econômico, alta cobertura e resistência.',
      image: `${diatex}`,
      price: 'R$ 49,90'
    },
    {
      title: 'Tinta Coral Super Premium',
      description: 'Ideal para quem busca proteção e beleza com acabamento acetinado.',
      image: `${SuperLavavel}`,
      price: 'R$ 59,90'
    },
    {
      title: 'Tinta Suvinil Fosco Clássica',
      description: 'Perfeita para ambientes internos, com acabamento fosco e secagem rápida.',
      image: `${Classica}`,
      price: 'R$ 54,90'
    },
    {
      title: 'Tinta  Decora SB',
      description: 'Tinta acrílica fosca, com rendimento econômico, alta cobertura e resistência.',
      image: `${coralDi}`,
      price: 'R$ 49,90'
    },
    {
      title: 'Tinta Decora FC ',
      description: 'Ideal para quem busca proteção e beleza com acabamento acetinado.',
      image: `${DecoraFosco}`,
      price: 'R$ 59,90'
    },
    {
      title: 'Tinta Decora Ac',
      description: 'Perfeita para ambientes internos, com acabamento fosco e secagem rápida.',
      image: `${DecoraSeda}`,
      price: 'R$ 54,90'
    }
    ,
    {
      title: 'Tinta Iquine SB',
      description: 'Perfeita para ambientes internos, com acabamento fosco e secagem rápida.',
      image: `${SemiBrilho}`,
      price: 'R$ 54,90'
    }
    ,
    {
      title: 'Tinta Super Lavavel',
      description: 'Perfeita para ambientes internos, com acabamento fosco e secagem rápida.',
      image: `${SuperLavavel}`,
      price: 'R$ 54,90'
    }
    ,
    {
      title: 'Tinta Super Premium ',
      description: 'Perfeita para ambientes internos, com acabamento fosco e secagem rápida.',
      image: `${SuperPremium}`,
      price: 'R$ 54,90'
    }
    ,
    {
      title: 'Tinta Suvinil Fosco',
      description: 'Perfeita para ambientes internos, com acabamento fosco e secagem rápida.',
      image: `${SuvFc}`,
      price: 'R$ 54,90'
    },
    {
      title: 'Tinta FC Completo',
      description: 'Perfeita para ambientes internos, com acabamento fosco e secagem rápida.',
      image: `${SuvFcCompleto}`,
      price: 'R$ 54,90'
    },
    {
      title: 'Tinta Multissuper',
      description: 'Perfeita para ambientes internos, com acabamento fosco e secagem rápida.',
      image: `${SuvMulti}`,
      price: 'R$ 54,90'
    }

  ];




    return (
      <div className="card-list">
        {products.map((product, index) => (
          <div className="card-container" key={index}>
            <img src={product.image} alt="" className='card-image' />
            <h1 className='card-title'>{product.title}</h1>
            <p className='card-description'>{product.description}</p>
            <a href="cardPage" className='card-c'>Compre Agora {product.price}</a>
          </div>
        ))}
      </div>
    );
    
      
  
}
