const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();


router.get('*',  (req, res, next)=>{
	
		next();
	
});

router.get('/addjob', (req, res)=>{

	if(req.session.uname != ""){
	res.render('job/add');
	}

	else{
	res.redirect('/login');
	}

});

router.post('/addjob', (req, res)=>{
	
	if(req.session.uname != ""){

	var newUser = {
		cName : req.body.cName,
		title : req.body.title,
		location: req.body.loc,
		salary: req.body.sal
		
	};

	userModel.insertjob(newUser, function(status){
			
		
			res.redirect('/employee');
		

	})

	}

	else{
			res.redirect('/login');
		}

});


router.get('/joblist', (req, res)=>{

	if(req.session.uname != ""){

	userModel.getAlljob(function(results){
		
		res.render('home/joblist', {users: results});

	});
}

		else{
			res.redirect('/login');
		}

});



router.get('/editjob/:id', (req, res)=>{

	if(req.session.uname != ""){

		var i = req.params.id;
		
		userModel.getJobById(i, function(results){
			console.log(i);
			res.render('job/updatejob', {users: results});
			
		})

		}

		else{
			res.redirect('/login');
		}

});


	router.post('/editjob/:id', (req, res)=>{

		if(req.session.uname != ""){

	var i = req.params.id;

	var editjob = {
		cName : req.body.cName,
		title : req.body.title,
		location : req.body.loc,
		salary: req.body.sal

	};

	

	userModel.updateJob(i, editjob, function(status){


				
		if(status == null){
			
			res.redirect('/employee');
		}else{
			res.redirect('/login');
		}

	})

	}

	else{
			res.redirect('/login');
		}

});

	router.get('/deletejob/:id', (req, res)=>{
	
	
	if(req.session.uname != ""){
			
			res.render('user/delete' );
			
		}

		else{
			res.redirect('/login');
		}


	//console.log(editUser.eName);

	


});

router.post('/deletejob/:id', (req, res)=>{

	if(req.session.uname != ""){

	var i = req.params.id;

	userModel.deleteJob(i, function(status){

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


	router.get('/logout', (req, res)=>{

		

	req.session.uname = "";

	
	if(req.session.uname == null){

		console.log("ok");
	}
	else{
		console.log("wrong");

	}

	
	res.redirect('/login');

}
);




module.exports = router;