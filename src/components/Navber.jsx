import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
  return (
    <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#1976d2', color: '#fff'}}>
      <div style={{fontWeight: 'bold', fontSize: '1.2rem'}}>My Travel App</div>
      <div>
        <Link to="/" style={{color: '#fff', textDecoration: 'none', marginRight: '1rem'}}>หน้าแรก</Link>
        {/* เพิ่มลิงก์อื่น ๆ ได้ที่นี่ */}
      </div>
    </nav>
  );
};

export default Navber;
