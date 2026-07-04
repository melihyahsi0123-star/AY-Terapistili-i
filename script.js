// Formun gönderilme anını yakalıyoruz
document.getElementById("iletisim-formu").addEventListener("submit", function(olay) {
  
    olay.preventDefault();
    
    alert("Mesajınız ablama başarıyla gönderildi! En kısa sürede dönüş yapacaktır.");
    
    
    this.reset();
});