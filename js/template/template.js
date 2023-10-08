export let TitleTemplate = `                  
<h2 class="has-text-white has-mw-xl title is-size-2">#title#</h2>
</br>
`
export let JSONlink = 'https://raw.githubusercontent.com/HRMonitorr/Proposal-Project3/main/json/latarproposal.json'
export let JSONTeams = 'https://raw.githubusercontent.com/HRMonitorr/Proposal-Project3/main/json/teams.json'

export let CardTujuan = `<div class="has-background-white p-8" style="border-radius: 4px;">
<div class="is-relative is-inline-block mb-8">
  <img src="acros-assets/icons/how-it-works/change-green.svg" alt="">
  <span class="is-block has-text-weight-semibold has-text-white is-absolute has-background-grey-darker" style="right: -0.7rem; bottom: 0; font-size: 10px; width:24px; height:24px; border-radius: 50%;">
    <span class="is-absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%)">1</span>
  </span>
</div>
<h5 class="mb-4 title is-size-5 has-text-weight-medium pr-8-widescreen">Tujuan dari Project ini adalah:</h5>
<p class="has-text-grey-darker pr-10-widescreen">#tujuan#</p>
</div>`

export let LatarBelakang = `                
<p class="mb-10 subtitle has-text-white has-mw-lg mx-auto" style="text-align: justify;">#latarbelakang#</p>
`
export let CardTemplate = `
<img id="#gambar#" src="" alt="#gambar#" class="w-48 h-48 rounded-full" onclick="zoomIn()">
</div>
<br><br>
<div class="mt-2">
<div><b>Name:</b>
    <div>#nama#</div>
</div>
<br>
<div><b>Class:</b>
    <div>#kelas#</div>
</div>
<br>
<div><b>NPM:</b>
    <div>#npm#</div>
</div>
</div>
<br><br><br>
<div class="social-icons">
<a href="#" class="icon"><i class="fa fa-facebook"></i></a>
<a href="#" class="icon"><i class="fa fa-twitter"></i></a>
<a href="#" class="icon"><i class="fa fa-linkedin"></i></a>
<a href="#" class="icon"><i class="fa fa-instagram"></i></a>
</div>
`
