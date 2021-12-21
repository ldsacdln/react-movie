import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Catalogue from './catalogue/catalogue';
import MovieDetails from "./movieDetails/MovieDetails";
import SearchMovie from "./searchMovie/SearchMovie";

export default () => (
    <BrowserRouter>
        <Routes>   
            <Route path="/" element={<Catalogue/>} />
            <Route path="/movie/:id" element={<MovieDetails/>} />
            <Route path="/search/:title" element={<SearchMovie/>} />
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);