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
			this.props.searchMovie(this.state.search, this.state.type);
		}
	}
	handlerFilter = (event) =>
	{
		//this.setState({ type: event.target.dataset.type });
		//this.props.searchMovie(this.state.search, this.state.type);
		this.setState
		(
			() => ({type: event.target.dataset.type}),
			() => this.props.searchMovie(this.state.search, this.state.type)
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
			<div>
				<div className="search">
					<input type='search'
						placeholder="Поиск"
						value={this.state.search}
						onChange={(e) => this.setState({ search: e.target.value })}
						onKeyDown={ this.handleKey }
					/>
					<button onClick={() => this.props.searchMovie(this.state.search, this.state.type)}>
						Поиск
					</button>
				</div>
				<div className='radio'>
					<label><input	type='radio' name='category' data-type='all'	checked={this.state.type==='all'}		onChange={this.handlerFilter} /> All</label>
					<label><input	type='radio' name='category' data-type='movie'	checked={this.state.type==='movie'}		onChange={this.handlerFilter} /> Movie</label>
					<label><input	type='radio' name='category' data-type='series' checked={this.state.type==='series'}	onChange={this.handlerFilter} /> Series</label>
					<label><input	type='radio' name='category' data-type='game'	checked={this.state.type==='game'}		onChange={this.handlerFilter} /> Game</label>
				</div>
			</div>
		)
	}
}
export default Search;