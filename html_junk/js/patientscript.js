//Initialize web3
//var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

// if(typeof web3 !== 'undefined') {
// 	web3 = new Web3(new Web3.currentProvider);
// } else {
//   // If no injected web3 instance is detected, fallback to the TestRPC.
// 	web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
// }
// $("header div, .mainbody *").hide();
// $("header div, .mainbody *").fadeIn(900);
var patientAddress = getUrlParameter('address');
var data = "address=" + patientAddress;
var healthprovider, providertimestamp;

getPatientInviteInfoMySQL();

function getPatientInviteInfoMySQL(){ //read about JS Asynchronous nature
	$.post("php/getPatientInviteInfo.php", data, function(data){ 
		console.log(data);
		data = data.split("|");
		healthprovider = data[0];
		providertimestamp = data[1];
		console.log(data);
		console.log(healthprovider);
		console.log(providertimestamp);
		//Populate fields with Patient Invite Info
		$(".providerText").text(healthprovider);
		$(".providerInviteTime").text(providertimestamp);
	});
};
// var ethAmount = web3.eth.getBalance("0xbf2d51d1ab732f130362891e61a084e3ddba6a45");
// $(".nameInput").value(ethAmount);


$(".startForm").submit(function(e){  //
	//$("header div, .mainbody *").fadeOut();
	e.preventDefault(); //submit()/onsubmit() runs before action attr is run, I think, so in order for this form to work the way we want it to, let's disable this
	console.log("CLICKED: " + patientAddress);
	var link = "./patient2.html";
	location.href = link + '?address=' + patientAddress;
});

/*Borrowed from https://davidwalsh.name/query-string-javascript; Using over URLSearchParams to support all browsers!*/
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
