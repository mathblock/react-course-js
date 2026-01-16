import React from 'react';

const FilterBar = ({ activeFilter, onChange }) => {
  const filters = ['Tous', 'Entrées', 'Plats', 'Desserts', 'Boissons'];

  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '1rem' }}>
      {filters.map((f) => {
        const isActive = f === activeFilter;
        return (
          <button
            key={f}
            onClick={() => onChange(f)}
            style={{
              padding: '8px 14px',
              borderRadius: '20px',
              border: isActive ? '2px solid #e67e22' : '1px solid #ddd',
              backgroundColor: isActive ? '#e67e22' : 'white',
              color: isActive ? 'white' : '#333',
              cursor: 'pointer',
              fontWeight: isActive ? 'bold' : 'normal'
            }}
          >
            {f}
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;
