   var ht="",cs="",js="",res="";
      
      // response of html
      	var flask_html = new CodeFlask;
          	flask_html.run("#text_html",{
          		language: 'html',
          		lineNumbers:false
          	});

          	flask_html.onUpdate(function(text_html){
          		  ht = text_html;
                res = ht.concat(cs,js);
                document.getElementById("frameId").srcdoc=res;
          	});


  	   // response of css
        var flask_css = new CodeFlask;
            flask_css.run('#text_css', {
                language: 'css',
                lineNumbers: false
            });

            flask_css.onUpdate(function(text_css) {
                cs = '\n\n<style>\n\n'.concat(text_css,'\n\n</','style>\n\n');
                res = ht.concat(cs,js);
                document.getElementById("frameId").srcdoc=res;
            });


        //response of javascript
         var flask_js = new CodeFlask;
            flask_js.run('#text_js', {
                language: 'js',
                lineNumbers: false
            });

            flask_js.onUpdate(function(text_js) {
                js = '\n\n<script>\n\n'.concat(text_js,'\n\n</','script>\n\n');
                res = ht.concat(cs,js);
                document.getElementById("frameId").srcdoc=res;
            });

          function Refresh(){
            document.getElementById("frameId").contentWindow.location.reload();
          }

          function Maximize(){
            document.getElementById("editor_box").style.visibility="collapse";
             // document.getElementById("output_box").style.margin="0";
          }

          //reload page 
          function Reload_page()
          {
            location = 'test.html';

          }

          $(function()
            {
                    //maximize for output box
                        $("#maximize_output").click(function(){
                          if($(this).hasClass('max_temp_output')){
                            $("#code_section").slideToggle();
                            $("#output_box").css("margin","0px")
                            $(this).removeClass('max_temp_output');
                            $("#section_header").slideDown();
                          }
                        
                          else{
                             $("#code_section").slideToggle();
                             $("#output_box").css("margin","-17px");
                             $("#output_box").css("margin-top","-20px");
                             $("#output_box").css("color","red");
                             $(this).addClass('max_temp_output');
                             $("#section_header").slideUp();
                           }
                           
                        }); 

                    //maximize html
                         $("#maximize_html").click(function(){
                          if($(this).hasClass('max_temp_html')){

                              $("#html_col_id").removeClass('col-md-2');
                              $("#html_col_id").removeClass('col-md-4');
                              $("#html_col_id").removeClass('col-md-8');

                              $("#css_col_id").removeClass('col-md-2');
                              $("#css_col_id").removeClass('col-md-4');
                              $("#css_col_id").removeClass('col-md-8');

                              $("#js_col_id").removeClass('col-md-2');
                              $("#js_col_id").removeClass('col-md-4');
                              $("#js_col_id").removeClass('col-md-8');

                              $("#html_col_id").addClass('col-md-4');
                              $("#css_col_id").addClass('col-md-4');
                              $("#js_col_id").addClass('col-md-4');

                              $(".codeview").css("height","250px");

                              $(this).removeClass('max_temp_html');//essential
                          }
                        
                          else{

                              $("#html_col_id").removeClass('col-md-2')
                              $("#html_col_id").removeClass('col-md-4');
                              $("#html_col_id").removeClass('col-md-8');

                              $("#css_col_id").removeClass('col-md-2');
                              $("#css_col_id").removeClass('col-md-4');
                              $("#css_col_id").removeClass('col-md-8');

                              $("#js_col_id").removeClass('col-md-2');
                              $("#js_col_id").removeClass('col-md-4');
                              $("#js_col_id").removeClass('col-md-8');
                              

                              $("#html_col_id").addClass('col-md-8');
                              $("#css_col_id").addClass('col-md-2');
                              $("#js_col_id").addClass('col-md-2');

                              $(".codeview").css("height","500px");

                             $(this).addClass('max_temp_html');//essential
                           }     
                        });   

                    //maximize css
                         $("#maximize_css").click(function(){
                          if($(this).hasClass('max_temp_css')){

                              $("#html_col_id").removeClass('col-md-2');
                              $("#html_col_id").removeClass('col-md-4');
                              $("#html_col_id").removeClass('col-md-8');

                              $("#css_col_id").removeClass('col-md-2');
                              $("#css_col_id").removeClass('col-md-4');
                              $("#css_col_id").removeClass('col-md-8');

                              $("#js_col_id").removeClass('col-md-2');
                              $("#js_col_id").removeClass('col-md-4');
                              $("#js_col_id").removeClass('col-md-8');

                              $("#html_col_id").addClass('col-md-4');
                              $("#css_col_id").addClass('col-md-4');
                              $("#js_col_id").addClass('col-md-4');

                              $(".codeview").css("height","250px");

                              $(this).removeClass('max_temp_css');//essential
                          }
                        
                          else{

                              $("#html_col_id").removeClass('col-md-2')
                              $("#html_col_id").removeClass('col-md-4');
                              $("#html_col_id").removeClass('col-md-8');

                              $("#css_col_id").removeClass('col-md-2');
                              $("#css_col_id").removeClass('col-md-4');
                              $("#css_col_id").removeClass('col-md-8');

                              $("#js_col_id").removeClass('col-md-2');
                              $("#js_col_id").removeClass('col-md-4');
                              $("#js_col_id").removeClass('col-md-8');
                              

                              $("#html_col_id").addClass('col-md-2');
                              $("#css_col_id").addClass('col-md-8');
                              $("#js_col_id").addClass('col-md-2');

                              $(".codeview").css("height","500px");

                             $(this).addClass('max_temp_css');//essential

                           }       
                        });

                    //  maximize js
                       $("#maximize_js").click(function(){
                          if($(this).hasClass('max_temp_js')){

                              $("#html_col_id").removeClass('col-md-2');
                              $("#html_col_id").removeClass('col-md-4');
                              $("#html_col_id").removeClass('col-md-8');

                              $("#css_col_id").removeClass('col-md-2');
                              $("#css_col_id").removeClass('col-md-4');
                              $("#css_col_id").removeClass('col-md-8');

                              $("#js_col_id").removeClass('col-md-2');
                              $("#js_col_id").removeClass('col-md-4');
                              $("#js_col_id").removeClass('col-md-8');

                              $("#html_col_id").addClass('col-md-4');
                              $("#css_col_id").addClass('col-md-4');
                              $("#js_col_id").addClass('col-md-4');

                              $(".codeview").css("height","250px");

                            $(this).removeClass('max_temp_js');//essential
                          }
                        
                          else{

                              $("#html_col_id").removeClass('col-md-2');
                              $("#html_col_id").removeClass('col-md-4');
                              $("#html_col_id").removeClass('col-md-8');

                              $("#css_col_id").removeClass('col-md-2');
                              $("#css_col_id").removeClass('col-md-4');
                              $("#css_col_id").removeClass('col-md-8');

                              $("#js_col_id").removeClass('col-md-2');
                              $("#js_col_id").removeClass('col-md-4');
                              $("#js_col_id").removeClass('col-md-8');
                              

                              $("#html_col_id").addClass('col-md-2');
                              $("#css_col_id").addClass('col-md-2');
                              $("#js_col_id").addClass('col-md-8');

                              $(".codeview").css("height","500px");

                             $(this).addClass('max_temp_js');//essential
     
                           }           
                        });     
                        
            });

          //download
          function Download()
          {
            $("#save_modal").modal('hide')
            var text=res , name, type='text/plain';
              name = document.getElementById("file_name").value;
              name = name.concat(".html")
              var a = document.getElementById("save_file");
              var file = new Blob([text],{type:type});
              a.href = URL.createObjectURL(file);
              a.download = name ;
          }
