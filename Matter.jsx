function Matter(props){
//if props.goodvalue<0 className="badmatter"
    let isgoo=true;
    
    const [visibled,setVisibled]=React.useState(true);
    //Matterのvisible変更用
    const eraseMatter = React.useCallback((visibled)=>setVisibled((prev)=>!prev),[setVisibled]);

    const erase=React.useCallback(()=>{
        eraseMatter();
        props.subVal(props.goodvalue);
    });

    const VisCheck=()=>{
        if(visibled){
            return(
                <div className={[isgoo ? 'good' :'bad','matter'].join('')}>
                <div className="content">内容：{props.content}</div>
                <div className="goodvalue">良かった度：{props.goodvalue}</div>
                <button onClick={erase}>削除</button>
            </div>
            )
        }else{
            return (
            <div></div>
            )
        }
    }
    

    if(props.goodvalue<0)isgoo=false;
    return(
        <VisCheck/>
    );
}
