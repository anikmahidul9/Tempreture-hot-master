const api_Keys = `3b6f14f5b1b4130b8d5c39fba0c05c0b`;

const searchTemp = async ()=>{
    const inputText = document.getElementById('input').value;
    document.getElementById('input').value=''
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${api_Keys}&units=metric`
    
    const res= await fetch(url);
    const data= await res.json();
    itemData(data)
    
}
const setInnerText =(id,text) =>{
    document.getElementById(id).innerText= text;
}


const itemData = (data) =>{
setInnerText('place',data.name);
setInnerText('degree',data.main.temp);
setInnerText('sky',data.weather[0].main);
const imgUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
const img = document.getElementById('photo');
img.setAttribute('src',imgUrl);
}