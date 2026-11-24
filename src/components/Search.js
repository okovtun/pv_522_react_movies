import './Search.css';
import React from 'react';

class Search extends React.Component
{
	state =
		{
			search: "",
			type:"all",
			page:1
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
		this.setState
		(
			() => ({type: event.target.dataset.type}),
			() => this.props.searchMovie(this.state.search, this.state.type)
		)
	}
	prevPage = () =>
	{
		this.setState
		(
			() => (this.state.page > 1 ? { page: this.state.page - 1 } : { page: 1 }),
			() => this.props.searchMovie(this.state.search, this.state.type, this.state.page)
		)
	}
	nextPage = () =>
	{
		this.setState
		(
			() => ({ page: this.state.page + 1 }),
			() => this.props.searchMovie(this.state.search, this.state.type, this.state.page)
		)
	}
	setPage = (num) =>
	{
		this.setState
			(
				() => ({ page: num }),
				() => this.props.searchMovie(this.state.search, this.state.type, this.state.page)
			);
	}
	render()
	{
		let itemsPerPage = 10;
		let totalPages = this.props.totalItems / itemsPerPage;
		const lastIndex  = totalPages <= 10 ? totalPages + 1 : this.state.page + itemsPerPage;
		const firstIndex = totalPages <= 10 ? lastIndex - itemsPerPage + lastIndex + 1 : lastIndex - itemsPerPage;
		let num = [];
		for (let i = 0; i < totalPages; i++)
		{
			num.push(i);
		}
		return (
			<div>
				<div className="search">
					<input type='search'
						placeholder="Поиск"
						value={this.state.search}
						onChange={(e) => this.setState({ search: e.target.value })}
						onKeyDown={ this.handleKey }
					/>
					<button onClick={() => this.props.searchMovie(this.state.search, this.state.type)} className="btn">
						Поиск
					</button>
				</div>
				<div className='radio'>
					<label><input	type='radio' name='category' data-type='all'	checked={this.state.type==='all'}		onChange={this.handlerFilter} /> All</label>
					<label><input	type='radio' name='category' data-type='movie'	checked={this.state.type==='movie'}		onChange={this.handlerFilter} /> Movie</label>
					<label><input	type='radio' name='category' data-type='series' checked={this.state.type==='series'}	onChange={this.handlerFilter} /> Series</label>
					<label><input	type='radio' name='category' data-type='game'	checked={this.state.type==='game'}		onChange={this.handlerFilter} /> Game</label>
				</div>
				<div className="pagination">
					<button className="btn" onClick={this.prevPage}>Prev</button>
					<div className="page-numbers">
						{
							num.slice(firstIndex, lastIndex).map
								(
									(element, index) =>
									(
										<button className="btn"
												onClick={ () => this.setPage(element) }
									>
										{ element }
									</button>
								)
							)
						}
					</div>
					<button className="btn" onClick={ this.nextPage }>Next</button>
				</div>
			</div>
		)
	}
}
export default Search;