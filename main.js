function tinhDiemTrungBinh() {
    var toan = parseFloat(document.getElementById("toan").value);
    var dia = parseFloat(document.getElementById("dia").value);
    var lichSu = parseFloat(document.getElementById("lich-su").value);
    var ly = parseFloat(document.getElementById("ly").value);
    var van = parseFloat(document.getElementById("van").value);
    var hoa = parseFloat(document.getElementById("hoa").value);
    var anh = parseFloat(document.getElementById("anh").value);
    var gdcd = parseFloat(document.getElementById("gdcd").value);
    var gdqp = parseFloat(document.getElementById("gdqp").value);
    var tin = parseFloat(document.getElementById("tin").value);
    var sinh = parseFloat(document.getElementById("sinh").value);
    var congNghe = parseFloat(document.getElementById("cong-nghe").value);
    var diemTrungBinh = (toan + ly + hoa + anh + sinh + gdcd + congNghe + gdqp + tin + dia + lichSu + van) / 12;
    
    document.getElementById("diem-trung-binh").innerHTML = diemTrungBinh.toFixed(2);
    if (diemTrungBinh >= 8) {
        alert("Chúc mừng bạn!Điểm Trung Bình trên 8")
    } else if (diemTrungBinh >= 7.9 & diemTrungBinh <= 8) {
        alert("Tiếc quá bạn chỉ thiếu 0.1 thui! Cố gắng nha")
    } else if (diemTrungBinh <= 7) {
        alert("Điểm trung bình bạn hơi thấp, cố gắng hơn nha")
    };
};

