let dosenImg = [
  "img/dosen/landing.png",
  "img/dosen/guideline.png",
  "img/dosen/dashboard.png",
  "img/dosen/appointment.png",
  "img/dosen/submission.png",
  "img/dosen/ongoing.png",
  "img/dosen/progress.png",
  "img/dosen/adddocument.png",
  "img/dosen/documents.png",
  "img/dosen/sidang.png",
  "img/dosen/wisuda.png",
  "img/dosen/publications.png",
  "img/dosen/setting.png"
];

let mhsImg = [
  "img/dosen/landing.png",
  "img/dosen/guideline.png",
  "img/mahasiswa/login.png",
  "img/mahasiswa/signup.png",
  "img/mahasiswa/contact.png",
  "img/mahasiswa/dashboard.png",
  "img/mahasiswa/appointment.png",
  "img/mahasiswa/addsubmission.png",
  "img/mahasiswa/submission.png",
  "img/mahasiswa/progress.png",
  "img/mahasiswa/addprogress.png",
  "img/mahasiswa/sidangform.png",
  "img/mahasiswa/sidangschedule.png",
  "img/mahasiswa/wisudaform.png",
  "img/mahasiswa/wisuda.png"
];
let linkMhs = document.querySelectorAll(".link-mhs");
let imgLink = document.querySelector(".img-link");
let link = document.querySelectorAll(".link");

mhsImg.map((item, index) => {
  linkMhs[index].addEventListener("click", () => {
    var image = imgLink;
    var downloadingImage = new Image();
    downloadingImage.onload = function() {
      image.src = this.src;
    };
    downloadingImage.src = item;
    // console.log("kskksk");
    //imgLink.src = item;
    for (let i = 0; i < linkMhs.length; i++) {
      if (i == index) {
        linkMhs[i].style.background = "#fff";
      } else {
        linkMhs[i].style.background = "none";
      }
    }
  });
});

dosenImg.map((item, index) => {
  link[index].addEventListener("click", () => {
    var image = imgLink;
    var downloadingImage = new Image();
    downloadingImage.onload = function() {
      image.src = this.src;
    };
    downloadingImage.src = item;
    //imgLink.src = item;
    for (let i = 0; i < link.length; i++) {
      if (i == index) {
        link[i].style.background = "#fff";
      } else {
        link[i].style.background = "none";
      }
    }
  });
});

let dosen = document.querySelector(".dosen");
let mahasiswa = document.querySelector(".mahasiswa");
let pgMahasiswa = document.querySelector("#page-mahasiswa");
let pgDosen = document.querySelector("#page-dosen");

dosen.addEventListener("click", () => {
  dosen.style.background = "green";
  dosen.style.color = "#fff";
  mahasiswa.style.background = "#fff";
  mahasiswa.style.color = "#000";
  pgMahasiswa.style.display = "none";
  pgDosen.style.display = "block";
});

mahasiswa.addEventListener("click", () => {
  dosen.style.background = "#fff";
  dosen.style.color = "#000";
  mahasiswa.style.background = "green";
  mahasiswa.style.color = "#fff";
  pgMahasiswa.style.display = "block";
  pgDosen.style.display = "none";
});
