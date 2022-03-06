import InfoRow from './InfoRow';

function FormattedMethod({ method }) {
  if (method) {
    let twistValue;
    if (method.twist) {
      twistValue = <InfoRow title='Twist' value={method.twist} />
    };

    return(
      <div>
        <InfoRow title='Fermentation' value={`${method.fermentation.temp.value} °C`} />
        <InfoRow title='Mash temp' value={<MashTempTable collection={method.mash_temp} />} />
        {twistValue}
      </div>
    );
  }

  return('')
};

function MashTempTable({ collection }) {
  return(
    <div>
      <p>Temperature & duration</p>
      { collection.map(row => (
        <p>{row.temp.value} °C for {row.duration}</p>
      ))}
    </div>
  );
};

export default FormattedMethod;