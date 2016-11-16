app.factory('AuthFactory', function(){

	//verifica se l'utente e' autenticato
	this.isAuthenticated = function(){
		return !!$window.localStorage['session'];
	}

	//restituisce la sessione
	this.getSession = function(){
		return JSON.parse($window.localStorage['session']);
	}

	//memorizza la sessione nel local storage, token e tipo di utente
	this.setSession = function(session){
		$window.localStorage['session'] = JSON.stringify(session); 
	}

	//restituisce il sessionID
	this.getSessionID = function(){
		return this.getSession().sessionID;
	}

	//restituisce il tipo di utente
	this.getTypeUser = function(){
		return this.getSession().user;
	}

	//restituisce true se l'utente è di tipo admin
	this.isAdmin = function(){
		if(this.isAuthenticated()) return !!this.getSession().user == 'admin';
		else return false;
	}

	//restituisce true se l'utente è di tipo company
	this.isCompany = function(){
		if(this.isAuthenticated()) return !!this.getSession().user == 'company';
		else return false;
	}

});