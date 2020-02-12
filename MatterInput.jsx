function MatterInput(props){
    //参照の取得
    //デフォルトがnull
    //参照したい要素にjsxでrefをセットする
    const textareaRef = React.useRef(null);
    const numberRef = React.useRef(null);

    const checkNum=(hoge)=>{
        let checkNum=isNaN(hoge);
        if(hoge>20||hoge<-20)checkNum=true;
        if(hoge=="")checkNum=true;
        return !checkNum;
    }

    const sendMatter = React.useCallback(()=>{
        //参照した先の現在値を渡す
        //addMatterとaddValはmainのpropsでもらっている
        if(checkNum(numberRef.current.value)){
            props.addMatter({
                id: new Date().getTime(),//idをユニークにしたい
                //number: 2,//ここに現在の配列番号を入れたい
                content:textareaRef.current.value,
                goodvalue:numberRef.current.value,

            });
            props.addVal(numberRef.current.value);
        }
    
    },[textareaRef.current,props.addMatter,numberRef]);
    

    //ここでrefをセット
    return(
        <div>
            <div>出来事</div>
            <div><textarea className="matter-textarea" ref={textareaRef} required></textarea></div>
            <div>良かった度</div>
            <div><input type="number" className="number-area" ref={numberRef} min="-20" max="20" required></input></div>
            <div onClick={sendMatter} className="send-matter">幸福決定</div>
        </div>
    );
}