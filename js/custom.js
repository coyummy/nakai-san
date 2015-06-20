/*
	Programmer: Lukasz Czerwinski
	CodeCanyon: http://codecanyon.net/user/Lukasz_Czerwinski
	 
	If this script you like, please put a comment on codecanyon.
	
*/

$(document).ready(function (){ 
  //Usage 
  $("#gallery").flickrGallery({
            //FLICKR API KEY
            Key: '0a1b25a53e9e14f082d4279801a21e07',
            //Secret
            Secret: '1793b8daf49c1b83',
            //FLICKR user ID
            User: '40678900@N04',
            //Flickr PhotoSet ID
            PhotoSet: '72157654808937155'
  });
}); 
