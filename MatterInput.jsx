function MatterInput(props){
    //参照の取得
    //デフォルトがnull
    //参照したい要素にjsxでrefをセットする
    const textareaRef = React.useRef(null);
    const numberRef = React.useRef(null);

    const sendMatter = React.useCallback(()=>{
        //参照した先の現在値を渡す
        //addMatterとaddValはmainのpropsでもらっている
        if(textareaRef.current&&numberRef){
            props.addMatter({
                id: new Date().getTime(),//idをユニークにしたい
                //number: 2,//ここに現在の配列番号を入れたい
                content:textareaRef.current.value,
                goodvalue:numberRef.current.value
            });
            props.addVal(numberRef.current.value);
        }
    },[textareaRef.current,props.addMatter,numberRef]);

    //ここでrefをセット
    return(
        <div>
            <div><textarea className="matter-textarea" ref={textareaRef}></textarea></div>
            <div><input type="text" className="number-area" ref={numberRef}></input></div>
            <div><button onClick={sendMatter} className="send-matter">決定</button></div>
        </div>
    );
}