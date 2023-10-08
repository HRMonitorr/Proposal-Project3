import {setInner,addInner } from "https://jscroot.github.io/element/croot.js";
import { CardTemplate, CardTujuan, LatarBelakang, TitleTemplate, teknologiyangdigunakan } from "../template/template.js";

export function IsiTitle(value){
    let content=TitleTemplate.replace("#title#",value.title);
    // console.log(content);
    addInner("title", content);
}

export function isiTujuan(value){
    value.tujuan.butir.forEach(element => {
        let content = CardTujuan.replace("#tujuan#",element).replace("counter", GetRandomCounter());
        // console.log(value.tujuan);
        addInner("cardtujuan", content);
    });

}

export function isiLatarBelakang(value){
    let content=LatarBelakang.replace("#latarbelakang#",value.introduction);
    console.log(content);
    addInner("latarbelakang", content);
}

export function TujuanAbout(value){
    value.tujuan.butir.forEach(element => {
        let content = LatarBelakang.replace("#latarbelakang#",element);
        console.log(element);
        addInner("tujuan", content);
    });
}

export function Teknologiisi(value){
    const maxLoopCount = 3; 
    let loopCount = 0; 
    let currentIteration = 1; 
  
    value.teori.title.forEach(element => {
      if (loopCount < maxLoopCount) { 
        let content = teknologiyangdigunakan.replace("#image#", GetRandomImage()).replace("#tekno#", element);
        console.log(element);
        addInner("teknologi", content);
    
        loopCount++;
      } else if (currentIteration >= 4) {
        let content = teknologiyangdigunakan.replace("#image#", GetRandomImage()).replace("#tekno#", element);
        console.log(element);
        addInner("teknologianother", content);
      }
  
      currentIteration++; 
    });
}
export function Data1Loop(value){
        let content=CardTemplate.replace("#imgUrl#",value.imgurl).replace("#nama#",value.nama).replace("#npm#",value.npm).replace("#kelas#",value.kelas);
        console.log(value);
        // console.log(GetRandomImage)
        addInner("cardnya1", content);

}

export function Data2Loop(value){
    let content=CardTemplate.replace("#imgUrl#",value.imgurl).replace("#nama#",value.nama).replace("#npm#",value.npm).replace("#kelas#",value.kelas);
    console.log(value);
    addInner("cardnya2", content);
}

export function GetRandomImage() {
    let image = [
        "acros-assets/icons/features/auth.svg",
        "acros-assets/icons/features/users.svg",
        "acros-assets/icons/features/exchange.svg",
        "acros-assets/icons/features/auth.svg",
        "acros-assets/icons/features/users.svg",
        "acros-assets/icons/features/exchange.svg"
    ]
    return image[Math.floor(Math.random() * image.length)];
  }


let currentIndex = 0;
export function GetRandomCounter(){
    let counter = [
        "Pertama",
        "Kedua", 
        
    ]
    const currentCounter = counter[currentIndex];
  
    currentIndex = (currentIndex + 1) % counter.length;
  
    return currentCounter;
}

export function responseData(result){
    IsiTitle(result);
    isiTujuan(result);
    Teknologiisi(result)
}

export function responseLatarbelakang(result){
    isiLatarBelakang(result);
    TujuanAbout(result)
}

export function responseTeam(result){
  Data1Loop(result);
}

export function ResponseRofi(result){
    Data2Loop(result);
}