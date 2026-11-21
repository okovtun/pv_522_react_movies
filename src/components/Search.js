import './Search.css';
import React from 'react';

class Search extends React.Component
{
	state =
		{
			search: "",
			type:"all"
		}
	handleKey = (event) =>
	{
		if (event.key === 'Enter')
		{
			this.props.searchMovie(this.state.search);
		}
	}
	handlerFilter = (event) =>
	{
		//this.setState({ type: event.target.dataset.type });
		//this.props.searchMovie(this.state.search, this.state.type);
		this.setState
		(
			() => ({type: event.target.dataset.type}),
			() => ({search: this.props.searchMovie(this.state.search, this.state.type)})
		)
		/*this.setState
		(
			{
				type:	event.target.dataset.type,
				this.props.searchMovie(this.state.search, this.state.type)
			}
		)*/
		console.log(this.state);
	}
	render()
	{
		return (
			<div className="search">
				<input type='search'
					placeholder="Поиск"
					value={this.state.search}
					onChange={(e) => this.setState({ search: e.target.value })}
					onKeyDown={ this.handleKey }
				/>
				<button onClick={() => this.props.searchMovie(this.state.search)}>
					Поиск
				</button>
				<div className='radio'>
				<input	type='radio' name='category' data-type='all'	checked={this.state.type==='all'}		id="category-all"	onChange={this.handlerFilter} /><label for="">All</label>
				<input	type='radio' name='category' data-type='movie'	checked={this.state.type==='movie'}		id="category-movie" onChange={this.handlerFilter} /><label for="">Movie</label>
				<input	type='radio' name='category' data-type='series' checked={this.state.type==='series'}	id="category-series" onChange={this.handlerFilter} /><label for="">Series</label>
				<input	type='radio' name='category' data-type='game'	checked={this.state.type==='game'}		id="category-game"	onChange={this.handlerFilter} /><label for="">Game</label>
				</div>
			</div>
		)
	}
}
export default Search;