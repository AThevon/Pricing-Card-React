import './index.css';
import Button from '../Button';

const Cart = ({ classActive, type, price, storage, usersAllowed, gbSend,  onMouseEnter, onMouseLeave }) => {


    return (
        <>
            <li className={classActive ? 'cart cart-active' : 'cart'} 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}>
                <h3>{type}</h3>
                <h2><span>$</span>{price}</h2>
                <ul>
                    <li>{storage} Storage</li>
                    <li>{usersAllowed} Users Allowed</li>
                    <li>Send up to {gbSend} GB</li>
                </ul>
                <Button string='Learn more'/>
            </li>
        </>
    )
}

export default Cart;