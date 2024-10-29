function app2() {

    const list=["item1","item2","item2","item4"]
    let customcss='name';
    const islogin=false;
    const greeting=islogin ? <p>welcome</p> : <p>log in</p>;
    return(
        <div>
            <h1 className={customcss}>Mariselvam</h1>
            {greeting}
            
            <ul>
                {list.map((item,index)=> <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}

export default app2;