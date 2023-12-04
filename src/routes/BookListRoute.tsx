import { Route, Routes } from "react-router"
import BookListAsFC from "../pages/BookList";
import { BookAsFC } from "../pages/Book";
import NewBookAsFC from "../pages/NewBook"; 


const BookListRouteAsFC : React.FC =  () =>{

    return (
        <> 
<Routes> 
<Route  index element={<BookListAsFC />}></Route>

        <Route path=':id' element={<BookAsFC />} > </Route>
        <Route path='newbook' element={<NewBookAsFC />} ></Route>
</Routes>
</> )
}

export default BookListRouteAsFC;