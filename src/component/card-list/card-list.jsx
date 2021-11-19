import { Card } from '../card/Card';
import './card-list.style.css';

export const CartList = props => {
    return <div className="card-list">          
        {props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />))}
    </div>
}