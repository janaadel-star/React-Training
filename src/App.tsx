import React from 'react';
import Button from './components/Button';
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
    <div style={{ padding: '20px' }}>
      <h1>React Training - Task 2</h1>

      <section style={{ marginBottom: '20px' }}>
        <h2>1. Buttons</h2>
        <Button text="Primary Button" variant="primary" onClick={() => alert('Primary clicked')} />
        <br /><br />
        <Button text="Danger Button" variant="danger" disabled={true} />
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>2. Cards</h2>
        <Card title="Card One" description="This is a regular card description." />
        <br />
        <Card title="Card Two" description="This card uses children prop below:">
          <p style={{ color: 'blue' }}>This is nested children content!</p>
        </Card>
      </section>

      <section style={{ marginBottom: '20px' }}>
        <h2>3. Table</h2>
        <Table columns={tableColumns} data={tableData} striped={true} />
      </section>
    </div>
  );
}