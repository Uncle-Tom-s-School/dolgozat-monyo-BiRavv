
const BeerCard = (
  image:string = "",
  price:string = "",
  name:string = "",
  available:string = "",


  
) => {




  return (
    <div className='beerCard'>
      <img src={image} alt="" />
      <p>{price}</p>
      <p>{name}</p>
      <p>{available}</p>

    </div>
  )
}

export default BeerCard