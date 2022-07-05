import Banner from "../components/Banner/Banner"
import Main from "../components/Main/Main"

const MainPage = ({data}) => {
    return(
        <>
            <Banner data={data}/>
            <Main data={data}/>
        </>
    );
}

export default MainPage;