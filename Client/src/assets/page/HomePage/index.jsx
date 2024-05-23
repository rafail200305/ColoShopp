import { useEffect, useState } from "react";
import "./index.scss";
import { getAllData } from "../../services/constant";
import { Card, Col, Row } from "antd";
const { Meta } = Card;

const HomePage = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getAllData().then((res) => {
      setProduct(res.data.data);
    });
  }, []);

  console.log(product);
  return (
    <div>
      <div id="home-page">
        <div className="home-page">
          <section id="banner">
            <div className="content">
              <p>SPRING / SUMMER COLLECTION 2017</p>
            </div>
            <div className="content1">
              <h1>Get up to 30% Off New Arrivals</h1>
            </div>
            <div className="buy">
              <button>SHOP NOW</button>
            </div>
          </section>
          <div className="image">
            <div className="image-inner">
              <span>WOMEN'S</span>
            </div>
            <div className="image-inner">
              <span>ACCESSORIES'S</span>
            </div>
            <div className="image-inner">
              <span>MEN'S</span>
            </div>
          </div>
          <section>
            <div className="new">
              <h1>New Arrivals</h1>
            </div>
            <div className="cards">
              <Row gutter={16}>
                {product &&
                  product.map((p) => {
                    return (
                      <div className="contanier">
                        <Col
                          className="gutter-row"
                          span={6}
                          key={p._id}
                          xs={24}
                          md={12}
                          lh={8}
                          xl={8}
                        >
                          <Card
                            hoverable
                            style={{
                              width: 300,
                            }}
                            cover={<img alt="example" src={p.imageUrl} />}
                          >
                            <Meta
                              title={p.title}
                              description={`$ ${p.price}`}
                            />
                          </Card>
                        </Col>
                      </div>
                    );
                  })}
              </Row>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
