function MenuCard(props) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '15px', textAlign: 'center', backgroundColor: 'white' }}>
      <img src={props.image} alt={props.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
      <h3>{props.name}</h3>
      <p style={{ fontWeight: 'bold', color: '#ff4500' }}>{props.price.toFixed(2)}€</p>
      
      <button 
        onClick={() => props.onAddToCart({ id: props.id, name: props.name, price: props.price })}
        style={{ 
          backgroundColor: '#28a745', 
          color: 'white', 
          border: 'none', 
          padding: '10px', 
          borderRadius: '5px', 
          cursor: 'pointer',
          width: '100%' 
        }}
      >
        Ajouter au Panier
      </button>

      <div style={{ marginTop: '10px' }}>
        {props.isVegetarian && <span style={{ color: 'green', fontSize: '0.8rem' }}>🌿 Végé</span>}
        {props.isNew && <span style={{ color: 'orange', fontSize: '0.8rem', marginLeft: '5px' }}>✨ Nouveau</span>}
      </div>
    </div>
  );
}

export default MenuCard;