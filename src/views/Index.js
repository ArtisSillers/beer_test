import { useState, useEffect } from 'react';
import Card from '../components/Card';

function Index() {
  const [fullList, setList] = useState([]);
  const oldSchoolList = fullList.filter(item => {
    return parseInt(item.first_brewed.substr(-4)) < 2011
  })
  let [visible, setVisible] = useState(true)
  let actualList = visible ? fullList : oldSchoolList

  useEffect(async() => {
    setList(
      await (
        await fetch('https://api.punkapi.com/v2/beers')
      ).json()
    )
  }, []);

  return(
    <div>
    <p className='button button--center' onClick={ () => setVisible(!visible) }>
      { visible ? 'Hide' : 'Show' } beers that are brewed before or on 2010
    </p>
      <ul className='card_list__container'>
        { actualList.map(record => (
          <li className='card__container' key={record.id} title={record.tagline}>
            <Card data={record}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;