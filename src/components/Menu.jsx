import menuData from '../DATA/menuData';
import MenuCard from './MenuCard';

function Menu({ onAddToCart }) {
  return (
    <section style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
      gap: '20px', 
      padding: '40px 20px' 
    }}>
      {menuData.map((plat) => (
        <MenuCard 
          key={plat.id} 
          id={plat.id}
          name={plat.name}
          price={plat.price}
          image={plat.image}
          isVegetarian={plat.isVegetarian}
          isNew={plat.isNew}
          onAddToCart={onAddToCart}
        />
      ))}
    </section>
  );
}

export default Menu;