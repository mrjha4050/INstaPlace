import StoreItem from './StoreItem'

function StoreListing({storeListing}) {

  if (!storeListing) {
    return
  }
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7'>
    {storeListing.map((item, index) => index<=3&&(         // use for changing the layout   index<=3&&
      <div key={index}>
        <StoreItem store={item}/>
      </div>
    ))}
  </div>
  );
}

export default StoreListing
