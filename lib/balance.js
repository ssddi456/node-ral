/*
 * fis
 * http://fis.baidu.com/
 * 2014/8/4
 */

'use strict';

var logger = require('./logger.js')('Balance');
var ctx = require('./ctx.js');

/**
 * Create a balance chooser
 * @constructor
 */
function Balance(){
}

/**
 *
 * @param balanceContext {BalanceContext}
 */
Balance.prototype.fetchServer = function(balanceContext){
    throw new Error('Not Implemented');
};

/**
 * Convert Service Info into BalanceContext
 * Will update when service info changed
 * @param serviceID
 * @param service
 * @constructor
 */
function BalanceContext(serviceID, service){
    var me = this;
    //save idc info for future feature
    me.currentIDC = ctx.currentIDC;
    me.reqIDCServers = [];
    me.crossIDCServers = [];
    service.server.forEach(function(server){
        //get server list with same idc
        if (server.idc === me.currentIDC || !server.idc || me.currentIDC === ctx.IDC_ALL || service.hybird){
            me.reqIDCServers.push(server);
        }else{
            me.crossIDCServers.push(server);
        }
    });
    if (me.reqIDCServers.length === 0){
        //if there is no server in specify idc, use cross idc server
        logger.warning('Current IDC server count for ' + serviceID + ' is zero, use cross idc server');
        me.reqIDCServers = service.server;
    }
    logger.trace('BalanceContext for ' + serviceID + ' created succ');
}

module.exports.BalanceContext = BalanceContext;
module.exports.Balance = Balance;