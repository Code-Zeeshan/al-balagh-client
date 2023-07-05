import {
    InfoOutlined,
    DeleteOutline
} from "@material-ui/icons";
import { Style } from "./Product.styled";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useAuth from "../../hooks/useAuth";


const Product = ({ item, setSearchResult }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPrivate = useAxiosPrivate();
    const { auth } = useAuth();

    const goToProductDetail = e => {
        e.preventDefault();
        navigate(`/products/${item._id}`);
        // navigate(`/products/add`);
    }


    const deleteProduct = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosPrivate.axios.delete("/products/deleteOne", { params: { params: item._id } });
            if (response.status === 200) {
                setSearchResult(prev => [...prev.filter(ele => ele._id != item._id)]);
            }
            navigate("/products");
        } catch (err) {
            console.error("err", err);
        }
    }

    return (
        <Style.Container>
            <Style.Circle />
            <Style.Image src={item.imageURL} />
            <Style.Info>
                {/* <Style.Icon>
                    <ShoppingCartOutlined />
                </Style.Icon> */}
                <Style.Icon onClick={(e) => goToProductDetail(e)}>
                    <InfoOutlined />
                </Style.Icon>
                {auth.role === 7260 &&
                    <Style.Icon onClick={(e) => deleteProduct(e)}>
                        <DeleteOutline />
                    </Style.Icon>
                }
                {/* <Style.Icon>
                    <FavoriteBorderOutlined />
                </Style.Icon> */}
            </Style.Info>
        </Style.Container>
    );
};

export default Product;