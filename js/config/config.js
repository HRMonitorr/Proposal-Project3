import {setInner,addInner } from "https://jscroot.github.io/element/croot.js";
import { CardTemplate, CardTujuan, LatarBelakang, TitleTemplate } from "../template/template.js";

export function IsiTitle(value){
    let content=TitleTemplate.replace("#title#",value.title);
    // console.log(content);
    addInner("title", content);
}

export function isiTujuan(value){
    value.tujuan.forEach(element => {
        let content = CardTujuan.replace("#tujuan#",element);
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
    value.tujuan.forEach(element => {
        let content = LatarBelakang.replace("#latarbelakang#",element);
        console.log(element);
        addInner("tujuan", content);
    });
}
export function ImgTeams(value){
    let content=CardTemplate.replace("#imgUrl#",value.imgurl);
    console.log(content);
    addInner("card-container", content);
}

export function NamaTeams(value){
    let content=CardTemplate.replace("#nama#",value.nama);
    console.log(content);
    addInner("card-container", content);
}

export function NpmTeams(value){
    let content=CardTemplate.replace("#npm#",value.npm);
    console.log(content);
    addInner("card-container", content);
}
export function KelasTeams(value){
    let content=CardTemplate.replace("#kelas#",value.kelas);
    console.log(content);
    addInner("card-container", content);
}




export function responseData(result){
    IsiTitle(result);
    isiTujuan(result);
}

export function responseLatarbelakang(result){
    isiLatarBelakang(result);
    TujuanAbout(result)
}

export function responseTeam(result){
  ImgTeams(result);
  NamaTeams(result);
  NpmTeams(result);
  KelasTeams(result);
}