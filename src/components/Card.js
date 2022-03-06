import { Link } from 'react-router-dom';

function Card({ data }) {
  return(
    <div>
      <img alt='' className='image' src={data.image_url}/>
      <h3 className='card__title'>{data.name}</h3>
      <p>{data.description}</p>
      <Link className='button' to={`/beer/${data.id}`}>Detailed information</Link>
    </div>
  );
};

export default Card;