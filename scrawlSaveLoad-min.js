/*! scrawl 2014-04-05 */
"use strict";var scrawl=function(a){return a.load=function(b){var c,d,e,f,g;a.isa(b,"str")&&(b=[b]);for(var h=0,i=b.length;i>h;h++)if(a.isa(b[h],"str")&&(c=JSON.parse(b[h]),a.xt(c.type)))if(d=c.type.toLowerCase(),a.contains(a[c.classname],c.name)){e=a[d][c.name].parse(),f=a.d[c.type],g=Object.keys(e);for(var j=0,k=g.length;k>j;j++)a.xt(c[g])||(c[g]=f[g]);a[d][c.name].set(c)}else switch(d){case"pad":a.addCanvasToPage(c),a.currentPad=c.name;break;case"cell":a.xt(c.pad)&&a.contains(a.padnames,c.pad)&&!a.contains(a.pad[c.pad].cells,c.name)&&a.pad[c.pad].addNewCell(c);break;case"group":a.newGroup(c);break;case"path":a.makePath(c);break;case"gradient":a.newGradient(c);break;case"radialgradient":a.newRadialGradient(c);break;default:new a[c.type](c)}return!0},a.save=function(b){var c=[];switch(b){case"pads":for(var d=0,e=a.padnames.length;e>d;d++)c=c.concat(a.pad[a.padnames[d]].toString());break;case"cells":for(var d=0,e=a.cellnames.length;e>d;d++)c=c.concat(a.cell[a.cellnames[d]].toString());break;case"groups":for(var d=0,e=a.groupnames.length;e>d;d++)c=c.concat(a.group[a.groupnames[d]].toString());break;case"sprites":for(var d=0,e=a.spritenames.length;e>d;d++)c=c.concat(a.sprite[a.spritenames[d]].toString());break;case"designs":for(var d=0,e=a.designnames.length;e>d;d++)c=c.concat(a.design[a.designnames[d]].toString());break;case"animsheets":if(a.xt(a.animnames))for(var d=0,e=a.animnames.length;e>d;d++)c=c.concat(a.anim[a.animnames[d]].toString());break;case"springs":if(a.xt(a.springnames))for(var d=0,e=a.springnames.length;e>d;d++)c=c.concat(a.spring[a.springnames[d]].toString())}return c},a.Base.prototype.toString=function(){var b=Object.keys(a.d[this.type]),c={};c.type=this.type,c.classname=this.classname,c.name=this.name;for(var d=0,e=b.length;e>d;d++)a.xt(this[b[d]])&&this[b[d]]!==a.d[this.type][b[d]]&&(c[b[d]]=this[b[d]]);return JSON.stringify(c)},a.Position.prototype.toString=function(){var b=Object.keys(a.d[this.type]),c={};c.type=this.type,c.classname=this.classname,c.name=this.name;for(var d=0,e=b.length;e>d;d++)a.contains(["start","delta","handle"],b[d])?this[b[d]].isLike(a.d[this.type][b[d]])||(c[b[d]]=this[b[d]]):a.xt(this[b[d]])&&this[b[d]]!==a.d[this.type][b[d]]&&(c[b[d]]=this[b[d]]);return JSON.stringify(c)},a.PageElement.prototype.toString=function(){var b,c=Object.keys(a.d[this.type]),d={};d.type=this.type,d.classname=this.classname,d.name=this.name;for(var e=0,f=c.length;f>e;e++)a.contains(["start","delta","handle","perspective","translate"],c[e])&&(this[c[e]].isLike(a.d[this.type][c[e]])||(d[c[e]]=this[c[e]])),"rotation"===c[e]&&(b=this.rotation.getEulerAngles(),0!==b.pitch&&(d.pitch=b.pitch),0!==b.yaw&&(d.yaw=b.yaw),0!==b.roll&&(d.roll=b.roll)),"deltaRotation"===c[e]?(b=this.rotation.getEulerAngles(),0!==b.pitch&&(d.deltaPitch=b.pitch),0!==b.yaw&&(d.deltaYaw=b.yaw),0!==b.roll&&(d.deltaRoll=b.roll)):a.xt(this[c[e]])&&this[c[e]]!==a.d[this.type][c[e]]&&(d[c[e]]=this[c[e]]);return JSON.stringify(d)},a.Pad.prototype.toString=function(b){var c,d=Object.keys(a.d[this.type]),e={},f=[],g=[],h=[],i=[];e.type=this.type,e.classname=this.classname,e.name=this.name,e.parentElement=a.canvas[this.name].parentElement.id;for(var j=0,k=d.length;k>j;j++)a.contains(["start","delta","handle"],d[j])?this[d[j]].isLike(a.d[this.type][d[j]])||(e[d[j]]=this[d[j]]):a.xt(this[d[j]])&&this[d[j]]!==a.d[this.type][d[j]]&&(e[d[j]]=this[d[j]]);if(delete e.displayOffsetX,delete e.displayOffsetY,f.push(JSON.stringify(e)),!b){for(var j=0,k=this.cells.length;k>j;j++){for(var l=0,m=a.cell[this.cells[j]].groups.length;m>l;l++)a.pushUnique(g,a.cell[this.cells[j]].groups[l]);f.push(a.cell[this.cells[j]].toString(!0))}for(var j=0,k=g.length;k>j;j++){for(var l=0,m=a.group[g[j]].sprites.length;m>l;l++)a.pushUnique(h,a.group[g[j]].sprites[l]);f.push(a.group[g[j]].toString(!0))}for(var j=0,k=h.length;k>j;j++)c=a.ctx[a.sprite[h[j]].context],a.contains(a.designnames,c.fillStyle)&&a.pushUnique(i,c.fillStyle),a.contains(a.designnames,c.strokeStyle)&&a.pushUnique(i,c.strokeStyle),a.contains(a.designnames,c.shadowColor)&&a.pushUnique(i,c.shadowColor);for(var j=0,k=i.length;k>j;j++)f.push(a.design[i[j]].toString());for(var j=0,k=h.length;k>j;j++)f.push(a.sprite[h[j]].toString(!0))}return f},a.Cell.prototype.toString=function(b){var c,d=Object.keys(a.d[this.type]),e={},f=[],g=[],h=[];e.type=this.type,e.classname=this.classname,e.name=this.name;for(var i=0,j=d.length;j>i;i++)a.contains(["start","delta","handle","source","sourceDelta"],d[i])?this[d[i]].isLike(a.d[this.type][d[i]])||(e[d[i]]=this[d[i]]):a.xt(this[d[i]])&&this[d[i]]!==a.d[this.type][d[i]]&&(e[d[i]]=this[d[i]]);if(f.push(JSON.stringify(e)),!b){for(var i=0,j=this.groups.length;j>i;i++){for(var k=0,l=a.group[this.groups[i]].sprites.length;l>k;k++)a.pushUnique(g,a.group[this.groups[i]].sprites[k]);f.push(a.group[this.groups[i]].toString(!0))}for(var i=0,j=g.length;j>i;i++)c=a.ctx[a.sprite[g[i]].context],a.contains(a.designnames,c.fillStyle)&&a.pushUnique(h,c.fillStyle),a.contains(a.designnames,c.strokeStyle)&&a.pushUnique(h,c.strokeStyle),a.contains(a.designnames,c.shadowColor)&&a.pushUnique(h,c.shadowColor);for(var i=0,j=h.length;j>i;i++)f.push(a.design[h[i]].toString());for(var i=0,j=g.length;j>i;i++)f.push(a.sprite[g[i]].toString(!0))}return f},a.Context.prototype.toString=function(){for(var b={},c=0,d=a.contextKeys.length;d>c;c++)"lineDash"===a.contextKeys[c]?a.xt(this.lineDash)&&this.lineDash.length>0&&(b.lineDash=this.lineDash):a.xt(this[a.contextKeys[c]])&&this[a.contextKeys[c]]!==a.d.Context[a.contextKeys[c]]&&(b[a.contextKeys[c]]=this[a.contextKeys[c]]);return JSON.stringify(b)},a.Group.prototype.toString=function(b){var c,d=Object.keys(a.d[this.type]),e={},f=[],g=[];e.type=this.type,e.classname=this.classname,e.name=this.name;for(var h=0,i=d.length;i>h;h++)a.xt(this[d[h]])&&this[d[h]]!==a.d[this.type][d[h]]&&(e[d[h]]=this[d[h]]);if(delete e.sprites,f.push(JSON.stringify(e)),!b){for(var h=0,i=this.sprites.length;i>h;h++)c=a.ctx[a.sprite[this.sprites[h]].context],a.contains(a.designnames,c.fillStyle)&&a.pushUnique(g,c.fillStyle),a.contains(a.designnames,c.strokeStyle)&&a.pushUnique(g,c.strokeStyle),a.contains(a.designnames,c.shadowColor)&&a.pushUnique(g,c.shadowColor);for(var h=0,i=g.length;i>h;h++)f.push(a.design[g[h]].toString());for(var h=0,i=this.sprites.length;i>h;h++)f.push(a.sprite[this.sprites[h]].toString(!0))}return f},a.Group.prototype.save=function(){var b=Object.keys(a.d[this.type]),c={};c.type=this.type,c.classname=this.classname,c.name=this.name;for(var d=0,e=b.length;e>d;d++)a.xt(this[b[d]])&&this[b[d]]!==a.d[this.type][b[d]]&&(c[b[d]]=this[b[d]]);return[JSON.stringify(c)]},a.Sprite.prototype.toString=function(b){b=a.xt(b)?b:!1;var c,d=Object.keys(a.d[this.type]),e={},f=a.ctx[this.context],g=[],h=[];if(e.type=this.type,e.classname=this.classname,e.name=this.name,!b){f&&f.fillStyle&&a.contains(a.designnames,f.fillStyle)&&a.pushUnique(g,f.fillStyle),f&&f.strokeStyle&&a.contains(a.designnames,f.strokeStyle)&&a.pushUnique(g,f.strokeStyle),f&&f.shadowColor&&a.contains(a.designnames,f.shadowColor)&&a.pushUnique(g,f.shadowColor);for(var i=0,j=g.length;j>i;i++)h.push(a.design[g[i]].toString())}for(var i=0,j=d.length;j>i;i++)if(a.contains(["start","delta","handle"],d[i]))this[d[i]].isLike(a.d[this.type][d[i]])||(e[d[i]]=this[d[i]]);else if("context"===d[i]&&a.xt(a.ctx[this.context])){f=JSON.parse(a.ctx[this.context].toString()),c=Object.keys(f);for(var k=0,l=c.length;l>k;k++)e[c[k]]=f[c[k]]}else a.contains(["collisionVectors","dataSet","pointList","firstPoint","linkList","linkDurations","perimeterLength","style","variant","weight","size","metrics","family","texts"],d[i])||a.xt(this[d[i]])&&this[d[i]]!==a.d[this.type][d[i]]&&(e[d[i]]=this[d[i]]);return"Picture"===this.type&&(e.url=a.image[this.source].source),h.push(JSON.stringify(e).replace("\\n","\\\\n")),h},a}(scrawl);