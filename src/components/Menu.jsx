import menuData from '../data/menuData';
import MenuCard from './Menucard';

function Menu({ onAddToCart }) {
  return (
    <div className="menu-container">
      <h2 className="menu-title">Notre Menu</h2>

      <div className="menu-grid">
        {menuData && menuData.map((item) => (
          <MenuCard key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default Menu;