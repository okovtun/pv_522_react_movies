import './Movie.css';

function Movie(props)
{
	return (
		<div className="card">
			<img src={ props.Poster } />
			<h3>{props.Title} ({props.Year})</h3>
			<div className="type">{props.Type}</div>
		</div>
	)
}
export default Movie;