function InfoRow({ title, value }) {
  return(
    <div className='info_row__row'>
      <div className='info_row__title'>{title}</div>
      <div className='info_row__value'>{value}</div>
    </div>
  );
};

export default InfoRow;