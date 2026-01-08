function IdentityCard({ name, age, country, color}) {
    return <div style={{ border: `1px solid ${color}`, padding: '10px', margin: '10px', borderRadius: '10px'}}>
        Hello, je suis {name},
        j'ai {age} ans je viens du {country} </div>;
  }
  export default IdentityCard;
