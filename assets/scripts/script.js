const refs = document.querySelectorAll(".ref");
for (let ref of refs) {
  ref.addEventListener('click', function(event) {
    var conf = confirm("Apakah kamu yakin ingin meninggalkan halaman ini?");
    if (!conf) {
      event.preventDefault();
    }
  })
}
