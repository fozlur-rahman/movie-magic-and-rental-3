import { useContext, useState } from "react";
import { MovieContext } from "../context";
import { getImgUrl } from "../utils/utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

function MovieCard({ movie }) {
    const [isModalOpen, setIsmodalOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const { cartData, setCartData } = useContext(MovieContext);

    const handelModalClose = () => {
        setIsmodalOpen(false);
        setSelectedMovie(null);
    };
    const handleSelectedMovie = (movie) => {
        setIsmodalOpen(true);
        setSelectedMovie(movie);
    };

    const handleAddToCart = (e, movie) => {
        e.stopPropagation();
        const found = cartData.find((m) => m.id === movie.id);
        if (!found) {
            setCartData([...cartData, movie]);
        } else {
            console.log(
                `the movie ${movie.title} is has been already added on cart`
            );
        }
    };
    return (
        <>
            {isModalOpen && (
                <MovieDetailsModal
                    onClose={handelModalClose}
                    selectedMovie={selectedMovie}
                    onAddCart={handleAddToCart}
                    
                />
            )}
            <a href="#" onClick={() => handleSelectedMovie(movie)}>
                <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                    <img
                        className="w-full object-cover h-72 "
                        src={getImgUrl(movie.cover)}
                        alt=""
                    />
                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1">{movie.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">
                            {movie.genre}
                        </p>
                        <div className="flex items-center space-x-1 mb-5">
                            <Rating value={5}></Rating>
                        </div>
                        <a
                            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                            href="#"
                            onClick={(e) => handleAddToCart(e, movie)}
                        >
                            <img src="./assets/tag.svg" alt="" />
                            <span>$100 | Add to Cart</span>
                        </a>
                    </figcaption>
                </figure>
            </a>
        </>
    );
}

export default MovieCard;
