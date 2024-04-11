import Section1 from "../components/Section-1"
import Section2 from "../components/Section-2"
import Section3 from "../components/Section-3"

const Home = () => {
    return (
        <div className="w-full flex  items-center flex-col ">
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    )
}

export default Home