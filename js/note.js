var inputValue;
var idNote = 0;

function newNote(text){
  var note = '<div class="noteOuter">'
        +'<div class="noteInner d-flex flex-direction-row">'
        +'<div class="moveNote d-flex align-vertical-center">'
        + '<i class="fas fa-ellipsis-v"></i><i class="fas fa-ellipsis-v"></i>'
        + '</div>'
        + '<div class="descriptionNote d-flex align-vertical-center">'
        + '<p>' +text +'</p>'
        + '</div>'
        + '<div class="controlsNote d-flex align-vertical-center">'
        + '<i class="fas fa-edit" onClick="editNote(this)"></i>'
        + '<i class="far fa-check-square" onClick="completeNote(this)"></i>'
        + '<i class="fas fa-minus-circle" onClick="deleteNote(this)"></i>'
        + '</div></div></div>'
   return note;
}
function completedNote(text){
  var note = '<div class="noteOuter">'
        +'<div class="noteInner d-flex flex-direction-row">'
        +'<div class="moveNote d-flex align-vertical-center">'
        + '<i class="fas fa-ellipsis-v"></i><i class="fas fa-ellipsis-v"></i>'
        + '</div>'
        + '<div class="descriptionNote d-flex align-vertical-center">'
        + '<p>' +text +'</p>'
        + '</div>'
        + '<div class="controlsNote d-flex align-vertical-center">'
        + '<i class="fas fa-minus-circle" onClick="deleteNote(this)"></i>'
        + '</div></div></div>';
    return note;
}

document.getElementById('input').addEventListener('keyup', function(event){
  if(event.keyCode == 13){
    inputValue = document.getElementById('input').value;
    if(inputValue != ''){
      document.getElementById('input').value = '';
      document.getElementById('notCompletedNotes').innerHTML += newNote(inputValue);
    }
  }
});
document.getElementById('input').addEventListener('keyup', function(event){
  if(event.keyCode == 13){
    inputValue = document.getElementById('input').value;
    if(inputValue != ''){
      document.getElementById('input').value = '';
      document.getElementById('notCompletedNotes').innerHTML += newNote(inputValue);
    }
  }
});

function deleteNote(button){
  var controlsNote = button.parentNode;
  var note = controlsNote.parentNode;
  note.style.opacity = "0";
  setTimeout(function(){
    note.parentNode.removeChild(note);
  }, 300);
}

function completeNote(button){
  var controlsNote = button.parentNode;
  var noteInner = controlsNote.parentNode;
  var descriptionNote = noteInner.children[1].innerHTML;
  document.getElementById('CompletedNotes').innerHTML += completedNote(descriptionNote);
  deleteNote(button);
}

function editNote(button){
  var controlsNote = button.parentNode;
  var note = controlsNote.parentNode;
  var descriptionNote = note.children[1];
  var textNote = descriptionNote.firstElementChild.innerHTML;
  var inputText = '<input type="text" value="' +textNote +'"/>';
  var editNoteText = '<p>' +textNote +'</p>';
  if(descriptionNote.innerHTML == editNoteText){
    descriptionNote.innerHTML = '';
    descriptionNote.innerHTML = '<input type="text" value="' +textNote +'"/>';
  }else if(descriptionNote.getElementsByTagName('INPUT')){
    descriptionNote.innerHTML ='<p>' +descriptionNote.firstElementChild.value +'</p>';
  }
}
