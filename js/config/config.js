import {setInner,addInner } from "https://jscroot.github.io/element/croot.js";
import { CardTujuan, LatarBelakang, TitleTemplate } from "../template/template.js";

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
export function responseData(result){
    IsiTitle(result);
    isiTujuan(result);
}

export function responseLatarbelakang(result){
    isiLatarBelakang(result);
    TujuanAbout(result)
}