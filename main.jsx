function App(){

    const [matters,setMatters]=React.useState([
        {
            id:0,
            content:'朝起きれた',
            goodvalue:5
        },
        {
            id:1,
            content:'これを起動した',
            goodvalue:5
        },
        {
            id:2,
            content:'夜寝る',
            goodvalue:3
        },
        {
            id:3,
            content:'眠い',
            goodvalue:-3
        }
    ]);

    const [GoodVal,setVal] =React.useState(10)//デフォが0

    //usecallbackを用いたaddMatter関数の定義。setmattersにて今までのmatterにプラスでやれる
    const addMatter = React.useCallback((matter)=>setMatters((prev)=>[...prev,matter]),[setMatters]);
    const eraseMatter = React.useCallback((val)=>setMatters((prev)=>[...prev.slice(0,val),...prev.slice(val+1)]),[setMatters]);

    //計算の関数の定義。これをaddvalとしてMatterInputに渡している。
    const addVal = React.useCallback((GoodVal)=>setVal((prev)=>parseInt(prev)+parseInt(GoodVal)),[setVal]);

    //削除したとき、選択したものがあるかいなか


    const erase =(val)=>{
        eraseMatter(val);
    }

    //return部分多分完成
    return(
        <div>
            <div>今日の幸福度:{GoodVal}</div>
            <GBlist matters ={matters} eraseMatter={erase}/>
            <MatterInput addMatter ={addMatter} addVal={addVal} matters={matters} />
        </div>
    );
}

//render部分
const target =document.querySelector('#app');
ReactDOM.render(<App/>,target);