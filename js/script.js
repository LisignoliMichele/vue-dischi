var app = new Vue(
   {
      el: "#app",
      data:{
         albums: []
      },
      mounted: function() {
         axios.get("https://flynn.boolean.careers/exercises/api/array/music")
         .then((ServerAnswer) => {
            this.albums = ServerAnswer.data.response;
         });
      }

   });
