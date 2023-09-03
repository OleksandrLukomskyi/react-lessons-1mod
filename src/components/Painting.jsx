import PropTypes from 'prop-types';
import defaultImage from './default.jpg'

Painting.propTypes = {
   imageUrl: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   profileUrl: PropTypes.string.isRequired,
   authorName: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired,
   quantity: PropTypes.number.isRequired,
};

export default function Painting(props) {
   console.log(props);
   const { imageUrl = defaultImage, title, profileUrl, authorName, price, quantity } = props;
   return (
     <div>
       <img src={imageUrl} alt={title} width="480" />
       <h2>{title}</h2>
       <p>
         Автор: <a href={profileUrl}>{authorName}</a>
       </p>
       <p>Цена: {price} кредитов</p>
       <p>Доступность: {quantity} {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
       <button type="button">Добавить в корзину</button>
     </div>
   );
 }