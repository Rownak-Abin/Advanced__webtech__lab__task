const express 	= require('express');
const userModel = require.main.require('./models/userModel');
var url = require('url');
const router 	= express.Router();
var path = require('path');
const fileUpload 		= require('express-fileupload');
const _ = require('lodash');

router.get('*',  (req, res, next)=>{
	
		next();
	
});

router.get('/create', (req, res)=>{
	if(req.session.uname != ""){

	res.render('user/create');}
	else{
		res.redirect('/login');
	}
});


router.post('/create', (req, res)=>{

	if(req.session.uname != ""){



		var image = req.files.pict;
		console.log(image);

		const tpath = path.dirname(require.main.filename) + "/public/" + image.name;
		console.log(tpath);


		
		image.mv(tpath, function(err){

			if(err){ res.send("something wrong;");}
			else{

				console.log("success picture");

			}


		});


	

		/*const tpath = path.dirname(require.main.filename) + "/public/";

		 _.forEach(_.keysIn(req.files.pict), (key) => {
                let photo = req.files.pict[key];

                const totdir= tpath + photo.name;

                console.log(totdir);

                photo.mv(totdir, function(err){

                	if(err){res.send("wrong");}
                	else{
                		console.log("write here db");
                	}
                });

                

             });*/

	var newUser = {
		eName : req.body.eName,
		cName : req.body.cName,
		cNo : req.body.cNo,
		uname: req.body.username,
		password: req.body.password,
		picture: tpath,
		type: req.body.type
	};

	

	userModel.insert(newUser, function(status){
				
		if(status){
			
			res.redirect('/home');
		}else{
			res.redirect('/login');
		}

	})

}
	else{
			res.redirect('/login');
		}


});


/*router.post('/create', (req, res)=>{

	


		


	

});*/

router.get('/edit/:id', (req, res)=>{

	if(req.session.uname != ""){

		var i = req.params.id;
		
		userModel.getById(i, function(results){
			console.log(i);
			res.render('user/edit', {users: results});
			
		})

	}

	else{
			res.redirect('/login');
		}


		
});

router.post('/edit/:id', (req, res)=>{

	if(req.session.uname != ""){

	var i = req.params.id;

	var editUser = {
		eName : req.body.eName,
		cName : req.body.cName,
		cNo : req.body.cNo,
		uname: req.body.username,
		password: req.body.password,
		type: req.body.type
	};

	console.log(editUser.eName);

	userModel.update(i, editUser, function(status){
				
		if(status){
			
			res.redirect('/home');
		}else{
			res.redirect('/login');
		}

	})
	
}
	else{
			res.redirect('/login');
		}


}

);

router.get('/delete/:id', (req, res)=>{
	
	
	
			
			res.render('user/delete' );
			
		

	//console.log(editUser.eName);

	


});

router.post('/delete/:id', (req, res)=>{

	var i = req.params.id;

	userModel.delete(i, function(status){

		if(status){
			
			res.redirect('/home');
		}else{
			res.redirect('/login');
		}

	})
	});






module.exports = router;

/*
	var f = function () {}
    var sql= "select * from table";
	getResult(sql,function(results){
			
			console.log(results);
			
	});
	\


	void func(int x,int y)
	{
	 z=x+y
	}

	int main()
	{
		int x,y;
		z=x+y;
		
	}

	function f1(x,y)
	{
	
	}

	f1(10,20);


*/