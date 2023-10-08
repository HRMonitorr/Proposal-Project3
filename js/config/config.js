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
export function Data1Loop(value){
        let content=CardTemplate.replace("#imgUrl#",value.imgurl).replace("#nama#",value.nama).replace("#npm#",value.npm).replace("#kelas#",value.kelas);
        console.log(value);
        addInner("cardnya", content);

}

export function Data2Loop(value){
    let content=CardTemplate.replace("#imgUrl#",value.imgurl).replace("#nama#",value.nama).replace("#npm#",value.npm).replace("#kelas#",value.kelas);
    console.log(value);
    addInner("cardnya", content);
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
  Data1Loop(result);
}

export function ResponseRofi(result){
    Data2Loop(result);
}