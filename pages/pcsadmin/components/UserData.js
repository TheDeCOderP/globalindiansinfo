import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { useEffect, useState } from "react";

const UserData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/get");
    const jsonData = await response.json();
    setData(jsonData.data);
  };

  return (
    <div className="container product_grid">
      <div className="row">
        {Array.isArray(data) &&
          data.map((item) => (
            <div
              className="col-sm-6 col-md-4 col-lg-4 products_grid"
              key={item.id}
            >
              <Card className="products_card">
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Link href={`tel:${item.mobile}`}>{item.mobile}</Link>
                  <Link href={`mailto:${item.email}`}>{item.email}</Link>
                  <p>{item.message}</p>
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserData;
