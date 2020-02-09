function Matter(props){
//if props.goodvalue<0 className="badmatter"
    let isgoo=true;

    const erase=React.useCallback(()=>{
        props.eraseMatter(props.id);//今現在では効果ない…
        console.log(`${props.id}:isDeleted`);
    });

    if(props.goodvalue<0)isgoo=false;
    return(
        <div className={[isgoo ? 'good' :'bad','matter'].join('')}>
            <div className="content">内容：{props.content}</div>
            <div className="goodvalue">良かった度：{props.goodvalue}</div>
        </div>
    );
}
