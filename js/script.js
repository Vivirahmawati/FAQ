// =====================================================
// MENAMPILKAN FAQ
// =====================================================


function tampilkanFAQ(data){

const container =
document.getElementById("faqContainer");

container.innerHTML = "";

if(data.length === 0){


container.innerHTML = `

<p class="empty">

FAQ tidak ditemukan

</p>

`;

return;

}

data.forEach(function(item){
container.innerHTML += `

<div class="faq-item">

<button class="question" type="button" aria-expanded="false">

${item.pertanyaan}

<span aria-hidden="true">
+
</span>

</button>


<div class="answer">

<p>
${item.jawaban}
</p>
<div class="faq-regulation">

<i class="fa-solid fa-scale-balanced"></i>

<strong>Dasar Aturan:</strong>

<br>

${item.dasar || "Tidak terdapat dasar aturan"}

</div>

</div>

</div>

`;

});

aktifkanAccordion();

}

// =====================================================
// KLIK KATEGORI MANAGEMEN ASN
// =====================================================

function showCategory(kategori){

document.getElementById("faqTitle").innerHTML =

"FAQ " + kategori;

const hasil = faqData.filter(function(item){

return item.kategori === kategori;

});

tampilkanFAQ(hasil);

}

// =====================================================
// SEARCH FAQ
// =====================================================

const searchInput =

document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("input",function(){

let keyword =

this.value.toLowerCase().trim();

if(keyword === ""){

document.getElementById("faqTitle").innerHTML =

"Pertanyaan Umum";

tampilkanFAQ(faqData);

return;

}

let hasil = faqData.filter(function(item){

let dataFAQ =
(

item.kategori

+

" "

+

item.pertanyaan

+

" "

+

item.jawaban

)

.toLowerCase();

return dataFAQ.includes(keyword);

});

document.getElementById("faqTitle").innerHTML =

"Hasil Pencarian : " + keyword;

tampilkanFAQ(hasil);

});

}

// =====================================================
// ACCORDION FAQ
// =====================================================


function aktifkanAccordion(){

const questions =

document.querySelectorAll(".question");

questions.forEach(function(q){

q.onclick=function(){

const answer =

this.nextElementSibling;

const icon =

this.querySelector("span");

if(answer.style.display === "block"){

answer.style.display = "none";

this.setAttribute("aria-expanded","false");

icon.innerHTML = "+";

}

else{

answer.style.display = "block";

this.setAttribute("aria-expanded","true");

icon.innerHTML = "-";

}

};

});

}
// =====================================================
// LOAD AWAL
// =====================================================
window.onload = function(){

tampilkanFAQ(faqData);

};
