if(window.openDatabase){
  var mydb = openDatabase("akademik", '1.0', "WebSQL Database", 2 * 1024 * 1024);
  mydb.transaction(function(tx){
		tx.executeSql("create table if not exists user (username varchar(25) primary key, password varchar(25))");
		tx.executeSql("insert into user values ('admin', 'admin')");
  });
}else{
  alert("Browser tidak mendukung WebSQL");
}

function login(){
	var username = document.getElementById("username").value;
  mydb.transaction(function(tx){
		tx.executeSql("select * from user where username = ?", [username], validasi);            
  });
}

function validasi(transaction, results){
  var pass = document.getElementById("password").value;
  if(results.rows.length == 0){
    alert("Username salah");
    reset();
  }else{
    var row = results.rows.item(0);
		if(row.password == pass){            
      window.location.href = 'menu.html';
			reset();
    }else{
      alert("Password salah");
      reset();    
    }
	}
}	

function reset(){
	document.getElementById("username").value = "";
	document.getElementById("password").value = "";
}



