import Star from "../assets/star.svg";

function Rating({ value }) {
    const stars = new Array(value).fill(Star);
    return (
        <div className="flex space-x-1">
            {stars.map((star, index) => (
                <img key={index} src={star} width="14" />
            ))}
        </div>
    );
}

export default Rating;
