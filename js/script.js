var app = new Vue(
   {
      el: "#app",
      data:{
         albums: [],
         genres:  ["",],
         select: "",
      },
      mounted: function() {
         axios.get("https://flynn.boolean.careers/exercises/api/array/music")
         .then((ServerAnswer) => {
            this.albums = ServerAnswer.data.response;
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
                 return music.genre.match(this.select);
             });
         }
     }
   
   });
   // Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
