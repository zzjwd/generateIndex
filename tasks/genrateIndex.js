/*
 * mapfiles
 * zzjwd,qq:550703900
 *
 * Copyright (c) 2016 zzjwd
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerMultiTask('generateIndex', 'generateIndex', function() {
    var config=grunt.config.data.pkg,d=new Date(),
        fileName=config.published?config.name+"-"+config.version+".min":"all",
        data={
          author:config.author.name,
          name:config.author.email,
          qq:config.author.QQ,
          date:d.getFullYear()+"-"+ (d.getMonth()+1)+"-"+d.getDate(),
          fileName:fileName
        }
    this.files.forEach(function(f) {
      var src =grunt.file.read(f.src);
      src=src.replace(/<%([^%]+)%>/g,function(m,s){
        return data[s];
      });
      grunt.file.write(f.dest, src);
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });
};
