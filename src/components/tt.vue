<script setup>
import { extractRawText } from 'mammoth'

// import docx2html from 'docx2html'

async function tt(e) {
  // console.log(e.target.value)
  // console.log(e.target.files[0])
  
  // docx2html(e.target.files[0])
  // console.log(a)
  
  // extractRawText({path: e.target.value})
  //   .then(function(result){
  //       var text = result.value; // The raw text
  //       var messages = result.messages;
  //   })
  //   .catch(function(error) {
  //       console.error(error);
  //   });
  // const test = await mammoth.convertToHtml({path: e.target.value })
  // console.log(test)  
  // .then(function(result){
    //   var html = result.value; // The generated HTML
    //   var messages = result.messages; // Any messages, such as warnings during conversion
    // })
    // .done()
  }
</script>


<template>
  <div>
    <input type="file" @change="tt"/>
  </div>
</template>


<style lang="scss" scoped>

</style>