var port,server,service,wait_before_end=0x3e8,system=require('system'),webpage=require('webpage');if(system['args']['length']!==0x2){console['log']('Usage:\x20simpleserver.js\x20<portnumber>');phantom['exit'](0x1);}else{port=system['args'][0x1];server=require('webserver')['create']();var utils=require('./utils.js');var urlJoin=require('./urljoin.js');console['debug']=function(_0x157daf){console['log'](_0x157daf);};phantom['onError']=function(_0x11e40c,_0x42ecdb){var _0x36f739={'uOsJT':'error','JETdV':function(_0x472da8,_0x548ea4){return _0x472da8+_0x548ea4;},'sLvAp':'\x20\x0d\x0a','NPMjf':function(_0x2e66bf,_0x5ebc9e){return _0x2e66bf+_0x5ebc9e;}};utils['printJSON'](_0x36f739['uOsJT'],{'errorCode':0x7d1,'errorString':_0x36f739['JETdV'](_0x36f739['JETdV'](_0x11e40c,_0x36f739['sLvAp']),JSON['stringify'](_0x42ecdb))});console['log'](JSON['stringify']({'errorCode':0x7d1,'errorString':_0x36f739['NPMjf'](_0x36f739['NPMjf'](_0x11e40c,_0x36f739['sLvAp']),JSON['stringify'](_0x42ecdb))}));};service=server['listen'](port,{'keepAlive':![]},function(_0x4328b4,_0x21836e){var _0x4833e9={'EejRe':function(_0x1c3eb8,_0x54e2ba){return _0x1c3eb8+_0x54e2ba;},'VfzUc':'console:\x20','EIMjT':function(_0x51202d,_0x44d2c7){return _0x51202d+_0x44d2c7;},'nlWvX':function(_0x12a92,_0x26d5c5){return _0x12a92+_0x26d5c5;},'xBvlb':function(_0x1f3aa4,_0x4243bd){return _0x1f3aa4+_0x4243bd;},'jRJnU':function(_0x539644,_0x53d4ce){return _0x539644+_0x53d4ce;},'rVEAl':function(_0x3b0b08,_0x5411d6){return _0x3b0b08+_0x5411d6;},'hZVVq':'Request\x20finished:\x20#','afKuK':function(_0x86c71f,_0x5822de){return _0x86c71f===_0x5822de;},'jJvGq':function(_0x8e8285,_0x4f22ec){return _0x8e8285!=_0x4f22ec;},'Cygkn':function(_0x84a3b0,_0xe0f6b6){return _0x84a3b0+_0xe0f6b6;},'zfDGB':function(_0x29f864,_0x495eed){return _0x29f864+_0x495eed;},'OOjQA':'Starting\x20request:\x20#','lSpQz':function(_0x584f81,_0x2889db){return _0x584f81+_0x2889db;},'HTQdq':function(_0x38eab1,_0x223349){return _0x38eab1+_0x223349;},'nHmmT':function(_0x58fb87,_0x4b4ee0){return _0x58fb87+_0x4b4ee0;},'SKNAn':function(_0x4a45c4,_0x5ddafb){return _0x4a45c4+_0x5ddafb;},'rwWun':'Request\x20error:\x20#','XBoDD':function(_0x32c77d,_0x47a507){return _0x32c77d===_0x47a507;},'CIACu':function(_0x406dc9,_0x22c3a0){return _0x406dc9+_0x22c3a0;},'xyDVq':'Timeout\x20Error\x20(exceeded\x20','HnPvN':function(_0x23cca9,_0x2a0362){return _0x23cca9(_0x2a0362);},'UZcKV':function(_0x44b5f7,_0x21f5a1){return _0x44b5f7*_0x21f5a1;},'UWtrH':function(_0x10cd39,_0x41de22){return _0x10cd39+_0x41de22;},'sGVcQ':function(_0x2c6129,_0x3504bc){return _0x2c6129+_0x3504bc;},'vRCaO':function(_0xb545a1,_0xc3d09a){return _0xb545a1+_0xc3d09a;},'SkelD':function(_0x593be3,_0x36ade8){return _0x593be3+_0x36ade8;},'breiW':'\x20@\x20','uiDqp':'jsError','iOAbq':'6|4|2|1|3|5|8|0|7','Rlxmg':'error','DPWsu':function(_0xb800cd,_0x8b747d){return _0xb800cd>_0x8b747d;},'LWyRK':'domSteady','bJJNz':function(_0x3db708,_0x46c6ac){return _0x3db708-_0x46c6ac;},'xntBW':function(_0x401334,_0x3915ec){return _0x401334(_0x3915ec);},'gMrmO':'mainFrame','JrUWd':'Load\x20Failed\x20Error\x20(from\x20disallowed\x20domains)','QPbYk':'Filetype\x20unsupported/unrendered\x20as\x20derived\x20from\x20file\x20extension','dDXrC':'childFrames','pdtnM':function(_0x1f62ed,_0x34fdfe){return _0x1f62ed>=_0x34fdfe;},'byzSF':function(_0x271f8c,_0x531498){return _0x271f8c<_0x531498;},'pFxOO':function(_0x14db80,_0x376df2){return _0x14db80+_0x376df2;},'TYJqj':'Filetype\x20unsupported/unrendered\x20(','unmab':'./ajaxhook.js','dUSRO':'./extractors.js','sYDEt':'4|3|0|1|2','LBqMl':function(_0x34ee8c,_0x2f29bd){return _0x34ee8c==_0x2f29bd;},'GKkxK':'get','dmiCr':'4|5|3|1|0|2','ifSlW':function(_0x44fe8c,_0x37161d){return _0x44fe8c+_0x37161d;},'oeIFK':'1|6|2|5|4|0|3|7','MWLGj':function(_0x47f251,_0xf4bf5c){return _0x47f251(_0xf4bf5c);},'XxlfV':'onDomSteady','GQKSZ':function(_0x37d0b8){return _0x37d0b8();},'acWcz':'if\x20(opt.htmlOnly)\x20','fDHun':function(_0x9ebb0f,_0x38bcc7){return _0x9ebb0f-_0x38bcc7;},'GaGaN':'onSteady-done','ryroX':'element-trigger','wYSjG':function(_0x53fc6f,_0x5d1173){return _0x53fc6f(_0x5d1173);},'lLBHg':'ResourceRequested','RoDJX':function(_0x5a6f4e,_0x344629){return _0x5a6f4e+_0x344629;},'Yaqee':'The\x20page\x20is\x20closing.\x20URL:\x20','wDMTZ':'5|2|3|1|4|0','aeNyr':function(_0x102009,_0x259f58){return _0x102009>_0x259f58;},'NGvyK':'onDomChanged','oMMYv':'waitTimer','ziEPC':'onSteady-waitTimer','DQQSx':function(_0x4c4022,_0x56862f){return _0x4c4022===_0x56862f;},'vssBn':'element.triggering','lLGYp':'onSteady','CYorE':'onSteady-wait','vNpER':'element.triggered','hitMo':'onSteady-ready','RDIWM':'done','AeWCB':function(_0x174b3a,_0x51665f){return _0x174b3a(_0x51665f);},'zdJuL':function(_0x291636,_0x259b76){return _0x291636==_0x259b76;},'RlKqw':function(_0x210077,_0x4a5f5f){return _0x210077+_0x4a5f5f;},'HCtst':'domChanged','McAfy':'5|3|12|13|8|10|7|0|6|2|1|11|4|9','VfVvL':function(_0x523736,_0x25a194){return _0x523736+_0x25a194;},'hAeaN':function(_0x53441a,_0x414e4e){return _0x53441a+_0x414e4e;},'Hqtdx':'onExit','pUhyd':function(_0x2f2fa4,_0x256046){return _0x2f2fa4(_0x256046);},'NDGqr':function(_0x570171,_0x1cdb87){return _0x570171/_0x1cdb87;},'mDXfq':function(_0x202891,_0x5a63b1){return _0x202891-_0x5a63b1;},'tfdID':'no-cache','YKBIR':'application/json','iuZqS':function(_0x2cd28f,_0x542ab9){return _0x2cd28f===_0x542ab9;},'FOLLU':'object','gdjaH':function(_0x19f77f,_0x575560){return _0x19f77f===_0x575560;},'OreKy':function(_0x3c1b11,_0x3a070e){return _0x3c1b11===_0x3a070e;},'Ddnyn':'No\x20response\x20received!','YrhlZ':function(_0x4c4666){return _0x4c4666();},'IpZQB':'[!]\x20##############\x20LINK\x20################','PrwOZ':'[!]\x20##############\x20FORM\x20################','GoNLq':'[!]\x20##############\x20AJAX\x20################','ORZIi':function(_0x2bdca0,_0x3cc9fd){return _0x2bdca0(_0x3cc9fd);},'wrCoU':function(_0x87f8a0,_0x49f617){return _0x87f8a0==_0x49f617;},'suGNn':'GET','oJVTN':'1|0|2|4|5|3','PYIUw':'method\x20not\x20allowed!','RzvYu':'./headers.js','kWPHS':function(_0x130c62,_0x1c7ce0){return _0x130c62(_0x1c7ce0);},'dNGlw':'./events.js','nNRIF':function(_0x12d09c,_0x2dcb01){return _0x12d09c*_0x2dcb01;},'zcEgE':'Accept-Encoding','etvVl':'Connection','rRQeS':'Content-Length','VWPhW':'User-Agent','SfCsZ':function(_0x40f0ac,_0x185479){return _0x40f0ac===_0x185479;},'LZBgE':'ResourceReceived','OqLah':'ResourceError','vWVdp':'MainFrameError','SlPEn':'Invalid\x20Url','zlnLz':'MainFrameRedirection','SWANu':'MainFramePreRedirection','cCsDM':'MainFramePostRedirection','afNMN':'ChildFrameNavigate','WKJfl':'MainFrameResourceReceived','UZXWl':'MainFrameNavigationsEnded','qpylA':'SubResourceRequested','WcVKz':'Initialized','ypxKA':'DomSteady','ErNXX':'MainFrameSteady','aVJbz':'PageCreated','IjEAm':'Closing','yHheR':'Callback','IDrPH':'DomChanged','Tpkfg':'Browsing\x20to\x20'};phantom['clearCookies']();var _0x3e01b2=[],_0xb059a2=[];if(_0x4833e9['wrCoU'](_0x4328b4['method'],_0x4833e9['suGNn'])){var _0x400a7e=_0x4833e9['oJVTN']['split']('|'),_0xee1d3e=0x0;while(!![]){switch(_0x400a7e[_0xee1d3e++]){case'0':_0x21836e['statusCode']=0x193;continue;case'1':body=_0x4833e9['PYIUw'];continue;case'2':_0x21836e['headers']={'Cache':_0x4833e9['tfdID'],'Content-Length':body['length']};continue;case'3':return;case'4':_0x21836e['write'](body);continue;case'5':_0x21836e['closeGracefully']();continue;}break;}}var _0x1ab19d=null,_0x376c4f=![],_0x584f4a=![],_0x5bf2c2=Date['now'](),_0x1180cc=null,_0x1ed813=![],_0x5b5330=null;var _0x2b681d=JSON['parse'](_0x4328b4['postRaw']);console['debug'](JSON['stringify'](_0x2b681d,null,0x2));var _0x25125f=webpage['create']();var _0x2a65bb=_0x4833e9['ORZIi'](require,_0x4833e9['RzvYu'])['init'](phantom,_0x25125f),_0x59412e=_0x4833e9['kWPHS'](require,_0x4833e9['dNGlw']),_0x6740ab=_0x59412e['init'](phantom,_0x25125f),_0x57cb1e=Date['now'](),_0x357529={},_0x23ac98={},_0x36a0f2;_0x25125f['onConsoleMessage']=function(_0x3d9fdd){console['log'](_0x4833e9['EejRe'](_0x4833e9['VfzUc'],_0x3d9fdd));};_0x25125f['viewportSize']={'width':_0x2b681d['js_viewport_width']||0x400,'height':_0x2b681d['js_viewport_height']||_0x4833e9['nNRIF'](0x300,0x3)};if(_0x2b681d['headers']){_0x2b681d['headers'][_0x4833e9['zcEgE']]=undefined;_0x2b681d['headers'][_0x4833e9['etvVl']]=undefined;_0x2b681d['headers'][_0x4833e9['rRQeS']]=undefined;}if(_0x2b681d['headers']&&_0x2b681d['headers'][_0x4833e9['VWPhW']]){_0x25125f['settings']['userAgent']=_0x2b681d['headers'][_0x4833e9['VWPhW']];}_0x25125f['settings']['loadImages']=_0x4833e9['SfCsZ'](_0x2b681d['load_images'],undefined)?!![]:_0x2b681d['load_images'];_0x25125f['settings']['resourceTimeout']=_0x2b681d['request_timeout']?_0x4833e9['nNRIF'](_0x2b681d['request_timeout'],0x3e8):_0x4833e9['nNRIF'](0x78,0x3e8);if(_0x2b681d['headers']){_0x25125f['customHeaders']=_0x2b681d['headers'];}_0x6740ab['addListener'](_0x4833e9['LZBgE'],function(_0x490d22){console['debug'](_0x4833e9['EIMjT'](_0x4833e9['nlWvX'](_0x4833e9['xBvlb'](_0x4833e9['jRJnU'](_0x4833e9['rVEAl'](_0x4833e9['hZVVq'],_0x490d22['id']),'\x20['),_0x490d22['status']),']'),_0x490d22['url']));if(_0x4833e9['afKuK'](_0x1ab19d,null)&&_0x4833e9['jJvGq'](_0x490d22['status'],0x12d)&&_0x4833e9['jJvGq'](_0x490d22['status'],0x12e)){_0x1ab19d=_0x490d22;}});_0x6740ab['addListener'](_0x4833e9['lLBHg'],function(_0x33e7a3){console['debug'](_0x4833e9['rVEAl'](_0x4833e9['Cygkn'](_0x4833e9['Cygkn'](_0x4833e9['zfDGB'](_0x4833e9['zfDGB'](_0x4833e9['OOjQA'],_0x33e7a3['id']),'\x20['),_0x33e7a3['method']),']'),_0x33e7a3['url']));});_0x6740ab['addListener'](_0x4833e9['OqLah'],function(_0x312d71){console['info'](_0x4833e9['lSpQz'](_0x4833e9['lSpQz'](_0x4833e9['lSpQz'](_0x4833e9['HTQdq'](_0x4833e9['HTQdq'](_0x4833e9['nHmmT'](_0x4833e9['SKNAn'](_0x4833e9['rwWun'],_0x312d71['id']),'\x20['),_0x312d71['errorCode']),'='),_0x312d71['errorString']),']'),_0x312d71['url']));if(_0x4833e9['XBoDD'](_0x1ab19d,null)){_0x1ab19d=_0x312d71;}});_0x357529['timeout']=_0x2b681d['request_timeout']||0xb4;function _0x4672d1(_0x205790,_0x50cf46){window['clearTimeout'](_0x36a0f2);_0x36a0f2=window['setTimeout'](function(_0x40751b){console['log'](JSON['stringify']({'errorCode':0x4,'errorString':_0x4833e9['CIACu'](_0x4833e9['CIACu'](_0x4833e9['xyDVq'],_0x357529['timeout']),'s)'),'response':{'url':_0x2b681d['url']}}));_0x4833e9['HnPvN'](_0x35c6e6,_0x40751b);},_0x50cf46||_0x4833e9['UZcKV'](_0x357529['timeout'],0x3e8),_0x205790);}_0x4833e9['kWPHS'](_0x4672d1,_0x25125f);_0x25125f['onError']=function(_0x3f499c,_0x3817b7){console['log'](_0x3f499c);_0x3817b7['forEach'](function(_0x28b0ea){console['debug'](_0x4833e9['UWtrH'](_0x4833e9['sGVcQ'](_0x4833e9['sGVcQ'](_0x4833e9['vRCaO'](_0x4833e9['SkelD']('\x09',_0x28b0ea['function']),_0x4833e9['breiW']),_0x28b0ea['file']),':'),_0x28b0ea['line']));});utils['pageChanges']['push'](_0x4833e9['uiDqp'],_0x3f499c);};_0x6740ab['addListener'](_0x4833e9['vWVdp'],function(_0x59f2a3){var _0x70af51=_0x4833e9['iOAbq']['split']('|'),_0x4144d6=0x0;while(!![]){switch(_0x70af51[_0x4144d6++]){case'0':console['debug'](JSON['stringify'](_0x23ac98));continue;case'1':var _0x5c6904=_0x4833e9['Rlxmg'];continue;case'2':_0x23ac98['errorString']=_0x59f2a3['errorString'];continue;case'3':if(_0x59f2a3['status']&&_0x4833e9['DPWsu'](_0x59f2a3['status'],0x0)){_0x23ac98['ok']=0x1;_0x5c6904=_0x4833e9['LWyRK'];}continue;case'4':_0x23ac98['errorCode']=_0x59f2a3['errorCode'];continue;case'5':try{_0x23ac98['response']=utils['prepareResponse'](_0x59f2a3,_0x2a65bb['getRespHeaders']);_0x23ac98['response']['body']=utils['cleanResponseBody'](_0x25125f['content']);_0x23ac98['response']['details']=utils['pageChanges']['fetchAll']();}catch(_0x4275ad){}continue;case'6':_0x23ac98['elasped']=_0x4833e9['bJJNz'](Date['now'](),_0x57cb1e);continue;case'7':_0x4833e9['xntBW'](_0x35c6e6,_0x25125f);continue;case'8':utils['printJSON'](_0x5c6904,_0x23ac98);continue;}break;}});if(utils['invalidUrl'](_0x2b681d['url']))return _0x6740ab['notifyError'](0x3e8,_0x4833e9['SlPEn']);_0x357529['startHostname']=utils['getHostname'](_0x2b681d['url']);_0x357529['allowed_domains']=_0x357529['allowed_domains']||[_0x357529['startHostname']];_0x357529['followPreRedirections']=_0x357529['followPreRedirections']||![];_0x357529['relaxFirstRedirection']=_0x357529['relaxFirstRedirection']||!![];if(utils['invalidUrl'](_0x2b681d['url'],_0x357529['allowed_domains']))_0x6740ab['notifyError'](0x3ea,_0x4833e9['JrUWd']);else if(utils['blacklistedUrl'](_0x2b681d['url']))_0x6740ab['notifyError'](0x3eb,_0x4833e9['QPbYk']);_0x6740ab['addListener'](_0x4833e9['zlnLz'],function(_0x46eb79,_0x29b87c){utils['pageChanges']['push'](_0x4833e9['gMrmO'],_0x46eb79);});_0x6740ab['addListener'](_0x4833e9['SWANu'],function(_0x3098ab,_0x57beac){if(!_0x357529['followPreRedirections']){_0x57beac['abort']();return;}var _0x483c70=_0x3098ab['url'];if(utils['invalidUrl'](_0x483c70,_0x357529['allowed_domains'])){if(_0x357529['relaxFirstRedirection']&&!_0x23ac98['firstRedirectionRelaxed']&&utils['whitelistedRedirectionDomains'](_0x483c70)){_0x23ac98['firstRedirectionRelaxed']=!![];return;}_0x57beac['abort']();_0x6740ab['notifyError'](0x3ea,_0x4833e9['JrUWd']);}if(utils['blacklistedUrl'](_0x483c70)){_0x57beac['abort']();_0x6740ab['notifyError'](0x3eb,_0x4833e9['QPbYk']);}});_0x6740ab['addListener'](_0x4833e9['cCsDM'],function(_0x207186,_0x5809ce){_0x5809ce['abort']();});_0x6740ab['addListener'](_0x4833e9['afNMN'],function(_0x57048d,_0x2bae89,_0x1c9550){if(utils['invalidUrl'](_0x57048d['url'],_0x357529['allowed_domains'])||utils['blacklistedUrl'](_0x57048d['url']))_0x2bae89['abort']();utils['pageChanges']['push'](_0x4833e9['dDXrC'],_0x57048d);});_0x6740ab['addListener'](_0x4833e9['WKJfl'],function(_0x35a5bb){if(_0x35a5bb['status']&&_0x4833e9['pdtnM'](_0x35a5bb['status'],0xc8)&&_0x4833e9['byzSF'](_0x35a5bb['status'],0x12c)&&!/(?:^text\/|xml|javascript|json)/i['test'](_0x35a5bb['contentType']))_0x6740ab['notifyError'](0x3eb,_0x4833e9['SkelD'](_0x4833e9['pFxOO'](_0x4833e9['TYJqj'],_0x35a5bb['contentType']),')'));});_0x6740ab['addListener'](_0x4833e9['UZXWl'],function(_0x517f92){_0x23ac98['response']=utils['prepareResponse'](_0x517f92,_0x2a65bb['getRespHeaders']);});_0x6740ab['addListener'](_0x4833e9['qpylA'],function(_0x5eb684,_0x11fb0d){if(utils['blacklistedUrl'](_0x5eb684['url']))_0x11fb0d['abort']();});_0x6740ab['addListener'](_0x4833e9['WcVKz'],function(){_0x25125f['injectJs'](_0x4833e9['unmab']);_0x25125f['injectJs'](_0x4833e9['dUSRO']);});function _0x1c5dc2(){var _0x339f0d=_0x4833e9['sYDEt']['split']('|'),_0x4aa1cf=0x0;while(!![]){switch(_0x339f0d[_0x4aa1cf++]){case'0':ajax_link=[];continue;case'1':extracted['forEach'](function(_0x1cd559){url=urlJoin['urljoin'](_0x25125f['url'],_0x1cd559['open']['url']);if(_0x25381a['ULsPd'](_0x1cd559['open']['method']['toLowerCase'](),_0x25381a['KOaaD'])){_0x3e01b2['push'](url);}else{ajax_link['push']({'url':url,'data':_0x1cd559['data'],'headers':_0x1cd559['headers']});}});continue;case'2':return ajax_link;case'3':extracted=_0x25125f['evaluate'](function(){return window['_all_extrac_request']&&window['_all_extrac_request']();})||{};continue;case'4':var _0x25381a={'ULsPd':function(_0x1d44ec,_0x5a73a0){return _0x4833e9['LBqMl'](_0x1d44ec,_0x5a73a0);},'KOaaD':_0x4833e9['GKkxK']};continue;}break;}}function _0x47411d(){var _0x54f956=_0x4833e9['dmiCr']['split']('|'),_0x44340c=0x0;while(!![]){switch(_0x54f956[_0x44340c++]){case'0':_0x1ca00c['jsLinkFeedback']=_0x12ffa0['jsLinkFeedback'];continue;case'1':_0x1ca00c['forms']=_0x12ffa0['forms']||[];continue;case'2':return _0x1ca00c;case'3':_0x1ca00c['links']=_0x12ffa0['links']||[];continue;case'4':var _0x12ffa0={},_0x1ca00c=utils['pageChanges']['fetchAll']();continue;case'5':_0x12ffa0=_0x25125f['evaluate'](function(){return window['_gryffin_onMainFrameReady']&&window['_gryffin_onMainFrameReady']();})||{};continue;}break;}}_0x6740ab['addListener'](_0x4833e9['ypxKA'],function(_0x5a190e){if(_0x5a190e['links']){_0x5a190e['links']['forEach'](function(_0x6b2f8c){if(_0x6b2f8c['url']){_0x3e01b2['push'](_0x6b2f8c['url']);}});}if(_0x5a190e['forms']){_0x5a190e['forms']['forEach'](function(_0x402e71){if(_0x4833e9['LBqMl'](_0x402e71['method']['toLowerCase'](),_0x4833e9['GKkxK'])){_0x3e01b2['push'](_0x4833e9['pFxOO'](_0x4833e9['ifSlW'](_0x402e71['url'],'?'),_0x402e71['data']));}else{_0xb059a2['push'](_0x402e71);}});}});_0x6740ab['addListener'](_0x4833e9['ErNXX'],function(_0x14163f){var _0x3e0094=_0x4833e9['oeIFK']['split']('|'),_0x2ebcc6=0x0;while(!![]){switch(_0x3e0094[_0x2ebcc6++]){case'0':if(!_0x23ac98['ok']){_0x23ac98['ok']=0x1;utils['printJSON'](_0x4833e9['LWyRK'],_0x23ac98);}continue;case'1':_0x4833e9['MWLGj'](_0x4672d1,_0x25125f);continue;case'2':_0x23ac98['response']['body']=utils['cleanResponseBody'](_0x14163f['body']);continue;case'3':_0x6740ab['invokeListeners'](_0x4833e9['XxlfV'],_0x23ac98['response']['details']);continue;case'4':_0x23ac98['response']['details']=_0x4833e9['GQKSZ'](_0x47411d);continue;case'5':if(_0x357529['htmlOnly']){console['log'](_0x4833e9['acWcz'],_0x23ac98['response']['body']);phantom['exit']();return;}continue;case'6':_0x23ac98['elasped']=_0x4833e9['fDHun'](Date['now'](),_0x57cb1e);continue;case'7':if(_0x23ac98['response']['details']&&!_0x23ac98['response']['details']['jsLinkFeedback']){_0x6740ab['invokeListeners'](_0x4833e9['GaGaN'],_0x4833e9['ryroX']);_0x4833e9['wYSjG'](_0x35c6e6,_0x25125f);}continue;}break;}});_0x6740ab['addListener'](_0x4833e9['aVJbz'],function(_0x45684b){var _0x3da768=_0x59412e['init'](phantom,_0x45684b);_0x3da768['addListener'](_0x4833e9['lLBHg'],function(_0x3d95d2,_0x293ca2){_0x293ca2['abort']();utils['pageChanges']['push'](_0x4833e9['dDXrC'],_0x3d95d2);});});_0x6740ab['addListener'](_0x4833e9['IjEAm'],function(_0x317364){console['debug'](_0x4833e9['RoDJX'](_0x4833e9['Yaqee'],_0x317364['url']));});_0x6740ab['addListener'](_0x4833e9['yHheR'],function(_0x15c228){if(_0x4833e9['XBoDD'](_0x15c228['action'],_0x4833e9['oMMYv'])){_0x6740ab['invokeListeners'](_0x4833e9['ziEPC'],_0x15c228['timeout']);}else if(_0x4833e9['DQQSx'](_0x15c228['action'],_0x4833e9['vssBn'])){_0x6740ab['addListener'](_0x4833e9['lLGYp'],function(){var _0x13c8c6=_0x4833e9['wDMTZ']['split']('|'),_0x322b42=0x0;while(!![]){switch(_0x13c8c6[_0x322b42++]){case'0':return![];case'1':_0x466f22['forEach'](function(_0x4a11b7){_0x463c75[_0x4a11b7]=_0x1201f8[_0x4a11b7];});continue;case'2':var _0x1201f8=utils['pageChanges']['fetchAll']();continue;case'3':var _0x466f22=Object['keys'](_0x1201f8);continue;case'4':if(_0x4833e9['aeNyr'](_0x466f22['length'],0x0)||_0x463c75['links']||_0x463c75['forms']){_0x6740ab['invokeListeners'](_0x4833e9['NGvyK'],_0x463c75);}continue;case'5':var _0x463c75=_0x25125f['evaluate'](function(){return jsLinks['getData']();});continue;}break;}});_0x6740ab['invokeListeners'](_0x4833e9['CYorE'],_0x4833e9['ryroX']);}else if(_0x4833e9['DQQSx'](_0x15c228['action'],_0x4833e9['vNpER'])){_0x6740ab['invokeListeners'](_0x4833e9['hitMo'],_0x4833e9['ryroX']);}else if(_0x4833e9['DQQSx'](_0x15c228['action'],_0x4833e9['RDIWM'])){_0x6740ab['invokeListeners'](_0x4833e9['GaGaN'],_0x4833e9['ryroX']);_0x4833e9['AeWCB'](_0x35c6e6,_0x25125f);}});_0x6740ab['addListener'](_0x4833e9['IDrPH'],function(_0xc6b20c){if(_0xc6b20c['links']){_0xc6b20c['links']['forEach'](function(_0x300635){if(_0x300635['url']){_0x3e01b2['push'](_0x300635['url']);}});}if(_0xc6b20c['forms']){_0xc6b20c['forms']['forEach'](function(_0xd976e5){if(_0x4833e9['zdJuL'](_0xd976e5['method']['toLowerCase'](),_0x4833e9['GKkxK'])){_0x3e01b2['push'](_0x4833e9['RoDJX'](_0x4833e9['RlKqw'](_0xd976e5['url'],'?'),_0xd976e5['data']));}else{_0xb059a2['push'](_0xd976e5);}});}utils['printJSON'](_0x4833e9['HCtst'],_0xc6b20c);});_0x25125f['onConfirm']=function(_0x2bfde7){return!![];};console['log'](_0x4833e9['hAeaN'](_0x4833e9['Tpkfg'],_0x2b681d['url']));_0x25125f['open'](_0x2b681d['url'],{'operation':_0x2b681d['method'],'data':_0x2b681d['data']});function _0x35c6e6(_0xbb4346){var _0x55910f=_0x4833e9['McAfy']['split']('|'),_0x450aea=0x0;while(!![]){switch(_0x55910f[_0x450aea++]){case'0':_0xbb4346['close']();continue;case'1':var _0x24ebc7=JSON['stringify'](_0x3c9611,null,0x2);continue;case'2':console['log'](_0x4833e9['RlKqw'](_0x4833e9['VfVvL'](_0x4833e9['VfVvL'](_0x4833e9['hAeaN'](_0x4833e9['hAeaN']('[',_0x3c9611['status_code']),']\x20'),_0x3c9611['orig_url']),'\x20'),_0x3c9611['time']));continue;case'3':try{_0x6740ab['invokeListeners'](_0x4833e9['Hqtdx']);}catch(_0x1b8d6a){}continue;case'4':_0x21836e['write'](_0x24ebc7);continue;case'5':if(_0x376c4f){return;}continue;case'6':_0x376c4f=!![];continue;case'7':window['clearTimeout'](_0x36a0f2);continue;case'8':try{_0x3c9611=_0x4833e9['pUhyd'](_0x55a07a,_0xbb4346);}catch(_0x3e3a5b){_0x3c9611={'orig_url':_0x2b681d['url'],'status_code':0x257,'error':_0x3e3a5b['toString'](),'content':'','headers':{},'url':_0xbb4346['url'],'cookies':{},'time':_0x4833e9['NDGqr'](_0x4833e9['mDXfq'](Date['now'](),_0x5bf2c2),0x3e8),'save':_0x2b681d['save']};}continue;case'9':_0x21836e['closeGracefully']();continue;case'10':_0x6740ab['invokeListeners'](_0x4833e9['GaGaN'],_0x4833e9['ryroX']);continue;case'11':_0x21836e['writeHead'](0xc8,{'Cache':_0x4833e9['tfdID'],'Content-Type':_0x4833e9['YKBIR']});continue;case'12':;continue;case'13':var _0x3c9611={};continue;}break;}}function _0x55a07a(_0x11a06d){var _0x22d055={'sVbZw':function(_0x308b37,_0x5caa50){return _0x4833e9['gdjaH'](_0x308b37,_0x5caa50);}};if(_0x4833e9['OreKy'](_0x1ab19d,null)){throw _0x4833e9['Ddnyn'];}var _0x3d35a5={};_0x11a06d['cookies']['forEach'](function(_0xfd4d44){_0x3d35a5[_0xfd4d44['name']]=_0xfd4d44['value'];});var _0x2a65bb={};if(_0x1ab19d['headers']){_0x1ab19d['headers']['forEach'](function(_0x43891a){_0x2a65bb[_0x43891a['name']]=_0x43891a['value'];});}var _0x3e2372=_0x4833e9['YrhlZ'](_0x1c5dc2);function _0x4617ad(_0x19c8a3){var _0x284161={'wwKJK':function(_0x42097d,_0x55e8cc){return _0x4833e9['iuZqS'](_0x42097d,_0x55e8cc);},'wzvNL':_0x4833e9['FOLLU']};_0x19c8a3['forEach'](function(_0x3b6168){if(_0x284161['wwKJK'](typeof _0x3b6168,_0x284161['wzvNL'])){console['log'](JSON['stringify'](_0x3b6168));}else{console['log'](_0x3b6168);}});}function _0x27c081(_0x4ffd37){return _0x4ffd37['filter'](function(_0x4fd9cb,_0x2988fd,_0x5385c8){return _0x22d055['sVbZw'](_0x5385c8['indexOf'](_0x4fd9cb,0x0),_0x2988fd);});}_0x3e01b2=_0x4833e9['pUhyd'](_0x27c081,_0x3e01b2);console['log'](_0x4833e9['IpZQB']);_0x4833e9['pUhyd'](_0x4617ad,_0x3e01b2);console['log'](_0x4833e9['PrwOZ']);_0x4833e9['pUhyd'](_0x4617ad,_0xb059a2);console['log'](_0x4833e9['GoNLq']);_0x4833e9['ORZIi'](_0x4617ad,_0x3e2372);return{'orig_url':_0x2b681d['url'],'status_code':_0x1ab19d['status']||0x257,'error':_0x1ab19d['errorString'],'content':_0x11a06d['content'],'headers':_0x2a65bb,'url':_0x11a06d['url'],'cookies':_0x3d35a5,'time':_0x4833e9['NDGqr'](_0x4833e9['mDXfq'](Date['now'](),_0x5bf2c2),0x3e8),'js_script_result':_0x5b5330,'save':_0x2b681d['save'],'link':_0x3e01b2,'form':_0xb059a2,'ajax':_0x3e2372};}});if(service){console['log']('Web\x20server\x20running\x20on\x20port\x20'+port);}else{console['log']('Error:\x20Could\x20not\x20create\x20web\x20server\x20listening\x20on\x20port\x20'+port);phantom['exit']();}}