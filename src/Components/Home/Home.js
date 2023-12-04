import "./home.css";

const Home = () => {
    return (
        <div className="container">
            <h1>Books</h1>
            <div className="books">
                <div className="book">
                    <a href="https://www.amazon.com.tr/dp/1612681131?psc=1&ref=ppx_yo2ov_dt_b_product_details" target="_blank">
                        <img src="https://m.media-amazon.com/images/I/81BE7eeKzAL._SY522_.jpg" alt="book's image"/>
                    </a>
                </div>
                <div className="book">
                    <a href="https://www.amazon.com.tr/dp/1585424331?psc=1&ref=ppx_yo2ov_dt_b_product_details" target="_blank">
                        <img src="https://m.media-amazon.com/images/I/71UypkUjStL._SY522_.jpg" alt="book's image" />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Home;