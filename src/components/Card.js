import { AiFillStar } from 'react-icons/ai'
import { BsFillBagHeartFill } from 'react-icons/bs'


function Card({img,title,star,reviews,newPrice,prevPrice}) {
  return (
    <section className='card'>
      <img 
      src={img} 
      alt='Shoe'
      className='card-img'/>
      <div className='card-details'>
        <h3 className='card-title'>{title}</h3>
        <section className='card-reviews'>
          {star} {star} {star} {star}
          <span className='total-revi'>{reviews}</span>
        </section>
        <section className='card-price'>
        <div className='price' >
          <del>{prevPrice}</del> {newPrice}
        </div>

        <div className='bag'>
          <BsFillBagHeartFill className='bag-icon'/>
        </div>
        <a className='add-items'>Add to cart</a>
        
        
        </section>


      </div>
    </section>
  )
}

export default Card