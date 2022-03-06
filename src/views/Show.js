import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import InfoRow from '../components/InfoRow';
import FormattedMethod from '../components/FormattedMethod';

function Show() {
  const { id } = useParams()
  const [data, setData] = useState({})

  useEffect(async() => {
    setData((
      await (
        await fetch(`https://api.punkapi.com/v2/beers/${id}`)
      ).json()
    )[0]);
  }, []);

  return(
    <div className='card__container'>
      <img alt='' className='image' src={data.image_url}/>
      <InfoRow title='Name' value={data.name} />
      <InfoRow title='PH' value={data.ph} />
      <InfoRow title='Food pairing' value={data.food_pairing} />
      <InfoRow title='Brewers tips' value={data.brewers_tips} />
      <InfoRow title='Method' value={<FormattedMethod method={data.method} />} />
      <Link className='button button--center' to='/'>Return</Link>
    </div>
  )
}

export default Show;