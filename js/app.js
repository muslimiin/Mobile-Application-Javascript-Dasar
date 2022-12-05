function load(){
  $.ajax({
    url: 'http://localhost/api/batik/index_get',
    type: 'GET',
               
    success: function(data) {                  
      var list_holder=document.getElementById("list_data");
			list_holder.innerHTML="";

			var i;
			for(i=0; i<data.length;i++){
				list_holder.innerHTML+="<ons-list-item><div class='center'><label>"+ data[i].nama +"&emsp;&emsp;&emsp;&emsp;"+ data[i].jumlah+ "&emsp;&emsp;&emsp;&emsp;"+ data[i].size+ "</label></div><div class='right'><a onclick='edit_data(\""+data[i].id+"\",\""+data[i].nama+"\",\""+data[i].tglmasuk+"\",\""+data[i].jenis+"\",\""+data[i].jumlah+"\",\""+data[i].size+"\");'><ons-icon icon='fa-edit'></ons-icon></a>&emsp;<a onclick='hapus_data(\""+data[i].id+"\");'><ons-icon icon='fa-trash'></ons-icon></a></div></ons-list-item>";    
			}
		}
	});
}

function tambah_data(){
  var id = document.getElementById('id').value;
  var nama = document.getElementById('nama').value;
	var tglmasuk = document.getElementById('tglmasuk').value;
  var jenis = document.getElementById('jenis').value;
  var jumlah = document.getElementById('jumlah').value;
  var size;
  if(document.getElementById('s').checked){
    size = 'Small';
  }else if(document.getElementById('m').checked){
    size = 'Medium';
  }else if(document.getElementById('l').checked){
    size = 'Large';
  }else if(document.getElementById('xl').checked){
    size = 'Extra Large';
  }
  var data_input = {"id": id, "nama": nama, "tglmasuk": tglmasuk, "jenis": jenis, "jumlah": jumlah, "size": size};

  $.ajax({
		type: 'POST',
      url: 'http://localhost/api/batik/index_post',
      data: data_input,                                          
  });
  alert("Data berhasil ditambahkan");
  window.location.reload();
}

function edit_data(id, nama, tglmasuk, jenis, jumlah, size){
  document.getElementById("id").value=id;
  document.getElementById("nama").value=nama;
  document.getElementById("tglmasuk").value=tglmasuk;
  if(jenis == "Batik Pria"){
    document.getElementById("jenis").selectedindex = 1;
  }else if(jenis == "Batik Wanita"){
    document.getElementById("jenis").selectedindex = 2;
  }else if(jenis == "Batik Anak-Anak"){
    document.getElementById("jenis").selectedindex = 3;
  }
  document.getElementById("jumlah").value=jumlah;
  if(size == "Small"){
    document.getElementById("s").checked = true;
  }else if(size == "Medium"){
    document.getElementById("m").checked = true;
  }else if(size == "Large"){
    document.getElementById("l").checked = true;
  }else if(size == "Extra Large"){
    document.getElementById("xl").checked = true;
  }

  document.getElementById("simpan").innerHTML="<ons-button style=\"background-color: orange\" onclick='ubah_data();'>Update</a>";
}

function ubah_data(){
  var id = document.getElementById('id').value;
  var nama = document.getElementById('nama').value;
  var tglmasuk = document.getElementById('tglmasuk').value;
  var jenis = document.getElementById('jenis').value;
  var jumlah = document.getElementById('jumlah').value;
  var size;
  if(document.getElementById('s').checked){
    size = 'Small';
  }else if(document.getElementById('m').checked){
    size = 'Medium';
  }else if(document.getElementById('l').checked){
    size = 'Large';
  }else if(document.getElementById('xl').checked){
    size = 'Extra Large';
  }
  var data_ubah = {"id": id, "nama": nama, "tglmasuk": tglmasuk, "jenis": jenis, "jumlah": jumlah, "size": size};

  $.ajax({
    type: 'PUT',
    url: 'http://localhost/api/batik/index_put',
    data: data_ubah,             
  });
  alert("Data berhasil diubah");
  window.location.reload();
}

function hapus_data(id){
    var data_delete = {"id": id};

    $.ajax({
        type: 'DELETE',
        url: 'http://localhost/api/batik/index_delete',
        data: data_delete
                               
    });
    alert("Data berhasil dihapus");
    window.location.reload();
}