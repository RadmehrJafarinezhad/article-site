import { createContext, useEffect, useState } from "react";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import CreateArticle from "./pages/createArticle/CreateArticle"
import Articles from "./pages/articles/Articles"
import NotFound from "./pages/notFound/NotFound";


export const DataContext = createContext();

function App() {

    const [menuConfigs, setMenuConfigs] = useState(null);
    const [footerConfigs, setFooterConfigs] = useState(null);

    useEffect(() => {
        async function getDatas() {
            try {

                const menuRes = await axios.get("http://localhost:3000/menuConfigs");
                const footerRes = await axios.get("http://localhost:3000/footerConfigs");


                setMenuConfigs(menuRes.data);
                setFooterConfigs(footerRes.data);
            } catch (error) {
                console.err(error)
            }
        }

        getDatas();
    }, []);

    return (
        <div>
            <DataContext.Provider value={{ menuConfigs, footerConfigs }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/create-article" element={<CreateArticle />} />
                    <Route path="/article/:id" element={<Articles />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </DataContext.Provider>
        </div>
    );
}

export default App;