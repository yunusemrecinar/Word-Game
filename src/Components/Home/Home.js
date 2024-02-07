import "./home.css";

const Home = () => {
    return (
        <div className="homeContainer">
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
                <div className="book">
                    <a href="https://www.amazon.com.tr/Ola%C4%9Fan%C3%BCst%C3%BC-Bir-Gece-Stefan-Zweig/dp/6053326097/ref=sr_1_1?crid=3GIZ86WQZU6OQ&keywords=ola%C4%9Fan%C3%BCst%C3%BC+bir+gece&qid=1707311330&s=books&sprefix=ola%C4%9Fan%C3%BCst%C3%BC+bir+%2Cstripbooks%2C128&sr=1-1" target="_blank">
                        <img src="https://m.media-amazon.com/images/I/71BCYPV1kBL._SY522_.jpg" alt="book's image" />
                    </a>
                </div>
                <div className="book">
                    <a href="https://www.amazon.com.tr/dp/0091929113?psc=1&ref=ppx_yo2ov_dt_b_product_details" target="_blank">
                        <img src="https://m.media-amazon.com/images/I/71DPD5QEZCL._SY522_.jpg" alt="book's image" />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Home;