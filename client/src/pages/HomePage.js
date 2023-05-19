import React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <Layout title={"Clean Choice"}>
      {/* banner image */}
      <img
        src="/images/banner.jpg"
        className="banner-img"
        alt="bannerimage"
        width={"100%"}
      />
      {/* banner image */}
      {/* banner part start*/}
      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="banner_text">
                <div className="banner_text_iner">
                  <h1>Добро пожаловать на главную страницу</h1>
                  <p>
                    Мы стремимся предоставить вам информацию, продукты и
                    ресурсы, которые помогут вам принять более осознанные и
                    экологически дружественные решения в своей жизни.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner_img">
          <img src="images/i1.jpg" alt="#" className="img-fluid" />
        </div>
      </section>
      {/* banner part start*/}

      {/* product list start*/}
      <section className="single_product_list">
        <h1 className="text-center">
          Наши принципы эко-сознательного потребления
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="single_product_iner">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_product_img">
                      <img
                        src="images/single_product_1.png"
                        className="img-fluid"
                        alt="#"
                      />
                      <img
                        src="images/product_overlay.png"
                        alt="#"
                        className="product_overlay img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div className="single_product_content">
                      <h2>Сокращение использования пластика и упаковки</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_product_iner">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_product_img">
                      <img
                        src="images/single_product_2.jpg"
                        className="img-fluid"
                        alt="#"
                      />
                      <img
                        src="images/product_overlay.png"
                        alt="#"
                        className="product_overlay img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div className="single_product_content">
                      <h2>Поддержка местных и экологически чистых продуктов</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_product_iner">
                <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6 col-sm-6">
                    <div className="single_product_img">
                      <img
                        src="images/single_product_3.png"
                        className="img-fluid"
                        alt="#"
                      />
                      <img
                        src="images/product_overlay.png"
                        alt="#"
                        className="product_overlay img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 col-sm-6">
                    <div className="single_product_content">
                      <h2>Устойчивая мода и вторичное использование одежды</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* product list end*/}

      {/* feature part here */}
      <section className="feature_part section_padding">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="feature_part_tittle">
                <h3>Новости и события, а так же наши услуги!</h3>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="feature_part_content">
                <p>
                  Будьте в курсе последних новостей и событий в области
                  эко-сознательного потребления. Мы стремимся предоставить вам
                  информацию, продукты и ресурсы, которые помогут вам принять
                  более осознанные и экологически дружественные решения в своей
                  жизни.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="single_feature_part">
                <img src="images/feature_icon_1.svg" alt="#" />
                <h4>Recycling</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single_feature_part">
                <img src="images/feature_icon_2.svg" alt="#" />
                <h4>Online Order</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single_feature_part">
                <img src="images/feature_icon_3.svg" alt="#" />
                <h4>Free Delivery</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single_feature_part">
                <img src="images/Environmentally_products.svg" alt="#" />
                <h4>Environmentally products</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feature part end */}
    </Layout>
  );
};

export default HomePage;
