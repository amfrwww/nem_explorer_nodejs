import SysController from '../controllers/sys.server.controller';

module.exports = function(app){
	app.route('/sys/version').post(SysController.version);
};