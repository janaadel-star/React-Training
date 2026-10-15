// @ts-nocheck
import React from 'react';
import Button from './components/ui/Button';
import Card from './components/Card';
import Table from './components/Table';

export default function App() {
  const tableColumns = ["Name", "Age", "City"];
  const tableData = [
    { name: "Jana Adel", age: 21, city: "Cairo" },
    { name: "Ahmed Ali", age: 22, city: "Alexandria" },
    { name: "Sara Mohamed", age: 20, city: "Giza" }
  ];

  return (
    <div style={{ 
      padding: '40px 20px',  
      margin: '0 auto',
      backgroundColor: '#0f274e',
      color: '#0f274e'
    }}>

      <h1 style={{ 
        textAlign: 'center', 
        color: '#ffffff', 
        marginBottom: '40px',
        fontSize: '2.5rem',
        fontWeight: '750',
        paddingBottom: '20px',
        borderBottom: '3px solid #94a3b8',
      }}>
        React Training - Task 2 
      </h1>


      <section style={{ 
        background: '#ffffff', 
        padding: '25px', 
        borderRadius: '50px', 
        marginBottom: '30px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        border: '2px solid #94a3b8',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#0f274e', marginBottom: '30px', fontSize: '2rem', fontWeight: 'bold', borderBottom: '2px solid #94a3b8 ', display: 'inline-block'}}> Buttons </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <Button text="Primary Button" variant="primary" onClick={() => alert('Primary clicked')} />
          <Button text="Danger Button" variant="danger" disabled={true} />
        </div>
      </section>

      <section style={{ 
        background: '#ffffff', 
        padding: '25px', 
        borderRadius: '50px', 
        marginBottom: '30px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        border: '2px solid #94a3b8',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#0f274e', marginBottom: '10px', fontSize: '2rem', fontWeight: 'bold', borderBottom: '2px solid #94a3b8 ', display: 'inline-block'}}> Cards  </h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Card title="Card One" description="This is a regular card description showing how the card component works." />
          <Card title="Card Two" description="This card uses children prop below:">
            <p style={{ color: '#1f55ca', fontWeight: 'bold', marginTop: '20px' }}>This is nested children content inside the card!</p>
          </Card>
        </div>
      </section>


      <section style={{ 
        background: '#ffffff', 
        padding: '25px', 
        borderRadius: '50px', 
        marginBottom: '30px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        border: '2px solid #94a3b8',
        textAlign: 'center'
      }}>
    
        <h2 style={{ color: '#0f274e', marginBottom: '20px', fontSize: '2rem', fontWeight: 'bold', borderBottom: '2px solid #94a3b8 ', display: 'inline-block'}}>Table</h2>
        <div style={{ 
          margin: '0 auto',  
          overflow: 'hidden',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <Table columns={tableColumns} data={tableData} striped={true}/>
        </div>
      </section>
    </div>
  );
}