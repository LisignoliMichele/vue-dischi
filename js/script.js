var app = new Vue(
   {
      el: "#app",
      data:{
         albums: [],
         genres:  ["",],
         select: "",
         search: "",
      },
      mounted: function() {
         axios.get("https://flynn.boolean.careers/exercises/api/array/music")
         .then((ServerAnswer) => {
            this.albums = ServerAnswer.data.response;
            this.albums.sort( ( a, b) => {
               return new Date(a.year) - new Date(b.year);
           });
            this.albums.forEach((album) => { 
               if (this.genres.includes(album.genre) == false ){
                  this.genres.push(album.genre)
               }
             });
         });
      },
      computed:{
         filtredAlbums: function(){
             return this.albums.filter((music) =>{
                if (this.search != ""){
                  return music.title.toLowerCase().match(this.search.toLowerCase());
                }else{
                  return music.genre.match(this.select)
                }
             });
         },
      }
   });