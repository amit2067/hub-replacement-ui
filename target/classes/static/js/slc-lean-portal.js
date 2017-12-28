var leanPortalApp = angular.module('leanPortalApp', [ 'ngRoute', 'ngCookies']);

leanPortalApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/login', {
		templateUrl : 'DataTableDemo.html',
		controller : 'dataTableController'
	}).when('/twoWayDataBinding', {
		templateUrl : 'TwoWayDataBinding.html'
	}).when('/dependencyInjection', {
		templateUrl : 'DependencyInjection.html',
		controller : 'DependencyInjectionController'
	}).when('/customDirective', {
		templateUrl : 'CustomDirective.html'
	}).when('/CRUDdemo', {
		templateUrl : 'CRUDExample.html',
		controller : 'UserController'
	});
} ]);

leanPortalApp.controller('leanPortalAppController',['$scope','$cookies', function($scope, $cookies) {

	$scope.isWrongAuthentication = false;
	$scope.isCredEmpty = false;
	$scope.isAdmin = false;
	$scope.showAddIdeaSection = true;
	$scope.showViewIdeasSection = false;
	$scope.showAddUserSection = false;
	$scope.userDetails = {};
	$scope.successfullySubmitted = false;
	$scope.isIdeaDetailsEmpty = false;
	$scope.isUserDetailsEmpty = false;
	$scope.successfullyAdded = false;
	$scope.singleIdea = {};
	$scope.showSingleIdeaSection = false;
	$scope.acceptedIdea = false;
	$scope.declinedIdea = false;
	$scope.tableIdeaList = [];
	$scope.listOfCredentials = 
		[
			{
			    email : "Julie@slc.co.uk",
			    password : "password"
			},
			{
				email : "Rob@slc.co.uk",
				password : "password"
			},
			{
				email : "Joe@slc.co.uk",
				password : "password"
			},
			{
				email : "Moira@slc.co.uk",
				password : "password"
			},
			{
				email : "Marry@slc.co.uk",
				password : "password"
			}                  
	     ];
	
	$scope.listOfUsers = 
		[
			{
				firstName : "Julie",
				lastName : "Hoara",
			    email : "Julie@slc.co.uk",
			    role : "Admin"
			},
			{
				firstName : "Rob",
				lastName : "woosnam",
				email : "Rob@slc.co.uk",
				role : "User"
			},
			{
				firstName : "Joes",
				lastName : "O'Hara",
				email : "Joe@slc.co.uk",
				role : "Admin"
			},
			{
				firstName : "Moira",
				lastName : "Mash",
				email : "Moira@slc.co.uk",
				role : "Admin"
			},
			{
				firstName : "Marry",
				lastName : "Forest",
				email : "Marry@slc.co.uk",
				role : "Admin"
			}                  
	   ];
	
	$scope.listOfIdeas = 
		[
			{
				ideaNumber : "12345",
				ideaTitle : "E2E Report Automation",
			    status : "Submitted",
			    submittedBy : "Julie Hoara",
			    submittedDate : "20-01-2017"
			},
			{
				ideaNumber : "34567",
				ideaTitle : "Republish Utility",
			    status : "In Progress",
			    submittedBy : "Rob Woosnam",
			    submittedDate : "02-01-2017"
			},
			{
				ideaNumber : "56789",
				ideaTitle : "Database Migration",
			    status : "Completed",
			    submittedBy : "Julie Hoara",
			    submittedDate : "23-01-2017"
			},
			{
				ideaNumber : "23456",
				ideaTitle : "Data Masking",
			    status : "Assigned",
			    submittedBy : "Rob Woosnam",
			    submittedDate : "20-01-2017"
			},
			{
				ideaNumber : "36782",
				ideaTitle : "Exception Report",
			    status : "Submitted",
			    submittedBy : "Marry Forest",
			    submittedDate : "20-01-2017"
			}                  
	   ];
	
	$scope.listOfIdeaDetails = 
		[
			{
				ideaNumber : "12345",
				ideaTitle : "E2E Report Automation",
				status : "Submitted",
				ideaDesc : "This will provide an automation report on E2E Project.",
			    ideaBenefitDesc : "More benefits"
			},
			{
				ideaNumber : "34567",
				ideaTitle : "Republish Utility",
				status : "In Progress",
				ideaDesc : "This will republish the data from HEBSS to SIS.",
			    ideaBenefitDesc : "More benefits"
			},
			{
				ideaNumber : "56789",
				ideaTitle : "Database Migration",
				status : "Completed",
				ideaDesc : "This will migrate the database from oracle 10g to oracle 11c.",
			    ideaBenefitDesc : "More benefits"
			},
			{
				ideaNumber : "23456",
				ideaTitle : "Data Masking",
				status : "Assigned",
				ideaDesc : "This will mask the data available in database.",
			    ideaBenefitDesc : "More benefits"
			},
			{
				ideaNumber : "36782",
				ideaTitle : "Exception Report",
				status : "Submitted",
				ideaDesc : "This will provide an exception report from the logs.",
			    ideaBenefitDesc : "More benefits"
			}                  
	   ];
	
	
	$scope.login = function () {
		$scope.isWrongAuthentication = false;
		$scope.isCredEmpty = false;
		var isAuthenticated = false;
		var emailAddress = $scope.emailAddress;
		var userPassword = $scope.userPassword;
		
		if (null == emailAddress || emailAddress == '' || 
				null == userPassword || userPassword == '') {
			$scope.isCredEmpty = true;
			return;
		} 
		
		var listOfLoginCreds = $cookies.getObject('loginCredList');
		if (null == listOfLoginCreds){
			listOfLoginCreds = $scope.listOfCredentials;
		}
		
		for (var index =0; index < listOfLoginCreds.length; index++) {
			var loginDetails = listOfLoginCreds[index];
			if (emailAddress == loginDetails.email && 
					userPassword == loginDetails.password) {
				isAuthenticated= true;
				break;
			}
		}
		
		$cookies.put('emailAddress', emailAddress);
		
		if (isAuthenticated) {
			window.location.href = "/pages/welcome-page.html";
		}
		else {
			$scope.isWrongAuthentication = true;
		}
	}
	
	$scope.logout = function () {
		window.location.href = "/pages/login-page.html";
	}
	
	$scope.getUserDetail= function () {
		$scope.acceptedIdea = false;
		$scope.declinedIdea = false;
		$scope.showSingleIdeaSection = false;
		$scope.successfullySubmitted = false;
		$scope.isIdeaDetailsEmpty = false;
		$scope.isUserDetailsEmpty = false;
		$scope.successfullyAdded = false;
		$scope.showAddIdeaSection = true;
		$scope.showViewIdeasSection = false;
		$scope.showAddUserSection = false;
		$scope.userDetails = {};
		$scope.role = 'Admin';
		$scope.isAdmin = false;
		var emailAddress = $cookies.get('emailAddress');
		console.log(emailAddress);
		
		if (null == emailAddress || emailAddress == '') {
			return;
		} 
		
		var userList = $cookies.getObject('listOfUsers');
		if ( null == userList) {
			userList = $scope.listOfUsers;
		}
		
		for (var index =0; index < userList.length; index++) {
			var userDetails = userList[index];
			if (userDetails.email == emailAddress) {
				$scope.userDetails = userDetails;
				var role = userDetails.role;
				if (role == "Admin") {
					$scope.isAdmin = true;
				}
			}
		}
		
		var ideaList = $cookies.getObject('listOfIdeas');
		if (null == ideaList) {
			ideaList = $scope.listOfIdeas;
		}
		$scope.tableIdeaList = ideaList;
	}
	
	$scope.showAddIdeaSectionW = function () {
		$scope.acceptedIdea = false;
		$scope.declinedIdea = false;
		$scope.isIdeaDetailsEmpty = false;
		$scope.successfullySubmitted = false;
		$scope.ideaTitle = '';
		$scope.ideaDesc = '';
		$scope.ideaBenefitDesc = '';
		$scope.showAddIdeaSection = true;
		$scope.showViewIdeasSection = false;
		$scope.showAddUserSection = false;
		$scope.showSingleIdeaSection = false;
		$("#AddIdeaLink").addClass("backGroundDarkGray");
		$("#ViewAllIdeaLink").removeClass("backGroundDarkGray");
		$("#AddUserLink").removeClass("backGroundDarkGray");
	}
	
	$scope.showViewIdeasSectionW = function () {
		$scope.acceptedIdea = false;
		$scope.declinedIdea = false;
		$scope.showAddIdeaSection = false;
		$scope.showViewIdeasSection = true;
		$scope.showAddUserSection = false;
		$scope.showSingleIdeaSection = false;
		$("#AddIdeaLink").removeClass("backGroundDarkGray");
		$("#ViewAllIdeaLink").addClass("backGroundDarkGray");
		$("#AddUserLink").removeClass("backGroundDarkGray");
	}
	
	$scope.showAddUserSectionW = function () {
		$scope.acceptedIdea = false;
		$scope.declinedIdea = false;
		$scope.isUserDetailsEmpty = false;
		$scope.successfullyAdded = false;
		$scope.firstName = '';
		$scope.lastName = '';
		$scope.userEmail = '';
		$scope.role = 'Admin';
		$scope.showAddIdeaSection = false;
		$scope.showViewIdeasSection = false;
		$scope.showAddUserSection = true;
		$scope.showSingleIdeaSection = false;
		$("#AddIdeaLink").removeClass("backGroundDarkGray");
		$("#ViewAllIdeaLink").removeClass("backGroundDarkGray");
		$("#AddUserLink").addClass("backGroundDarkGray");
	}
	
	$scope.addNewIdea = function () {
		$scope.isIdeaDetailsEmpty = false;
		$scope.successfullySubmitted = false;
		var ideaTitle = $scope.ideaTitle;
		var ideaDesc = $scope.ideaDesc;
		var ideaBenefitDec = $scope.ideaBenefitDesc;
		
		if (null == ideaTitle || ideaTitle == '' || null == ideaDesc || ideaDesc == '') {
			$scope.isIdeaDetailsEmpty = true;
			return;
		}
		
		var ideaNumber = Math.floor((Math.random() * 1000000) + 1);
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!

		var yyyy = today.getFullYear();
		if(dd<10){
		    dd='0'+dd;
		} 
		if(mm<10){
		    mm='0'+mm;
		} 
		var todayDate = dd+'-'+mm+'-'+yyyy;
		
		var idea = {
					ideaNumber : ideaNumber,
					ideaTitle : ideaTitle,
				    status : "Submitted",
				    submittedBy : $scope.userDetails.firstName+' '+$scope.userDetails.lastName,
				    submittedDate : todayDate
		};
		
		$scope.listOfIdeas.push(idea);
		
		var ideaDetail = {
				ideaNumber : ideaNumber,
				ideaTitle : ideaTitle,
				status : "Submitted",
				ideaDesc : ideaDesc,
			    ideaBenefitDesc : ideaBenefitDec
		};
		
		$scope.listOfIdeaDetails.push(ideaDetail);
		$scope.successfullySubmitted = true;
		$cookies.putObject('listOfIdeas',$scope.listOfIdeas);
		$cookies.putObject('listOfIdeaDetails',$scope.listOfIdeaDetails);
     }
	
	$scope.addNewUser = function () {
		$scope.isUserDetailsEmpty = false;
		$scope.successfullyAdded = false;
		var firstName = $scope.firstName;
		var lastName = $scope.lastName;
		var emailAddress = $scope.userEmail;
		var role = $scope.role;
		console.log(firstName);
		console.log(lastName);
		console.log(emailAddress);
		console.log(role);
		
		if (null == firstName || firstName == '' || null == lastName || lastName == '' 
			|| null == emailAddress || emailAddress == '' || null == role || role == '') {
			$scope.isUserDetailsEmpty = true;
			return;
		}
		
		var user = {
				firstName : firstName,
				lastName : lastName,
			    email : emailAddress,
			    role : role
			};
		
		var loginDetail = {
				email : emailAddress,
			    password : "password"
			};
		
		$scope.listOfUsers.push(user);
		$scope.listOfCredentials.push(loginDetail);
		$scope.successfullyAdded = true;
		$cookies.putObject('loginCredList',$scope.listOfCredentials);
		$cookies.putObject('listOfUsers',$scope.listOfUsers);
     }
	
	$scope.showSingleIdeaDetails = function(ideaNumber) {
		$scope.singleIdea = {};
		
		var ideaDetailsList = $cookies.getObject('listOfIdeaDetails');
		if (null == ideaDetailsList) {
			ideaDetailsList = $scope.listOfIdeaDetails;
		}
		
		for (var index = 0; index < ideaDetailsList.length; index++) {
			var ideaDetail = ideaDetailsList[index];
			if (ideaNumber == ideaDetail.ideaNumber) {
				$scope.singleIdea = ideaDetail;
				break;
			}
		}
		$scope.showSingleIdeaSection = true;
		$scope.showAddIdeaSection = false;
		$scope.showViewIdeasSection = false;
		$scope.showAddUserSection = false;
	}
	
	$scope.acceptIdea = function(ideaNumber) {
		$scope.acceptedIdea = false;
		
		var ideaDetailsList = $cookies.getObject('listOfIdeaDetails');
		if (null == ideaDetailsList) {
			ideaDetailsList = $scope.listOfIdeaDetails;
		}
		
		for (var index = 0; index < $scope.listOfIdeaDetails.length; index++) {
			var ideaDetail = $scope.listOfIdeaDetails[index];
			if (ideaNumber == ideaDetail.ideaNumber) {
				ideaDetail.status = "Accepted";
				break;
			}
		}
		
		var ideaList = $cookies.getObject('listOfIdeas');
		if (null == ideaList) {
			ideaList = $scope.listOfIdeas;
		}
		
		for (var index = 0; index < $scope.listOfIdeas.length; index++) {
			var idea = $scope.listOfIdeas[index];
			if (ideaNumber == idea.ideaNumber) {
				idea.status = "Accepted";
				break;
			}
		}
		$scope.acceptedIdea = true;
		$scope.tableIdeaList = ideaList;
		$cookies.putObject('listOfIdeas',ideaList);
		$cookies.putObject('listOfIdeaDetails',ideaDetailsList);
	}
	
	$scope.declineIdea = function(ideaNumber) {
		$scope.declinedIdea = false;
		
		var ideaDetailsList = $cookies.getObject('listOfIdeaDetails');
		if (null == ideaDetailsList) {
			ideaDetailsList = $scope.listOfIdeaDetails;
		}
		
		for (var index = 0; index < ideaDetailsList.length; index++) {
			var ideaDetail = ideaDetailsList[index];
			if (ideaNumber == ideaDetail.ideaNumber) {
				ideaDetail.status = "Declined";
				break;
			}
		}
		
		var ideaList = $cookies.getObject('listOfIdeas');
		if (null == ideaList) {
			ideaList = $scope.listOfIdeas;
		}
		
		for (var index = 0; index < ideaList.length; index++) {
			var idea = ideaList[index];
			if (ideaNumber == idea.ideaNumber) {
				idea.status = "Declined";
				break;
			}
		}
		$scope.declinedIdea = true;
		$scope.tableIdeaList = ideaList;
		$cookies.putObject('listOfIdeas',ideaList);
		$cookies.putObject('listOfIdeaDetails',ideaDetailsList);
	}
	
	$scope.getUserDetail();
} ]);
