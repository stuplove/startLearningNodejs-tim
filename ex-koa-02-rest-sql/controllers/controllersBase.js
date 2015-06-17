'use strict';
var _ = require('underscore');

exports = module.exports = init;

function init(iDao) {
	var controllers = {};

	controllers.dao = iDao;

	controllers.all = all;
	controllers.get = get;
	controllers.update = update;
	controllers.remove = remove;
	controllers.create = create;


	function *all() {
		console.log('controllers.all');
		this.body = yield controllers.dao.getAll();
	}

	function *get() {
		console.log('controllers.get id=' + this.params.id);
		this.body = yield controllers.dao.get(this.params.id);
	}

	function *update() {
		console.log('controllers.update id=' , otp);
		var requestBody = this.request.body;
		var opt = _extend({id : this.params.id}, requestBody );
		this.body = yield controllers.dao.update(opt);
	}

	function *remove() {
		console.log('controllers.remove id=' , this.params.id);
		yield controllers.dao.get(this.params.id).then(function(user) {
			user.destroy();
		});
		this.body = 'user destory by id =' + this.params.id;
	}

	function *create() {
		var requestBody = this.request.body;
		var opt = {
			image: requestBody.image
		}

		console.log('controllers.create opt=' , opt);
		this.body = yield controllers.dao.create(opt);
	}

	return controllers;
}



