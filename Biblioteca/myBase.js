const _0x20a6c6=_0x427e;(function(_0x25a0fb,_0xacdd5e){const _0x308742=_0x427e,_0x4f1024=_0x25a0fb();while(!![]){try{const _0x5d4ecc=-parseInt(_0x308742(0x1b2))/0x1*(parseInt(_0x308742(0x1aa))/0x2)+parseInt(_0x308742(0x1a8))/0x3+-parseInt(_0x308742(0x1ab))/0x4+-parseInt(_0x308742(0x1e0))/0x5+-parseInt(_0x308742(0x1c9))/0x6*(-parseInt(_0x308742(0x1ed))/0x7)+-parseInt(_0x308742(0x1fc))/0x8+parseInt(_0x308742(0x1ec))/0x9;if(_0x5d4ecc===_0xacdd5e)break;else _0x4f1024['push'](_0x4f1024['shift']());}catch(_0x2ad21a){_0x4f1024['push'](_0x4f1024['shift']());}}}(_0x3cdc,0xcc1a3));const _0x2e8554=function(){let _0x43382b=!![];return function(_0x48d4fe,_0xadb632){const _0x473d1c=_0x43382b?function(){const _0x1239f8=_0x427e;if(_0xadb632){const _0x1d89f4=_0xadb632[_0x1239f8(0x1bd)](_0x48d4fe,arguments);return _0xadb632=null,_0x1d89f4;}}:function(){};return _0x43382b=![],_0x473d1c;};}(),_0xcddf2=_0x2e8554(this,function(){const _0x403fa1=_0x427e;return _0xcddf2['toString']()[_0x403fa1(0x1fb)](_0x403fa1(0x1c4))['toString']()[_0x403fa1(0x1d5)](_0xcddf2)[_0x403fa1(0x1fb)](_0x403fa1(0x1c4));});_0xcddf2();const _0x45e0ca=function(){let _0x3f84db=!![];return function(_0x45a006,_0x51e153){const _0x55d2cf=_0x3f84db?function(){const _0x5042b3=_0x427e;if(_0x51e153){const _0x20a177=_0x51e153[_0x5042b3(0x1bd)](_0x45a006,arguments);return _0x51e153=null,_0x20a177;}}:function(){};return _0x3f84db=![],_0x55d2cf;};}();(function(){_0x45e0ca(this,function(){const _0x3fb182=_0x427e,_0x350707=new RegExp('function\x20*\x5c(\x20*\x5c)'),_0x7b1603=new RegExp(_0x3fb182(0x1dc),'i'),_0x3f3a2f=_0x5192a2(_0x3fb182(0x1a5));!_0x350707[_0x3fb182(0x20e)](_0x3f3a2f+_0x3fb182(0x1f4))||!_0x7b1603[_0x3fb182(0x20e)](_0x3f3a2f+_0x3fb182(0x1c2))?_0x3f3a2f('0'):_0x5192a2();})();}());const {MessageType,Mimetype,WAConnection,mentionedJid}=require(_0x20a6c6(0x1cb)),{resolve}=require(_0x20a6c6(0x207)),util=require('util'),fs=require('fs-extra'),axios=require(_0x20a6c6(0x1a2)),request=require('request');let conn=require(_0x20a6c6(0x1ff)),venom=conn[_0x20a6c6(0x1be)],ImgSettings=JSON[_0x20a6c6(0x1ee)](fs['readFileSync'](_0x20a6c6(0x208))),{pathImgStatus,pathImgToko,pathAdReply,pathMenu,pathThumbl}=ImgSettings,settings=JSON['parse'](fs[_0x20a6c6(0x1b3)]('./manipulador/setting/settings.json')),{teksReply,bufferReply,monospace,cr,hackers}=settings,ticks=JSON[_0x20a6c6(0x1ee)](fs[_0x20a6c6(0x1b3)](_0x20a6c6(0x1a0))),{whatsapp,FacebookB}=ticks;function _0x427e(_0x2bab81,_0x8d261a){const _0x339e68=_0x3cdc();return _0x427e=function(_0x5192a2,_0x45e0ca){_0x5192a2=_0x5192a2-0x19f;let _0x4e3205=_0x339e68[_0x5192a2];return _0x4e3205;},_0x427e(_0x2bab81,_0x8d261a);}exports['sendText']=(_0x44befc,_0x47f456)=>{const _0xa17d63=_0x20a6c6;venomi[_0xa17d63(0x1db)](_0x44befc,_0x47f456,MessageType[_0xa17d63(0x209)]);},exports['sendImage']=(_0x49a347,_0x237f97,_0x2eb53f,_0x454fd8)=>{const _0x14c9ee=_0x20a6c6;venomi['sendMessage'](_0x49a347,_0x237f97,MessageType[_0x14c9ee(0x1e3)],{'quoted':_0x454fd8,'caption':_0x2eb53f});},exports[_0x20a6c6(0x1b5)]=(_0x51f700,_0x4afc06,_0x40e609,_0x546054)=>{const _0xd56e5c=_0x20a6c6;venom[_0xd56e5c(0x1db)](_0x51f700,_0x4afc06,MessageType['video'],{'quoted':_0x546054,'caption':_0x40e609});},exports[_0x20a6c6(0x1d0)]=(_0x3c8d4d,_0x105b74)=>{const _0x3f3a19=_0x20a6c6;venom[_0x3f3a19(0x1db)](_0x3c8d4d,_0x105b74,MessageType[_0x3f3a19(0x1f0)],{'mimetype':_0x3f3a19(0x20c)});},exports['reply']=(_0x2bed9d,_0x43a68f,_0x2d0759)=>{const _0x3b0acd=_0x20a6c6;venom[_0x3b0acd(0x1db)](_0x2bed9d,_0x43a68f,MessageType[_0x3b0acd(0x209)],{'quoted':_0x2d0759});},exports[_0x20a6c6(0x1a7)]=(_0x324534,_0x89224a,_0x345249)=>{const _0x3342d6=_0x20a6c6;venom[_0x3342d6(0x1db)](_0x324534,_0x89224a,MessageType[_0x3342d6(0x1f6)],{'quoted':_0x345249});},exports[_0x20a6c6(0x20f)]=(_0x37d2af,_0x46626b,_0x2780b5)=>{const _0x30c2b7=_0x20a6c6,_0x4698ad=_0x30c2b7(0x1b6)+'VERSION:3.0\x0a'+_0x30c2b7(0x1ae)+_0x2780b5+'\x0a'+_0x30c2b7(0x1e6)+'TEL;type=CELL;type=VOICE;waid='+_0x46626b+':+'+_0x46626b+'\x0a'+_0x30c2b7(0x1e2);venom[_0x30c2b7(0x1db)](_0x37d2af,{'displayname':_0x2780b5,'vcard':_0x4698ad},MessageType[_0x30c2b7(0x1a4)]);},exports[_0x20a6c6(0x1b4)]=(_0x321931,_0x79a2f5,_0x47941d)=>{const _0x1629f8=_0x20a6c6;venom[_0x1629f8(0x1db)](_0x321931,_0x79a2f5,MessageType[_0x1629f8(0x1f6)],{'quoted':troli});},exports['sendLiveLocation']=async function(_0x33fdcd,_0x4f6ea3){const _0x3e3478=_0x20a6c6;let _0x5daa3c=await venom['groupMetadata'](_0x33fdcd),_0x513f0f=_0x5daa3c[_0x3e3478(0x1bb)],_0xab9661=[];for(let _0x6198f3 of _0x513f0f){_0xab9661[_0x3e3478(0x1e4)](_0x6198f3['jid']);}venom[_0x3e3478(0x1db)](_0x33fdcd,_0x4f6ea3,MessageType[_0x3e3478(0x1f6)],{'quoted':{'key':{'fromMe':![],'participant':ticks[_0x3e3478(0x1c0)],..._0x33fdcd?{'remoteJid':_0x3e3478(0x201)}:{}},'message':{'liveLocationMessage':{'caption':_0x3e3478(0x1dd),'jpegThumbnail':fs[_0x3e3478(0x1b3)](ImgSettings[_0x3e3478(0x204)])}}}});},exports['sendFakeStatus']=(_0x599664,_0x3e4f65,_0x42e2b9)=>{const _0x47e4d1=_0x20a6c6;venom['sendMessage'](_0x599664,_0x3e4f65,MessageType['text'],{'quoted':{'key':{'fromMe':![],'participant':ticks[_0x47e4d1(0x1c0)],..._0x599664?{'remoteJid':_0x47e4d1(0x201)}:{}},'message':{'imageMessage':{'mimetype':_0x47e4d1(0x1a9),'caption':_0x42e2b9,'jpegThumbnail':fs[_0x47e4d1(0x1b3)](ImgSettings['pathAdReply'])}}}});},exports[_0x20a6c6(0x210)]=(_0x410866,_0x5a0de9,_0x32b747)=>{const _0x4fde7c=_0x20a6c6;venom[_0x4fde7c(0x1db)](_0x410866,_0x5a0de9,MessageType[_0x4fde7c(0x209)],{'quoted':{'key':{'fromMe':![],'participant':ticks['FacebookB'],..._0x410866?{'remoteJid':_0x4fde7c(0x201)}:{}},'message':{'imageMessage':{'mimetype':'image/jpeg','caption':_0x32b747,'jpegThumbnail':fs[_0x4fde7c(0x1b3)](ImgSettings[_0x4fde7c(0x204)])}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]}}});},exports[_0x20a6c6(0x1a6)]=(_0x5d6795,_0xbc1dab,_0x4cb8d9,_0x124f3d)=>{const _0xc4bcbb=_0x20a6c6;venom[_0xc4bcbb(0x1db)](_0x5d6795,_0xbc1dab,MessageType[_0xc4bcbb(0x1e3)],{'quoted':{'key':{'fromMe':![],'participant':ticks[_0xc4bcbb(0x1c0)],..._0x5d6795?{'remoteJid':_0xc4bcbb(0x201)}:{}},'message':{'imageMessage':{'mimetype':_0xc4bcbb(0x1a9),'caption':_0x124f3d,'jpegThumbnail':fs[_0xc4bcbb(0x1b3)](ImgSettings[_0xc4bcbb(0x204)])}}},'caption':_0x4cb8d9,'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]}});},exports['sendFakeStatusWithImg']=(_0x3ecc63,_0x224875,_0x182990,_0x1d5adb)=>{const _0x360640=_0x20a6c6;venom[_0x360640(0x1db)](_0x3ecc63,_0x224875,MessageType[_0x360640(0x1e3)],{'quoted':{'key':{'fromMe':![],'participant':ticks[_0x360640(0x1c0)],..._0x3ecc63?{'remoteJid':_0x360640(0x201)}:{}},'message':{'imageMessage':{'mimetype':_0x360640(0x1a9),'caption':_0x1d5adb,'jpegThumbnail':fs[_0x360640(0x1b3)](ImgSettings[_0x360640(0x204)])}}},'caption':_0x182990});},exports[_0x20a6c6(0x1ad)]=(_0x1d2115,_0x5e9f1f,_0x2afd3c,_0x281d0b)=>{const _0x66dba9=_0x20a6c6;venom[_0x66dba9(0x1db)](_0x1d2115,_0x5e9f1f,MessageType[_0x66dba9(0x1f7)],{'contextInfo':{'mentionedJid':_0x2afd3c},'quoted':_0x281d0b});},exports[_0x20a6c6(0x1f1)]=async function(_0x4a0b59,_0x31bfd6){const _0x4940bb=_0x20a6c6;let _0x53057d=await venom[_0x4940bb(0x1f5)](_0x4a0b59),_0x114e3c=_0x53057d[_0x4940bb(0x1bb)],_0x4fb80e=[];for(let _0x31d15d of _0x114e3c){_0x4fb80e[_0x4940bb(0x1e4)](_0x31d15d[_0x4940bb(0x1c6)]);}venom[_0x4940bb(0x1db)](_0x4a0b59,_0x31bfd6,MessageType[_0x4940bb(0x209)],{'contextInfo':{'mentionedJid':_0x4fb80e}});},exports[_0x20a6c6(0x1d4)]=async function(_0x3d743d,_0x2bf3ef){const _0x1fca46=_0x20a6c6;let _0x2ab834=await venom[_0x1fca46(0x1f5)](_0x3d743d),_0x351d0e=_0x2ab834[_0x1fca46(0x1bb)],_0xcf949f=[];for(let _0x2d9da4 of _0x351d0e){_0xcf949f[_0x1fca46(0x1e4)](_0x2d9da4[_0x1fca46(0x1c6)]);}venom[_0x1fca46(0x1db)](_0x3d743d,_0x2bf3ef,MessageType['image'],{'contextInfo':{'mentionedJid':_0xcf949f}});},exports[_0x20a6c6(0x1f8)]=async function(_0x1e4f7c,_0x164844){const _0x887c55=_0x20a6c6;let _0x1a9d6c=await venom[_0x887c55(0x1f5)](_0x1e4f7c),_0x37486a=_0x1a9d6c[_0x887c55(0x1bb)],_0x3a7777=[];for(let _0x53627e of _0x37486a){_0x3a7777[_0x887c55(0x1e4)](_0x53627e[_0x887c55(0x1c6)]);}venom[_0x887c55(0x1db)](_0x1e4f7c,_0x164844,MessageType[_0x887c55(0x1f6)],{'contextInfo':{'mentionedJid':_0x3a7777}});},exports[_0x20a6c6(0x1de)]=async function(_0x575438,_0x30a4b5,_0x3ebf7a){const _0x514ba9=_0x20a6c6;let _0x39c34e=_0x514ba9(0x1b6)+'VERSION:3.0\x0a'+'FN:'+_0x3ebf7a+'\x0a'+_0x514ba9(0x1e6)+_0x514ba9(0x1f2)+_0x30a4b5+':+'+_0x30a4b5+'\x0a'+_0x514ba9(0x1e2),_0x1f4fa7=await venom['groupMetadata'](_0x575438),_0x52cace=_0x1f4fa7[_0x514ba9(0x1bb)],_0x175b61=[];for(let _0x278a6b of _0x52cace){_0x175b61[_0x514ba9(0x1e4)](_0x278a6b[_0x514ba9(0x1c6)]);}venom['sendMessage'](_0x575438,{'displayname':_0x3ebf7a,'vcard':_0x39c34e},MessageType[_0x514ba9(0x1a4)],{'contextInfo':{'mentionedJid':_0x175b61}});},exports[_0x20a6c6(0x1cd)]=_0xf85a2=>{const _0x350f49=_0x20a6c6;return''+Math[_0x350f49(0x20b)](Math['random']()*0x2710)+_0xf85a2;},exports[_0x20a6c6(0x1ca)]=async _0x334c69=>{return new Promise(_0x2a5d02=>setTimeout(_0x2a5d02,_0x334c69));},exports[_0x20a6c6(0x1b9)]=function(_0x55f070){const _0x590bf5=_0x20a6c6;_0x55f070=Number(_0x55f070);var _0x361ad7=Math[_0x590bf5(0x20b)](_0x55f070/(0xe10*0x18)),_0x2a8103=Math[_0x590bf5(0x20b)](_0x55f070%(0xe10*0x18)/0xe10),_0x5f99dc=Math['floor'](_0x55f070%0xe10/0x3c),_0x4c3bee=Math[_0x590bf5(0x20b)](_0x55f070%0x3c),_0x5cebdf=_0x361ad7>0x0?_0x361ad7+(_0x361ad7==0x1?_0x590bf5(0x20a):_0x590bf5(0x1a3)):'',_0xadc1fe=_0x2a8103>0x0?_0x2a8103+(_0x2a8103==0x1?'\x20hour,\x20':'\x20hours,\x20'):'',_0x4c015a=_0x5f99dc>0x0?_0x5f99dc+(_0x5f99dc==0x1?'\x20minute,\x20':_0x590bf5(0x206)):'',_0x5aea71=_0x4c3bee>0x0?_0x4c3bee+(_0x4c3bee==0x1?'\x20second':_0x590bf5(0x1fd)):'';return _0x5cebdf+_0xadc1fe+_0x4c015a+_0x5aea71;},exports[_0x20a6c6(0x1bc)]=(_0x5b5c59,_0x23f0ad,_0x450148)=>{const _0x4a8bbc=_0x20a6c6;anu={'key':{'fromMe':![],'participant':ticks[_0x4a8bbc(0x1c0)],..._0x5b5c59?{'remoteJid':_0x4a8bbc(0x201)}:{}},'message':{'productMessage':{'product':{'productImage':{'mimetype':'image/jpeg','jpegThumbnail':fs[_0x4a8bbc(0x1b3)](ImgSettings[_0x4a8bbc(0x204)])},'title':_0x450148,'description':settings[_0x4a8bbc(0x20d)],'currencyCode':_0x4a8bbc(0x1d1),'priceAmount1000':'50000000','retailerId':settings['cr'],'productImageCount':0x1},'businessOwnerJid':ticks['FacebookB']}}},venom[_0x4a8bbc(0x1db)](_0x5b5c59,_0x23f0ad,MessageType['text'],{'quoted':anu,'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]}});},exports[_0x20a6c6(0x200)]=(_0x544b17,_0x165e5a,_0x491f7f)=>{const _0x594f74=_0x20a6c6;anu={'key':{'fromMe':![],'participant':ticks[_0x594f74(0x1c0)],..._0x544b17?{'remoteJid':_0x594f74(0x201)}:{}},'message':{'productMessage':{'product':{'productImage':{'mimetype':_0x594f74(0x1a9),'jpegThumbnail':fs[_0x594f74(0x1b3)](ImgSettings['pathAdReply'])},'title':_0x491f7f,'description':settings[_0x594f74(0x20d)],'currencyCode':_0x594f74(0x1d1),'priceAmount1000':_0x594f74(0x211),'retailerId':settings['cr'],'productImageCount':0x1},'businessOwnerJid':ticks['FacebookB']}}},venom[_0x594f74(0x1db)](_0x544b17,_0x165e5a,MessageType['text'],{'quoted':anu});},exports['sendFakeThumb']=async function(_0x4430a6,_0x1ebcf9,_0xc5c7bf,_0x25f95c,_0x473562,_0x18513d){const _0x4594f3=_0x20a6c6;var _0x128335={'detectLinks':![]},_0x3295ea=await venom['generateLinkPreview'](_0x1ebcf9);_0x3295ea[_0x4594f3(0x1af)]=_0xc5c7bf,_0x3295ea['description']=_0x25f95c,_0x3295ea['jpegThumbnail']=_0x18513d?_0x18513d:fs[_0x4594f3(0x1b3)](ImgSettings[_0x4594f3(0x204)]),_0x3295ea['canonicaUrl']=_0x473562,venom[_0x4594f3(0x1db)](_0x4430a6,_0x3295ea,MessageType[_0x4594f3(0x1f7)],_0x128335);},exports[_0x20a6c6(0x1e9)]=function(_0x548490,_0x4991bb,_0x3ca304,_0x340156,_0x4011ab){const _0xc6d831=_0x20a6c6;let _0x9ca891={'thumbnail':_0x340156?_0x340156:fs[_0xc6d831(0x1b3)](ImgSettings[_0xc6d831(0x204)]),'quoted':_0x4011ab?_0x4011ab:''};venom[_0xc6d831(0x1db)](_0x548490,_0x4991bb,MessageType[_0xc6d831(0x1e3)],_0x9ca891);},exports[_0x20a6c6(0x1f3)]=async(_0x8b9e88,_0x434628,_0xa4fa0d='',_0x131f17,_0x2ad8d9=[])=>{const _0x5aca06=_0x20a6c6;_0x2ad8d9['length']>0x0&&(_0xa4fa0d=normalizeMention(_0x8b9e88,_0xa4fa0d,_0x2ad8d9));const _0x535e81=Date['now']()/0x2710,_0x5ea94f=_0x535e81[_0x5aca06(0x214)]();let _0x3cd0bc='';var _0x220350=function(_0x341b01,_0x26b402,_0x9af74c){const _0x3fbbf6=_0x5aca06;request[_0x3fbbf6(0x1fe)](_0x341b01,function(_0x2ffbe7,_0x185d7a,_0x2e4bd2){const _0x297b36=_0x3fbbf6;_0x3cd0bc=_0x185d7a['headers'][_0x297b36(0x1eb)],request(_0x341b01)[_0x297b36(0x1bf)](fs['createWriteStream'](_0x26b402))['on'](_0x297b36(0x1e7),_0x9af74c);});};_0x220350(_0x434628,_0x5ea94f,async function(){const _0x218f9f=_0x5aca06;console[_0x218f9f(0x1b8)](_0x218f9f(0x205));let _0x1d47f6=fs['readFileSync'](_0x5ea94f),_0x537b81=_0x3cd0bc[_0x218f9f(0x1e8)]('/')[0x0]+'Message';_0x3cd0bc===_0x218f9f(0x1f9)&&(_0x537b81=MessageType['video'],_0x3cd0bc=Mimetype[_0x218f9f(0x1c1)]),_0x3cd0bc['split']('/')[0x0]===_0x218f9f(0x1c5)&&(_0x3cd0bc=Mimetype[_0x218f9f(0x1c8)]),venom[_0x218f9f(0x1db)](_0x8b9e88,_0x1d47f6,_0x537b81,{'quoted':_0x131f17,'mimetype':_0x3cd0bc,'caption':_0xa4fa0d,'contextInfo':{'mentionedJid':_0x2ad8d9}}),fs[_0x218f9f(0x203)](_0x5ea94f);});},exports[_0x20a6c6(0x1ac)]=function(_0x29de7a){const _0x158f9b=_0x20a6c6;admins=[];for(let _0x2e398f of _0x29de7a){_0x2e398f['isAdmin']?admins[_0x158f9b(0x1e4)](_0x2e398f[_0x158f9b(0x1c6)]):'';}return admins;},exports['getBuffer']=async(_0x4f2322,_0xf1b636)=>{const _0xf25e51=_0x20a6c6;try{_0xf1b636?_0xf1b636:{};const _0x2b3657=await axios({'method':_0xf25e51(0x1ba),'url':_0x4f2322,'headers':{'DNT':0x1,'Upgrade-Insecure-Request':0x1},..._0xf1b636,'responseType':'arraybuffer'});return _0x2b3657[_0xf25e51(0x1da)];}catch(_0x50bfa2){console['log'](_0xf25e51(0x1d7)+_0x50bfa2);}},exports[_0x20a6c6(0x1d8)]=async function(_0x91169c){const _0x2a5bf1=_0x20a6c6,_0x243a71=await venom[_0x2a5bf1(0x202)](_0x91169c);return _0x243a71;},exports[_0x20a6c6(0x1df)]=async function(_0x437a0f){const _0x3b5dbc=_0x20a6c6,_0x4356b8=await venom[_0x3b5dbc(0x1fa)](_0x437a0f);return _0x4356b8;},exports[_0x20a6c6(0x1ef)]=function(_0x1e2984,_0x2dfdcd){const _0x444e99=_0x20a6c6;for(let _0x2e4726 of _0x2dfdcd){venom[_0x444e99(0x1d2)](_0x1e2984,[_0x2e4726]);}},exports[_0x20a6c6(0x1a1)]=function(_0x24b5f2,_0x8fb1a9){venom['groupAdd'](_0x24b5f2,_0x8fb1a9);},exports['promote']=function(_0x39324d,_0x3ff501){const _0x26dd13=_0x20a6c6;venom[_0x26dd13(0x1d6)](_0x39324d,_0x3ff501);},exports[_0x20a6c6(0x1b1)]=function(_0x3f11ce,_0x549a39){const _0x2bf208=_0x20a6c6;venom[_0x2bf208(0x1d9)](_0x3f11ce,_0x549a39);},exports['upTextStatus']=function(_0x484211){const _0x10ffc9=_0x20a6c6;venom[_0x10ffc9(0x1db)](_0x10ffc9(0x201),_0x484211,MessageType[_0x10ffc9(0x1f7)]);},exports['upImgStatus']=function(_0x2280c1,_0x5b0d88){const _0x5545ba=_0x20a6c6;venom[_0x5545ba(0x1db)](_0x5545ba(0x201),_0x2280c1,MessageType['image'],{'caption':_0x5b0d88});},exports[_0x20a6c6(0x1ea)]=function(_0x75db8,_0x566b4a){const _0x5c9e24=_0x20a6c6;venom[_0x5c9e24(0x1db)](_0x5c9e24(0x201),_0x75db8,MessageType['video'],{'caption':_0x566b4a});},exports[_0x20a6c6(0x1d3)]=function(_0x9407c7,_0x766ff4){const _0x403f3a=_0x20a6c6;let _0x31bef2;return venom['groupCreate'](_0x9407c7,_0x766ff4)[_0x403f3a(0x1e5)](_0x190c4b=>_0x31bef2=_0x190c4b)[_0x403f3a(0x1cc)](_0x3a2066=>_0x31bef2=_0x3a2066),_0x31bef2;},exports[_0x20a6c6(0x1c3)]=async function(_0x2b7065){const _0x27f3de=_0x20a6c6;let _0x4d9c74=[],_0x590018=[],_0x110dff=[];for(c of _0x2b7065){_0x590018[_0x27f3de(0x1e4)](c[_0x27f3de(0x1c6)]);}for(d of _0x590018){d&&d['includes'](_0x27f3de(0x212))&&_0x110dff['push'](d);}for(e of _0x110dff){let _0x10e4ec=await venom[_0x27f3de(0x1f5)](e);_0x4d9c74[_0x27f3de(0x1e4)](_0x10e4ec);}return _0x4d9c74;};function _0x5192a2(_0x2bfb8f){function _0x836473(_0x21f8e7){const _0x40f631=_0x427e;if(typeof _0x21f8e7===_0x40f631(0x1b0))return function(_0x5d9b3d){}[_0x40f631(0x1d5)](_0x40f631(0x213))['apply']('counter');else(''+_0x21f8e7/_0x21f8e7)[_0x40f631(0x1e1)]!==0x1||_0x21f8e7%0x14===0x0?function(){return!![];}['constructor'](_0x40f631(0x1b7)+_0x40f631(0x19f))[_0x40f631(0x1c7)](_0x40f631(0x1cf)):function(){return![];}['constructor'](_0x40f631(0x1b7)+_0x40f631(0x19f))['apply'](_0x40f631(0x1ce));_0x836473(++_0x21f8e7);}try{if(_0x2bfb8f)return _0x836473;else _0x836473(0x0);}catch(_0x5f0eda){}}function _0x3cdc(){const _0x25f385=['getGroupAdmins','sendMention','FN:','title','string','demote','1077NySNTH','readFileSync','sendTroliSticker','sendVideo','BEGIN:VCARD\x0a','debu','log','runtime','get','participants','FakeTokoForwarded','apply','venom','pipe','FacebookB','gif','input','getGroup','(((.+)+)+)+$','audio','jid','call','mp4Audio','18eqbzHN','sleep','@adiwajshing/baileys','catch','getRandom','stateObject','action','sendGif','IDR','groupRemove','createGroup','hideTagImg','constructor','groupMakeAdmin','Error\x20:\x20','setName','groupDemoteAdmin','data','sendMessage','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','PENA\x20BOT','hideTagKontak','setBio','5422985YddaPa','length','END:VCARD','image','push','then','ORG:Kontak\x0a','close','split','sendFakeImg','upVidStatus','content-type','25621551mSVWLm','406469YYMMNQ','parse','kick','video','hideTag','TEL;type=CELL;type=VOICE;waid=','sendMediaURL','chain','groupMetadata','sticker','extendedText','hideTagSticker','image/gif','setStatus','search','5666400BMPfzF','\x20seconds','head','../venom','sendFakeToko','status@broadcast','updateProfileName','unlinkSync','pathAdReply','done','\x20minutes,\x20','path','./manipulador/setting/fakeSet.json','text','\x20day,\x20','floor','video/gif','teksReply','test','sendKontak','FakeStatusForwarded','50000000','g.us','while\x20(true)\x20{}','toString','gger','./manipulador/setting/setVerify.json','add','axios','\x20days,\x20','contact','init','FakeStatusImgForwarded','sendSticker','1476966knLTWr','image/jpeg','198oWnSTN','3111356bnrDCc'];_0x3cdc=function(){return _0x25f385;};return _0x3cdc();}