let enterfood=async(url)=>{
    try{
    const res=await fetch(url);
    const data=await res.json();
    console.log(res);
    return data;
    }
    catch(err){
        // console.log("err:",err);
    }
};

let append=(data)=>{
    data.meals.forEach(({strMeal,strMealThumb}) => {
        document.querySelector("#container").innerHTML=null;
        let box = document.createElement("div");
        let img = document.createElement("img");
        img.src = strMealThumb;
        let name = document.createElement("h2");
        name.innerText=strMeal;
        box.append(img,name);
        document.querySelector("#container").append(box);


    });
}
export {enterfood,append};

