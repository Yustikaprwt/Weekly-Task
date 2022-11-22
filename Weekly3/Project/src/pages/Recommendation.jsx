import { React, useState, useEffect} from "react";
import "../css/Recommendation.css";
import { ImPriceTag } from "react-icons/im";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Recommendation = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(
                "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish"
            );

            if(componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }

            return() => {
                componentMounted = false;
            };
        };
        getProducts();
    }, []);

    return (
        <section className="recommendation-section">
            <Navbar/>
            <h3 className="recommendation-title">
                    <strong>Recommendation Product</strong>
            </h3>
            <hr/>
                    <div className="row" style={{display: "flex", flexDirection: "row"}}>
                        {filter.map((product) => (
                            <div className="col d-flex flex-row-wrap justify-content-center" >
                                <div className="card card-detail text-center" key={product.id}>
                                    <img src={product.api_featured_image} className="card-img-top" alt={product.title}/>
                                    <p style={{color: "black"}}>{product.brand}</p>
                                        <div className="card-title mb-0 lead">
                                            <p className="card-text" style={{color: "black"}}>{product.name}</p>
                                            <p><ImPriceTag/> $ {[product.price]}</p>
                                        </div>
                                 </div>
                            </div>
                        ))};
                </div>
                    <div className="loading">
                    {loading ? <Loading/> : <getProducts/>}
                </div>
            <Footer/>
        </section>
    );
};

export default Recommendation;