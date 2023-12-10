import { createContext } from "vm";
import { useAxiosFetch } from "../hooks/useAxiosFetch";
import { useEffect, useState } from "react";

const DataContext  =createContext({});

export const DataProvider = ({children}:any)=>{

    const [posts, setPosts] = useState<any[]>([])
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);

    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

    useEffect(() => {
        setPosts(data);
    }, [data]);

    useEffect(() => {
        const filteredResults = posts.filter((post) =>
            ((post.body).toLowerCase()).includes(search.toLowerCase())
            || ((post.title).toLowerCase()).includes(search.toLowerCase()));

        setSearchResults(filteredResults.reverse());
    }, [posts, search])
return(
    <DataContext.Provider value ={{posts, setPosts, search, setSearch}}>
        {children}
    </DataContext.Provider>
)

}
 export default DataContext