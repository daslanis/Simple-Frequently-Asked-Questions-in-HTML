
      function drop(txt){
        if(txt==='one'){
          if(document.getElementsByClassName('one')[0].style.display != 'block'){
          document.getElementsByClassName('question')[0].innerHTML = document.getElementsByClassName('question')[0].innerHTML.replace('► ', '▼ ') ;
          document.getElementsByClassName('one')[0].style.display = 'block';
        }
          else{
            document.getElementsByClassName('question')[0].innerHTML = document.getElementsByClassName('question')[0].innerHTML.replace('▼ ', '► ');
            document.getElementsByClassName('one')[0].style.display = 'none';
          }
        }
        else if(txt==='two'){
          if(document.getElementsByClassName('two')[0].style.display != 'block'){
          document.getElementsByClassName('question')[1].innerHTML = document.getElementsByClassName('question')[1].innerHTML.replace('► ', '▼ ') ;
          document.getElementsByClassName('two')[0].style.display = 'block';
        }
          else{
            document.getElementsByClassName('question')[1].innerHTML = document.getElementsByClassName('question')[1].innerHTML.replace('▼ ', '► ');
            document.getElementsByClassName('two')[0].style.display = 'none';
          }
        }
        else if(txt==='three'){
          {
            if(document.getElementsByClassName('three')[0].style.display != 'block'){
            document.getElementsByClassName('question')[2].innerHTML = document.getElementsByClassName('question')[2].innerHTML.replace('► ', '▼ ') ;
            document.getElementsByClassName('three')[0].style.display = 'block';
          }
            else{
              document.getElementsByClassName('question')[2].innerHTML = document.getElementsByClassName('question')[2].innerHTML.replace('▼ ', '► ');
              document.getElementsByClassName('three')[0].style.display = 'none';
            }
          }
        }
      }
