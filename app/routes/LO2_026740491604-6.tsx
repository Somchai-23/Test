import React, { useState } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', image: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddProduct = () => {
    if (form.name && form.price && form.image) {
      setProducts([...products, { ...form }]);
      setForm({ name: '', price: '', image: '' });
    }
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm('คุณต้องการลบสินค้านี้หรือไม่?');
    if (confirmDelete) {
      const updatedProducts = products.filter((_, i) => i !== index);
      setProducts(updatedProducts);
    }
  };
  

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <center><h2 style={{ border: '2px solid #6699FF', borderRadius: '5px', backgroundColor: '#6699FF', display: 'inline-block', padding: '5px 10px' }}>เพิ่มข้อมูลสินค้า</h2></center>
    <br />
    <div style={{ marginBottom: '20px', border: '2px solid #4CAF50', borderRadius: '5px', padding: '10px' }}>
    <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name" style={{ marginRight: '10px' }}>ชื่อสินค้า:</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="ชื่อสินค้า"
            value={form.name}
            onChange={handleChange}
            style={{ padding: '5px', width: 'calc(100% - 120px)' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="price" style={{ marginRight: '10px' }}>ราคา:</label>
          <input
            id="price"
            type="text"
            name="price"
            placeholder="ราคา"
            value={form.price}
            onChange={handleChange}
            style={{ padding: '5px', width: 'calc(100% - 120px)' }}
          />
        </div>
        <label htmlFor="price" style={{ marginRight: '10px' }}>รูปภาพ: </label>
        <input
          type="text"
          name="image"
          placeholder="รูปภาพ (URL)"
          value={form.image}
          onChange={handleChange}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button className="bg-green-300 m-2 p-2" onClick={handleAddProduct} style={{ padding: '5px 10px', marginRight: '5px' }}>บันทึก</button>
        <button className="bg-red-300 m-2 p-2" onClick={() => setForm({ name: '', price: '', image: '' })} style={{ padding: '5px 10px' }}>เคลียร์</button>
      </div>

      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
        <thead>
          <tr style={{ backgroundColor: '#6699FF' }}>
            <th>No.</th>
            <th>ชื่อสินค้า</th>
            <th>ราคา</th>
            <th>รูปภาพสินค้า</th>
            <th>ดำเนินการ</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
              </td>
              <td>
                <button onClick={() => handleDelete(index)} style={{ padding: '5px 10px', backgroundColor: '#ff4d4d', color: 'white', border: 'none', cursor: 'pointer' }}>ลบ</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
