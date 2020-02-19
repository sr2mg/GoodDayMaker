function GBlist(props){

	//main→GBlist→matter
	const MatterList = props.matters.map((mt)=>(
		<Matter
			key={mt.id}
			id={mt.id}
			goodvalue={mt.goodvalue}
			content={mt.content}
			eraseMatter={props.eraseMatter}
		/>

	));

	return( 
	<div>
		<div className="GBlist">{MatterList}</div>
	</div>
	);
}