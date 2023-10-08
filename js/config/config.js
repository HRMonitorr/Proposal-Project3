import { addInner } from "https://jscroot.github.io/element/croot.js";
import { LatarBelakang, TitleTemplate, paragrafbutir } from "../template/template.js";

export function IsiTitle(value){
    let content=TitleTemplate.replace("#title#",value.title);
    // console.log(content);
    addInner("title", content);
}

export function isiTujuan(value){
        value.tujuan.butir.forEach(element => {
           let content = paragrafbutir.replace("#tujuan#",element);
            console.log(element);
            addInner("butir", content);           
        });
}

export function isiLatarBelakang(value){
    let content=LatarBelakang.replace("#latarbelakang#",value.introduction);
    // console.log(content);
    addInner("latarbelakang", content);
}

export function TujuanAbout(value){
    value.tujuan.butir.forEach(element => {
        let content = LatarBelakang.replace("#latarbelakang#",element);
        // console.log(element);
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