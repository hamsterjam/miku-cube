var gl,startWebGL=function(){function k(){gl.tex.mikutan=gl.createTexture();gl.tex.mikutan.image=new Image;gl.tex.mikutan.image.onload=function(){gl.bindTexture(gl.TEXTURE_2D,gl.tex.mikutan);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,!0);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,gl.tex.mikutan.image);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.bindTexture(gl.TEXTURE_2D,null)};gl.tex.mikutan.image.src=
"tetotan.png"}var l=function(){function e(b,d){var a,c="";for(a=d.firstChild;a;)3===a.nodeType&&(c+=a.textContent),a=a.nextSibling;if("x-shader/x-fragment"===d.type)a=b.createShader(b.FRAGMENT_SHADER);else if("x-shader/x-vertex"===d.type)a=b.createShader(b.VERTEX_SHADER);else return console.error("unrecognised shader script type"),null;b.shaderSource(a,c);b.compileShader(a);return b.getShaderParameter(a,b.COMPILE_STATUS)?a:(console.error(b.getShaderInfoLog(a)),null)}return function(b,d){var a=e(gl,
b),c=e(gl,d),f=gl.createProgram();gl.attachShader(f,a);gl.attachShader(f,c);gl.linkProgram(f);gl.getProgramParameter(f,gl.LINK_STATUS)||console.error("Could not initalise shaders");gl.useProgram(f);gl.attrib.vertPos=gl.getAttribLocation(f,"aVertPos");gl.attrib.texCoord=gl.getAttribLocation(f,"aTexCoord");gl.enableVertexAttribArray(gl.attrib.vertPos);gl.enableVertexAttribArray(gl.attrib.texCoord);gl.uniform.PMatrix=gl.getUniformLocation(f,"uPMatrix");gl.uniform.MVMatrix=gl.getUniformLocation(f,"uMVMatrix");
gl.uniform.texture=gl.getUniformLocation(f,"uTexture");a=mat4.create();mat4.perspective(a,45,gl.viewportWidth/gl.viewportHeight,.1,100);gl.uniformMatrix4fv(gl.uniform.PMatrix,!1,a);a=mat4.create();mat4.translate(a,a,[0,0,-3.5]);gl.uniformMatrix4fv(gl.uniform.MVMatrix,!1,a)}}(),h=function(){var e=0,b=0,d=0,a=0;return function(){requestAnimFrame(h);var c=(new Date).getTime();if(0!==e){var f=c-e,g=Math.PI/3E3;b+=g*f;d+=2*g/3*f;a+=5*g/3*f;b%=2*Math.PI;d%=2*Math.PI;a%=2*Math.PI}e=c;c=mat4.create();mat4.translate(c,
c,[0,0,-3.5]);mat4.rotateX(c,c,b);mat4.rotateY(c,c,d);mat4.rotateZ(c,c,a);gl.uniformMatrix4fv(gl.uniform.MVMatrix,!1,c);gl.viewport(0,0,gl.viewportWidth,gl.viewportHeight);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.bindBuffer(gl.ARRAY_BUFFER,gl.vbo.cubeVerticies);gl.vertexAttribPointer(gl.attrib.vertPos,gl.vbo.cubeVerticies.itemSize,gl.FLOAT,!1,0,0);gl.bindBuffer(gl.ARRAY_BUFFER,gl.vbo.cubeTexCoords);gl.vertexAttribPointer(gl.attrib.texCoord,gl.vbo.cubeTexCoords.itemSize,gl.FLOAT,!1,0,0);
gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,gl.tex.mikutan);gl.uniform1i(gl.uniform.texture,0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,gl.ibo.cubeIndicies);gl.drawElements(gl.TRIANGLES,gl.ibo.cubeIndicies.numItems,gl.UNSIGNED_SHORT,0);gl.bindBuffer(gl.ARRAY_BUFFER,null);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,null);gl.bindTexture(gl.TEXTURE_2D,null)}}();return function(e,b,d){e=document.getElementById(e);b=document.getElementById(b);d=document.getElementById(d);try{gl=e.getContext("webgl"),
gl.vbo={},gl.ibo={},gl.tex={},gl.attrib={},gl.uniform={},gl.viewportWidth=e.width,gl.viewportHeight=e.height}catch(a){}gl||console.error("Could not initialise WebGL");l(b,d);gl.vbo.cubeVerticies=gl.createBuffer();gl.vbo.cubeVerticies.itemSize=3;gl.vbo.cubeVerticies.numItems=24;gl.bindBuffer(gl.ARRAY_BUFFER,gl.vbo.cubeVerticies);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,1,1,1,1,1,1,-1,1,-1,1,-1,1,1,-1,1,1,1,-1,1,1,-1,-1,-1,1,-1,-1,1,1,-1,-1,1,-1,-1,-1,-1,-1,-1,1,1,-1,1,1,-1,-1,-1,
1,-1,-1,1,1,-1,-1,1,-1,-1,-1,1,1,-1,1,-1,-1,1,-1,1,1,1,1]),gl.STATIC_DRAW);gl.vbo.cubeTexCoords=gl.createBuffer();gl.vbo.cubeTexCoords.itemSize=2;gl.vbo.cubeTexCoords.numItems=24;d=[0,0,0,1,1,1,1,0];e=[];for(b=0;6>b;b++)e=e.concat(d);gl.bindBuffer(gl.ARRAY_BUFFER,gl.vbo.cubeTexCoords);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(e),gl.STATIC_DRAW);gl.ibo.cubeIndicies=gl.createBuffer();gl.ibo.cubeIndicies.itemSize=1;gl.ibo.cubeIndicies.numItems=36;gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,gl.ibo.cubeIndicies);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,3,2,4,5,6,4,7,6,8,9,10,8,11,10,12,13,14,12,15,14,16,17,18,16,19,18,20,21,22,20,23,22]),gl.STATIC_DRAW);gl.bindBuffer(gl.ARRAY_BUFFER,null);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,null);k();gl.clearColor(0,0,0,1);gl.enable(gl.DEPTH_TEST);h()}}();
